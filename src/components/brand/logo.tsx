import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  /** Tailwind text color class controls the fill via currentColor. */
  className?: string;
}

/**
 * Unsigned wordmark — cursor + "unsigned" + TM.
 * Uses currentColor so the parent text color drives the fill.
 */
export function Logo({ className, ...rest }: LogoProps) {
  return (
    <svg
      viewBox="0 0 280 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="unsigned"
      className={className}
      {...rest}
    >
      {/* Cursor arrow */}
      <path
        d="M6 4 L6 50 L17 39 L24 56 L31 53 L24 36 L40 36 Z"
        fill="currentColor"
      />
      {/* Wordmark */}
      <text
        x="56"
        y="50"
        fontFamily="Inter, system-ui, -apple-system, 'Helvetica Neue', sans-serif"
        fontSize="52"
        fontWeight="900"
        letterSpacing="-0.05em"
        fill="currentColor"
      >
        unsigned
      </text>
      {/* TM */}
      <text
        x="262"
        y="18"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="currentColor"
      >
        TM
      </text>
    </svg>
  );
}
