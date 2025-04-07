import { auth } from "@/auth";
import ProjectForm from "@/components/forms/ProjectForm";
import * as motion from "motion/react-client";
import { redirect } from "next/navigation";
import "server-only";
export const metadata = {
  title: "Submit Your Project",
  description:
    "Submit your project to our platform and find the right collaborators or mentors for your project.",
};
const Page = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  return (
    <>
      <motion.section
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 5, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.1,
        }}
        className="bg-primary flexCenter pattern !min-h-[230px]"
      >
        <h1 className="heading">Submit Your Project</h1>
      </motion.section>

      <ProjectForm />
    </>
  );
};

export default Page;
