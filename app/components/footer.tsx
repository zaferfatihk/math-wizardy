import Link from 'next/link'
import { translate } from '../utils/translate'

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>{translate('footer.copyright')}</p>
        <nav>
          <ul className="flex space-x-4">
            {Object.entries(translate('footer.links')).map(([key, value]) => (
              <li key={key}>
                <Link href={`/${key}`} className="hover:underline">{value}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

