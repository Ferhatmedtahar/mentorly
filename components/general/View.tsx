import { createClient } from "@/utils/supabase/server";
import { after } from "next/server";
import Ping from "./Ping";

export default async function View({ slug }: { readonly slug: string }) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("views")
    .eq("slug", slug)
    .single();
  if (error || !data) {
    throw new Error(`error fetching views : ${error.message}`);
  }
  after(async () => {
    try {
      await supabase
        .from("projects")
        .update({ views: data?.views + 1 })
        .eq("slug", slug);
    } catch {
      throw new Error(`error updating views `);
    }
  });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-extrabold">
          {data?.views > 1 ? <>{data?.views} Views</> : <>1 View</>}
        </span>
      </p>
    </div>
  );
}
