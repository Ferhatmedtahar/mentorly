import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { createClient } from "./utils/supabase/server";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, profile }) {
      try {
        const supabase = await createClient();
        const githubId = profile?.id;

        // Check if the user already exists by searching via github_id.
        const { data: existingUser, error: selectError } = await supabase
          .from("profiles")
          .select("id")
          .eq("github_id", githubId)
          .maybeSingle();

        if (selectError) {
          console.error("Error fetching user from Supabase:", selectError);
          return false;
        }

        // If the user doesn't exist, insert a new record.
        if (!existingUser) {
          const { data: insertedUser, error: insertError } = await supabase
            .from("profiles")
            .insert([
              {
                // id: user.id, // user.id is a valid UUID from Supabase Auth.
                github_id: githubId,
                name: user.name,
                username: profile?.login,
                email: user.email,
                bio: profile?.bio || "",
                avatar_url: user.image,
              },
            ])
            .select("id") // return the new ID
            .single();

          if (insertError) {
            console.error("Error inserting user into Supabase:", insertError);
            return false;
          }
          user.id = insertedUser.id; // ✅ use the one you inserted
        } else {
          user.id = existingUser.id; // ✅ use the one from DB
        }
        return true;
      } catch (error) {
        console.error("Unexpected error during signIn callback:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      // Only set token.id during initial sign-in
      if (user?.id) {
        token.id = user?.id; // ✅ Supabase UUID
      }
      return token;
    },
    async session({ session, token }) {
      Object.assign(session.user, { id: token?.id });
      return session;
    },
  },
});
// async session({ session, token }) {
//   Object.assign(session, { id: token?.id });
//   return session;
// },

// async jwt({ token, account, profile }) {
//   if (account && profile) {
//     const supabase = await createClient();
//     // Query the user from the Supabase database
//     const { data: userData, error } = await supabase
//       .from("profiles")
//       .select("id")
//       .eq("github_id", profile?.id)
//       .maybeSingle();

//     if (error) {
//       console.error("Error fetching user for JWT callback:", error);
//     } else if (userData) {
//       token.id = userData.id;
//     }
//   }
//   return token;
// },
