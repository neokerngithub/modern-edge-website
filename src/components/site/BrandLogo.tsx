import blueLogo from "@/assets/logo-mark-blue.png.asset.json";
import whiteLogo from "@/assets/logo-mark-white.png.asset.json";

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
        src={whiteLogo.url}
        alt={alt}
        width={size}
        height={size}
        loading={loading}
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <>
      <img
        src={blueLogo.url}
        alt={alt}
        width={size}
        height={size}
        loading={loading}
        className={`object-contain dark:hidden ${className}`}
      />
      <img
        src={whiteLogo.url}
        alt=""
        aria-hidden
        width={size}
        height={size}
        loading={loading}
        className={`object-contain hidden dark:block ${className}`}
      />
    </>
  );
}
