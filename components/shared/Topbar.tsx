import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Topbar() {
  return (
    <nav className='topbar flex flex-row justify-between'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/assets/logo.png' alt='logo' width={60} height={60} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>संकथा</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={25}
                  height={25}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
        <UserButton/>
      </div>

    </nav>
  );
}

export default Topbar;