import React from 'react';
import Link from 'next/link';
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import Image from "next/image";

type NavbarProps = {};

const Navbar:React.FC<NavbarProps> = () =>
     {
        const setAuthModalState = useSetRecoilState(authModalState);
        const handleClick = () => {
            setAuthModalState((prev) => ({ ...prev, isOpen: true }));
        };
    return (
        <div className='flex items-center justify-between mr-4 sm:px-12 px-2 md:px-24'>
            <Link href='/' className='flex items-center justify-center h-20'>
            <img src='https://snu.edu.in/site/assets/files/8030/snu-logo-blue-wht.1600x0.webp' alt='LeetClone' height={200} width={150} />
			</Link>
            <div className='flex items-center'>
				<button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out'
                onClick={handleClick}>
                    Sign in
                </button>
        </div>
        </div>
    );

};
export default Navbar;