import { auth } from "@/auth";
import ProjectForm from "@/components/forms/ProjectForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="bg-primary flexCenter pattern !min-h-[230px]">
        <h1 className="heading">Submit Your Project</h1>
      </section>

      <ProjectForm />
    </>
  );
};

export default Page;
