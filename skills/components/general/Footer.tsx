import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-8 container mx-auto ">
      <div className="grid  grid-cols-1 md:grid-cols-4 gap-8 justify-items-center items-center">
        <div className="space-y-3">
          <h4 className="text-lg font-bold">{"<Mentorly>"}</h4>
          <p className="text-sm text-muted-foreground">
            Connect with mentors and collaborators to bring your projects to
            life.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-pink"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-pink"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-pink"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Browse Projects
              </Link>
            </li>
            <li>
              <Link
                href="/mentors"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Find Mentors
              </Link>
            </li>
            <li>
              <Link
                href="/create-project"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Start a Project
              </Link>
            </li>
            <li>
              <Link
                href="/success-stories"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Success Stories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-brand-pink"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-brand-pink"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mentorly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
