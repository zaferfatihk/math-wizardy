import Link from 'next/link'
import Image from 'next/image'
import { translate } from '../utils/translate'

export default function Header() {
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
            <li><Link href="/puzzles" className="text-white-700 font-bold hover:text-white">{translate('nav.puzzles')}</Link></li>
            <li><Link href="/membership" className="text-white-700 font-bold hover:text-white">{translate('nav.membership')}</Link></li>
            <li><Link href="/login" className="text-white-700 font-bold hover:text-white">{translate('nav.login')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}