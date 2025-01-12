'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { translate, translateWithInput } from '../utils/translate'

export default function Header() {
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    const handleStorageUpdate = () => {
      setFirstName(sessionStorage.getItem("firstName"));
    };
    window.addEventListener('sessionStorageUpdated', handleStorageUpdate);
    return () => {
      window.removeEventListener('sessionStorageUpdated', handleStorageUpdate);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-white shadow-md bg-cover" style={{ backgroundImage: "url('/headline.svg')", backgroundPosition: "center 20%", margin: 0, padding: 0 }}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-8">
          <Image src="/logo.svg" alt={translate('siteName')} width={200} height={200} />
          {/* <Image src="/headline.svg" width={600} height={100} /> */}
          {/* <span className="text-2xl text-center font-bold text-purple-600">{translate('siteName')}</span> */}
        </Link>
        <nav>
          <ul className="flex space-x-4">
            { firstName === null ? (
              <>
              <li><Link href="/puzzles" className="text-white font-bold hover:text-white">{translate('nav.puzzles')}</Link></li>
              <li><Link href="/membership" className="text-white font-bold hover:text-white">{translate('nav.membership')}</Link></li>
              <li><Link href="/login" className="text-white font-bold hover:text-white">{translate('nav.login')}</Link></li>
              </>
            ) : (
              <>
              <li><Link href="/puzzles" className="text-white font-bold hover:text-white">{translate('nav.puzzles')}</Link></li>
              <li><Link href="/logout" className="text-white font-bold hover:text-white">{translate('nav.logout')}</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}