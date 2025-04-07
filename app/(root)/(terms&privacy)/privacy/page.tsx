import Link from "next/link";
export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of our platform",
};
export default function PrivacyPage() {
  return (
    <section className="section-container">
      <div className="bg-primary pattern text-center !min-h-[180px] flexCenter mb-10">
        <h1 className="heading">Privacy Policy</h1>
      </div>

      <div className="max-w-4xl mx-auto prose dark:prose-invert prose-headings:text-primary-800 dark:prose-headings:text-primary-200 prose-a:text-primary">
        <p className="lead">Last updated: April 5, 2025</p>
        <p>this is fake privacy policy</p>

        <h2 className="mt-8 text-30-bold">1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you create an
          account, update your profile, submit a project, or communicate with
          us. This information may include your name, email address, profile
          picture, skills, and any other information you choose to provide.
        </p>

        <h3 className="mt-4 text-20-medium">1.1 Personal Information</h3>
        <p>Personal information may include:</p>
        <ul>
          <li>Contact information (name, email address)</li>
          <li>Profile information (skills, biography, profile picture)</li>
          <li>Account credentials</li>
          <li>Communication preferences</li>
        </ul>

        <h3 className="mt-4 text-20-medium">1.2 Usage Information</h3>
        <p>
          We automatically collect certain information about your use of our
          platform, including:
        </p>
        <ul className="list-disc pl-6 text-16-medium ">
          <li>Log data (IP address, browser type, pages visited)</li>
          <li>Device information</li>
          <li>Location information</li>
          <li>Cookies and similar technologies</li>
        </ul>

        <h2 className="mt-8 text-30-bold">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 text-16-medium ">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>
            Send technical notices, updates, security alerts, and support
            messages
          </li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Personalize your experience on our platform</li>
          <li>
            Monitor and analyze trends, usage, and activities in connection with
            our services
          </li>
        </ul>

        <h2 className="mt-8 text-30-bold">3. Sharing of Information</h2>
        <p>We may share your information as follows:</p>
        <ul className="list-disc pl-6 text-16-medium ">
          <li>
            With other users in accordance with the privacy settings you select
          </li>
          <li>
            With vendors, consultants, and other service providers who need
            access to such information to carry out work on our behalf
          </li>
          <li>
            In response to a request for information if we believe disclosure is
            in accordance with any applicable law, regulation, or legal process
          </li>
          <li>
            If we believe your actions are inconsistent with our user agreements
            or policies, or to protect the rights, property, and safety of us or
            others
          </li>
        </ul>

        <h2 className="mt-8 text-30-bold">4. Your Choices</h2>
        <p>
          You may update, correct, or delete your account information at any
          time by logging into your account. If you wish to delete your account,
          please contact us at{" "}
          <a href="mailto:privacy@example.com">privacy@example.com</a>.
        </p>

        <h2 className="mt-8 text-30-bold">5. Data Security</h2>
        <p>
          We take reasonable measures to help protect information about you from
          loss, theft, misuse, and unauthorized access, disclosure, alteration,
          and destruction.
        </p>

        <h2 className="mt-8 text-30-bold">6. Changes to this Policy</h2>
        <p>
          We may change this Privacy Policy from time to time. If we make
          changes, we will notify you by revising the date at the top of the
          policy and, in some cases, we may provide you with additional notice.
        </p>

        <h2 className="mt-8 text-30-bold">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <a href="mailto:privacy@example.com">privacy@example.com</a>.
        </p>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>
          <Link href="/cookies" className="text-primary hover:underline">
            Cookies Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
