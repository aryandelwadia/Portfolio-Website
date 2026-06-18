"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItem = {
  url: string;
  title: string;
};

type NavLinkProps = {
  link: LinkItem;
};

export default function NavLink({ link } : NavLinkProps){
    const pathName = usePathname();
    const active = pathName === link.url;
    
    return (
        <Link
          className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition ${
            active
              ? "bg-red-500 text-white shadow-[0_0_24px_rgba(240,61,61,0.35)]"
              : "text-white/68 hover:bg-white/10 hover:text-white"
          }`}
          href={link.url}
        >
          {link.title}
        </Link>
    );
}
