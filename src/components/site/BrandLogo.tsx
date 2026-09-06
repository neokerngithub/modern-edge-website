import blueLogo from "@/assets/logo-mark-blue.png";
import whiteLogo from "@/assets/logo-mark-white.png";

type Props = {
  /** Always render the white mark (for use over dark imagery). */
  forceWhite?: boolean;
  className?: string;
  size?: number;
  loading?: "eager" | "lazy";
};

/**
 * Official Modern Edge mark — transparent PNG, no background box.
 * Renders the brand-blue mark in light theme and the white mark in dark theme.
 */
export function BrandLogo({
  forceWhite = false,
  className = "h-10 w-auto",
  size = 40,
  loading = "eager",
}: Props) {
  const alt = "Modern Edge Architects & Engineers logo";

  if (forceWhite) {
    return (
      <img
        src={whiteLogo}
        alt={alt}
        width={size}
        height={size}
        loading={loading}
        decoding="async"
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <>
      <img
        src={blueLogo}
        alt={alt}
        width={size}
        height={size}
        loading={loading}
        decoding="async"
        className={`object-contain dark:hidden ${className}`}
      />
      <img
        src={whiteLogo}
        alt=""
        aria-hidden
        width={size}
        height={size}
        loading={loading}
        decoding="async"
        className={`object-contain hidden dark:block ${className}`}
      />
    </>
  );
}
