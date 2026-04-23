import type { SVGProps } from "react";

interface SignedLabelLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Signed Label wordmark — outlined lightning bolt + "Signed Label" + TM.
 * Outlined style (stroke only) so it sits well over dark hero backgrounds.
 * Color comes from `currentColor`. ViewBox includes padding so nothing clips.
 */
export function SignedLabelLogo({ className, ...rest }: SignedLabelLogoProps) {
  return (
    <svg
      viewBox="0 0 1000 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Signed Label"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...rest}
    >
      {/* Lightning bolt — outlined */}
      <path
        d="M92 36 L36 124 L72 124 L52 198 L124 96 L88 96 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />

      {/* Wordmark — outlined */}
      <text
        x="160"
        y="166"
        fontFamily="Inter, system-ui, -apple-system, 'Helvetica Neue', sans-serif"
        fontSize="140"
        fontWeight="900"
        letterSpacing="-0.04em"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      >
        Signed Label
      </text>

      {/* TM superscript */}
      <text
        x="970"
        y="62"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        textAnchor="end"
      >
        TM
      </text>
    </svg>
  );
}
