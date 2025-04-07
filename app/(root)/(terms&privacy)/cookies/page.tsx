import Link from "next/link";
export const metadata = {
  title: "Cookies Policy",
  description: "Cookies Policy of our platform",
};
export default function CookiesPage() {
  return (
    <section className="section-container">
      <div className="bg-primary pattern text-center !min-h-[180px] flexCenter mb-10">
        <h1 className="heading">Cookies Policy</h1>
      </div>

      <div className="max-w-4xl mx-auto prose dark:prose-invert prose-headings:text-primary-800 dark:prose-headings:text-primary-200 prose-a:text-primary">
        <p className="lead">Last updated: April 5, 2025</p>
        <p>this is fake cookies policy</p>
        <h2 className="mt-8 text-30-bold">1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or
          mobile device when you visit a website. They are widely used to make
          websites work more efficiently and provide information to the website
          owners.
        </p>

        <h2 className="mt-8 text-30-bold">2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> These cookies are necessary for
            the website to function properly and cannot be switched off in our
            systems.
          </li>
          <li>
            <strong>Performance cookies:</strong> These cookies allow us to
            count visits and traffic sources so we can measure and improve the
            performance of our site.
          </li>
          <li>
            <strong>Functionality cookies:</strong> These cookies enable the
            website to provide enhanced functionality and personalization.
          </li>
          <li>
            <strong>Targeting cookies:</strong> These cookies may be set through
            our site by our advertising partners to build a profile of your
            interests.
          </li>
        </ul>

        <h2 className="mt-8 text-30-bold">3. Types of Cookies We Use</h2>
        <h3 className="mt-4 text-20-medium">3.1 Session Cookies</h3>
        <p>
          Session cookies are temporary cookies that are erased when you close
          your browser. We use session cookies to identify you during a single
          browsing session, such as when you log into the platform.
        </p>

        <h3 className="mt-4 text-20-medium">3.2 Persistent Cookies</h3>
        <p>
          Persistent cookies remain on your device until they expire or you
          delete them. We use persistent cookies to remember your preferences
          and settings when you visit our platform.
        </p>

        <h3 className="mt-4 text-20-medium">3.3 Third-Party Cookies</h3>
        <p>
          Third-party cookies are placed by someone other than us and may gather
          browsing data across multiple websites and across multiple sessions.
          We use them for services such as analytics and advertising.
        </p>

        <h2 className="mt-8 text-30-bold">4. Managing Cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can
          set your browser to refuse cookies, or to alert you when cookies are
          being sent. The methods for doing so vary from browser to browser, and
          from version to version.
        </p>

        <p>
          You can generally find information on how to manage cookie settings on
          browser websites. For example:
        </p>
        <ul className="pl-4">
          <li className="text-secondary-600 hover:underline  hover:underline-offset-2 hover:text-primary  transition-colors duration-100 ease-in-out">
            <Link
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </Link>
          </li>
          <li className="text-secondary-600 hover:underline  hover:underline-offset-2 hover:text-primary  transition-colors duration-100 ease-in-out">
            <Link
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </Link>
          </li>
          <li className="text-secondary-600 hover:underline  hover:underline-offset-2 hover:text-primary  transition-colors duration-100 ease-in-out">
            <Link
              href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </Link>
          </li>
          <li className="text-secondary-600 hover:underline  hover:underline-offset-2 hover:text-primary  transition-colors duration-100 ease-in-out">
            <Link
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </Link>
          </li>
        </ul>

        <h2 className="mt-8 text-30-bold">5. Changes to this Policy</h2>
        <p>
          We may update this Cookies Policy from time to time to reflect changes
          in technology, regulation, or our business practices. Any changes will
          become effective when we post the revised policy on our website.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us
          at <a href="mailto:privacy@example.com">privacy@example.com</a>.
        </p>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
