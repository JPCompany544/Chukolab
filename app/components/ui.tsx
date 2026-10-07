import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  }[size];

  return (
    <div className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "between";
  className?: string;
  isBlue?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
  isBlue = false,
}: SectionHeaderProps) {
  const borderClass = isBlue
    ? "border-white/20"
    : "border-[#E8E8EA]";
  const labelClass = isBlue
    ? "text-white/80"
    : "text-[#435BFF]";
  const titleClass = isBlue
    ? "text-white"
    : "text-[#111111]";
  const descClass = isBlue
    ? "text-white/80"
    : "text-[#5F6368]";

  if (align === "between") {
    return (
      <div className={`border-t ${borderClass} pt-10 sm:pt-12 mb-12 sm:mb-16 lg:mb-20 transition-colors duration-700 ${className}`}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className={`font-mono text-xs uppercase tracking-wider ${labelClass} block mb-3 font-medium transition-colors duration-700`}>
              // {label}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight ${titleClass} leading-[1.08] transition-colors duration-700`}>
              {title}
            </h2>
          </div>
          {description && (
            <p className={`max-w-md text-base sm:text-lg ${descClass} leading-relaxed font-normal transition-colors duration-700`}>
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`border-t ${borderClass} pt-10 sm:pt-12 mb-12 sm:mb-16 lg:mb-20 transition-colors duration-700 ${className}`}>
      <span className={`font-mono text-xs uppercase tracking-wider ${labelClass} block mb-3 font-medium transition-colors duration-700`}>
        // {label}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight ${titleClass} leading-[1.08] max-w-3xl transition-colors duration-700`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg ${descClass} leading-relaxed font-normal transition-colors duration-700`}>
          {description}
        </p>
      )}
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "subtle" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 tracking-tight rounded-none select-none text-center cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-2 gap-2",
    md: "text-sm px-5 py-2.5 gap-2.5",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-3",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#435BFF] text-white hover:bg-[#364BDB] active:bg-[#2D3FB8] border border-[#435BFF]",
    secondary:
      "bg-transparent text-[#111111] border border-[#E8E8EA] hover:border-[#435BFF] hover:text-[#435BFF] hover:bg-[#F2F5FF]",
    subtle:
      "bg-[#F2F5FF] text-[#435BFF] border border-transparent hover:bg-[#E8EDFF]",
    ghost:
      "bg-transparent text-[#5F6368] hover:text-[#435BFF] hover:bg-[#F2F5FF]",
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 border border-[#E8E8EA] text-[#5F6368] bg-white ${className}`}
    >
      {children}
    </span>
  );
}
