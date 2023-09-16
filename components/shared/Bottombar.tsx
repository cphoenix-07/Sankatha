"use client"

import Link from "next/link";
import { sidebarLinks } from '@/constants'
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import logo from '/assets/logo.png';
import logout from '/assets/logout.svg';

const Bottombar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
          console.log(pathname);
          return (
            <Link href={link.route} key={link.label} className={`bottombar_link pl-4 flex items-center rounded-lg ${isActive && "bg-[#690729]"}`} >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden p-4">{link.label}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
export default Bottombar;