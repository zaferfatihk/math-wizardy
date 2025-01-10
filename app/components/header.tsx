import Link from 'next/link'
import Image from 'next/image'
import { translate } from '../utils/translate'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-8">
          <Image src="/logo.svg" alt={translate('siteName')} width={100} height={100} />
          {/* <span className="text-2xl text-center font-bold text-purple-600">{translate('siteName')}</span> */}
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/puzzles" className="text-purple-700 font-bold hover:text-blue-800">{translate('nav.puzzles')}</Link></li>
            <li><Link href="/membership" className="text-purple-700 font-bold hover:text-blue-800">{translate('nav.membership')}</Link></li>
            <li><Link href="/login" className="text-purple-700 font-bold hover:text-blue-800">{translate('nav.login')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

``