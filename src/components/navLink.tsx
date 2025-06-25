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
    
    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
    );
}