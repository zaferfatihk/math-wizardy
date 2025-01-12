'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { translate } from '../utils/translate'

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        sessionStorage.clear();
        window.dispatchEvent(new Event('sessionStorageUpdated'));
    }, [router]);

    return (
        <div className="flex justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            <h1 className="text-xl font-bold text-center text-black-300 mb-8">
            {translate('logout.title')}
            </h1>
        </div>
    );
};