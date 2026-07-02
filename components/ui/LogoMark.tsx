import Image from "next/image";

/** Twin-arch "M" mark only — for navbar, dividers, small spots */
export function LogoMark({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/img/logo-mark-white.png"
      alt="Mabelli"
      width={262}
      height={312}
      priority={priority}
      className={className}
    />
  );
}

/** Full stacked lockup — mark + "mabelli" wordmark */
export function LogoLockup({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/img/logo-white.png"
      alt="Cafe Restoran Mabelli"
      width={654}
      height={468}
      priority={priority}
      className={className}
    />
  );
}
