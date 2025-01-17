import React from 'react';
import { authModalState } from "@/atoms/authModalAtom";
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/Modals/AuthModal';
import { useRecoilValue, useSetRecoilState } from "recoil";
import {auth} from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";


type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState);
    const [user, loading, error] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);

    const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		 
        if (!loading && !user) setPageLoading(false);

	}, [user, router,loading]);
     
    
    if (pageLoading) return null;

    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
        <img src='https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg' alt='Hero img' width={800} height={1000} />
				</div>
                {authModal.isOpen && <AuthModal />}
        </div>
    </div>
}
export default AuthPage;