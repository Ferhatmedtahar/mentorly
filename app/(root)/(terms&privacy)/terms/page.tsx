import Link from "next/link";

export default function TermsPage() {
  return (
    <section className="section-container">
      <div className="bg-primary pattern text-center !min-h-[180px] flexCenter mb-10">
        <h1 className="heading">Terms of Service</h1>
      </div>

      <div className="max-w-4xl mx-auto prose dark:prose-invert prose-headings:text-primary-800 dark:prose-headings:text-primary-200 prose-a:text-primary">
        <p>this is fake cookies policy</p>
        <h2 className="mt-8 text-30-bold">1. Acceptance of Terms</h2>
        <p className="mt-4 text-14-normal">
          By accessing and using this platform, you accept and agree to be bound
          by the terms and provisions of this agreement. If you do not agree to
          abide by the above, please do not use this service.
        </p>

        <h2 className="mt-8 text-30-bold">2. User Registration</h2>
        <p className="mt-4 text-14-normal">
          To access certain features of the platform, you may be required to
          register for an account. You agree to provide accurate, current, and
          complete information during the registration process and to update
          such information to keep it accurate, current, and complete.
        </p>

        <h2 className="mt-8 text-30-bold">3. User Conduct</h2>
        <p className="mt-4 text-14-normal">
          You agree not to use the platform to:
        </p>
        <ul className="list-disc pl-6 text-16-medium ">
          <li>
            Upload or transmit any content that is unlawful, harmful,
            threatening, abusive, harassing, defamatory, or otherwise
            objectionable
          </li>
          <li>
            Impersonate any person or entity, or falsely state or otherwise
            misrepresent your affiliation with a person or entity
          </li>
          <li>
            Upload or transmit any content that infringes any patent, trademark,
            trade secret, copyright, or other proprietary rights
          </li>
          <li>
            Interfere with or disrupt the platform or servers or networks
            connected to the platform
          </li>
        </ul>

        <h2 className="mt-8 text-30-bold">4. Project Submissions</h2>
        <p className="mt-4 text-14-normal">
          When you submit a project to our platform, you retain all rights to
          your content. However, you grant us a non-exclusive, worldwide,
          royalty-free license to use, reproduce, adapt, publish, and distribute
          the content for the purpose of displaying and promoting your project
          on our platform.
        </p>

        <h2 className="mt-8 text-30-bold">5. Termination</h2>
        <p className="mt-4 text-14-normal">
          We reserve the right to terminate or suspend your account and access
          to the platform at our sole discretion, without notice, for conduct
          that we believe violates these Terms of Service or is harmful to other
          users of the platform, us, or third parties, or for any other reason.
        </p>

        <h2 className="mt-8 text-30-bold">6. Changes to Terms</h2>
        <p className="mt-4 text-14-normal">
          We reserve the right to modify these terms at any time. We will
          provide notice of any material changes by posting the new Terms of
          Service on the platform. Your continued use of the platform after such
          modifications will constitute your acknowledgment and agreement to the
          modified terms.
        </p>

        <h2 className="mt-8 text-30-bold">7. Contact Information</h2>
        <p className="mt-4 text-14-normal">
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:support@example.com">support@example.com</a>.
        </p>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="text-primary hover:underline">
            Cookies Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
