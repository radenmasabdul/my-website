import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type SocialLink = {
  href: string;
  icon: StaticImageData | string;
  alt: string;
  external?: boolean;
};

type SocialBarProps = {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
  iconSize?: number;
  withBackground?: boolean;
};

export default function SocialBar({
  links,
  className = "",
  iconClassName = "",
  iconSize = 20,
  withBackground = true,
}: SocialBarProps) {

  const socialBarClass = `flex flex-row items-center justify-around p-4 w-full rounded-sm`
  const bgClass = withBackground
    ? `bg-white dark:bg-[linear-gradient(135deg,#130428_0%,#251043_25%,#38126D_50%,#261045_75%,#190634_100%)]`
    : "";

  return (
    <div className={`${socialBarClass} ${bgClass} ${className}`}>
      {links.map(({ href, icon, alt, external = true }) => (
        <Link
          key={alt}
          href={href}
          className={`hover:opacity-70 transition ${iconClassName}`}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Image src={icon} alt={alt} width={iconSize} height={iconSize} />
        </Link>
      ))}
    </div>
  );
}
