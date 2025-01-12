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
        <div className="container max-sm:mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">{translate('logout.title')}</h1>
        </div>
    );
};