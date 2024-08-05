"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
};

export function NavLink({
  href,
  exact = false,
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const className = `${props.className || ""}${
    isActive ? " active" : ""
  }`.trim();

  return (
    <Link href={href} {...props} className={className}>
      {children}
    </Link>
  );
}
