import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsLoading() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="startup-card max-w-3xl group">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex gap-2 items-center">
              <Skeleton className="h-6 w-10" />
              <Skeleton className="h-6 w-10" />
            </div>
          </div>

          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-3/4 mb-4" />

          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-14" />
          </div>

          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </>
  );
}

export default function Loading() {
  return (
    <section className="profile-container">
      <div className="profile-card">
        <div className="profile-title">
          <Skeleton className="h-8 w-32 mx-auto" />
        </div>

        <div className="relative mx-auto">
          <Skeleton className="h-[220px] w-[220px] rounded-full" />
        </div>

        <Skeleton className="h-8 w-40 mx-auto mt-7" />
        <Skeleton className="h-4 w-64 mx-auto mt-1" />
      </div>

      <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
        <Skeleton className="h-10 w-48" />

        <ul className="mt-7 grid grid-cols-1 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:grid-cols-2 gap-5">
          <ProjectsLoading />
        </ul>
      </div>
    </section>
  );
}

// import { Skeleton } from "@/components/ui/skeleton";

// export function ProjectsLoading() {
//   return (
//     <>
//       {[1, 2, 3, 4, 5, 6].map((i) => (
//         <div key={i} className="startup-card max-w-3xl group">
//           <div className="flex justify-between items-start mb-3">
//             <div className="flex items-center gap-2">
//               <Skeleton className="h-8 w-8 rounded-full" />
//               <Skeleton className="h-4 w-24" />
//             </div>
//             <div className="flex gap-2 items-center">
//               <Skeleton className="h-6 w-10" />
//               <Skeleton className="h-6 w-10" />
//             </div>
//           </div>

//           <Skeleton className="h-8 w-full mb-2" />
//           <Skeleton className="h-4 w-full mb-1" />
//           <Skeleton className="h-4 w-3/4 mb-4" />

//           <div className="flex flex-wrap gap-2 mb-4">
//             <Skeleton className="h-6 w-16" />
//             <Skeleton className="h-6 w-20" />
//             <Skeleton className="h-6 w-14" />
//           </div>

//           <div className="flex justify-between items-center">
//             <Skeleton className="h-6 w-32" />
//             <Skeleton className="h-4 w-24" />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default function Loading() {
//   return (
//     <section className="profile-container">
//       <motion.div className="profile-card">
//         <div className="profile-title">
//           <h3 className="text-30-bold !text-primary-700 uppercase text-center line-clamp-1">
//             {user?.name?.split(" ")[0]}
//           </h3>
//         </div>

//         <Image
//           src={user?.avatar_url}
//           alt={user?.name}
//           width={220}
//           height={220}
//           className="profile-image"
//         />

//         <p className="text-30-semibold  mt-7 text-center">@{user?.username}</p>
//         <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
//       </motion.div>

//       <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
//         <p className="text-30-bold">
//           {session?.user?.id === id ? "Your" : "All"} Startups
//         </p>
//         <ul className="mt-7 grid grid-cols-1  max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:grid-cols-2 gap-5">
//           <Suspense fallback={<ProjectsLoading />}>
//             <UserProjects user_id={id} />
//           </Suspense>
//         </ul>
//       </div>
//     </section>
//   );
// }
// {
//   /* <div className="max-container padding-container py-8">
// <Skeleton className="h-[230px] w-full mb-8" />

// <Skeleton className="h-12 w-full mb-8" />

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//   <ProjectsLoading />
// </div>
// </div> */
// }
