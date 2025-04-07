import React from "react";

const BenefitCard = ({
  icon: Icon,
  title,
  description,
}: {
  readonly icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  readonly title: string;
  readonly description: string;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </div>
    <div>
      <h3 className="text-20-medium mb-2">{title}</h3>
      <p className="text-black-100">{description}</p>
    </div>
  </div>
);

export default BenefitCard;
