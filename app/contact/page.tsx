'use client'

import { translate } from '../utils/translate'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        {translate('contact.title')}
      </h1>
      <p className="text-xl text-center text-black-700 mb-8">
        Feel free to email me with any ideas, concerns, or questions at  <a href="mailto:zaferfatih@gmail.com" className="text-blue-500">zaferfatih@gmail.com</a>.
      </p>
      <p className="text-xl text-center text-black-700 mb-8">
        Location: Istanbul, Turkiye
      </p>
    </div>
  );
}
