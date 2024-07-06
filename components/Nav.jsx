"use client"; //Directive to use hooks side-client

import Link from "next/link"; //Allow us to move to the other pages of our application
import Image from "next/image"; //Automatically optimize the images for us
import { useEffect, useState } from "react"; //Hooks
//import { signIn, signOut, useSession, getProviders } from "next-auth/react"; //Authentication

const Nav = () => {
  //const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  /*useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);*/

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={50}
          height={50}
          className='object-contain'
        />
        <p className='logo_text'>Xcript Cs</p>
      </Link>

      
    </nav>
  );
};

export default Nav;