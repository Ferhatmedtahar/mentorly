import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-6 sm:py-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {/* Company info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-3">
            <h4 className="text-lg font-bold gradient">{"<Mentorly>"}</h4>

            <p className="text-sm text-muted-foreground">
              Connect with mentors and collaborators to bring your projects to
              life.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Ferhatmedtahar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-700 transition-colors duration-200 ease-in-out"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/FerhatMedTahar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200 ease-in-out"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ferhatmohamedtahar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200 ease-in-out"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="col-span-1">
            <h4 className="text-base font-bold mb-3 lg:text-lg">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects?sort=created_at&order=desc&page=1"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Browse Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/projects/create-project"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Start a Project
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-base font-bold mb-3 lg:text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-base font-bold mb-3 lg:text-lg">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-700 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 ease-in-out"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/40 text-center text-sm text-gray-700 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Mentorly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
