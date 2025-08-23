import React from "react";

interface StripeCardProps {
  children: React.ReactNode;
  className?: string;
}

const StripeCard: React.FC<StripeCardProps> = ({ children, className }) => {
  return (
    <div
      className={`relative p-6 rounded-2xl overflow-hidden shadow-md bg-white ${className}`}
    >
      {/* diagonal stripe background */}
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,#ffffff15_0px,#ffffff15_20px,transparent_20px,transparent_40px)]" />

      {/* content stays above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StripeCard;
