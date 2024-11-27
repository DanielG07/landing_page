"use client"; //Directive to use hooks side-client

import Link from "next/link"; //Allow us to move to the other pages of our application
import Image from "next/image"; //Automatically optimize the images for us
import { useEffect, useState } from "react"; //Hooks
import MainMenu from "./MainMenu";
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
    <nav>
      <MainMenu />
    </nav>
  );
};

export default Nav;
