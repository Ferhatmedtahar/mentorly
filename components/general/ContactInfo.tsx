import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const ICONS = {
  email: Mail,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
};

const PLACEHOLDERS = {
  email: "Email address",
  linkedin: "LinkedIn profile URL",
  twitter: "X (Twitter) profile URL",
  github: "GitHub profile URL",
};

type ContactInputGroupProps = {
  readonly contactInfo: Record<string, string>;
  readonly onChange?: (
    key: "email" | "linkedin" | "twitter" | "github",
    value: string
  ) => void;
  readonly errors?: Record<string, string[]>;
};

export default function ContactInputGroup({
  contactInfo,
  onChange,
  errors,
}: ContactInputGroupProps) {
  return (
    <div>
      <Label className="project-form-label">contact information</Label>
      <div className="space-y-4 mt-3">
        {(Object.entries(contactInfo) as [keyof typeof ICONS, string][]).map(
          ([key, value]) => {
            const Icon = ICONS[key];

            return (
              <div key={key} className="flex items-center gap-2">
                <div className="flex-shrink-0 mt-1.5">
                  {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
                </div>
                <Input
                  name={key}
                  id={key}
                  autoComplete={key === "email" ? "email" : "off"}
                  type={key === "email" ? "email" : "url"}
                  placeholder={PLACEHOLDERS[key]}
                  className="project-form-input"
                  value={value}
                  onChange={(e) => onChange?.(key, e.target.value)} // ✅ no more error
                />
              </div>
            );
          }
        )}
      </div>
      {errors?.contactInfo && (
        <p className="project-form-error">{errors.contactInfo[0]}</p>
      )}
    </div>
  );
}
