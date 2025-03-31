import Link from "next/link";
export default function notFound() {
  return (
    <div className="">
      <h2>Project not found</h2>
      <p>
        The project you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link href="/projects">Return Home</Link>
    </div>
  );
}
