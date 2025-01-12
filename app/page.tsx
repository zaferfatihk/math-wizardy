import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { translate } from './utils/translate'

export default function Home() {
  return (
    <div className="container mx-auto px-0 py-0">
      <section className="w-full text-center mb-16 bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.svg')", backgroundPosition: "center 30%" }}>
        {/* <h1 className="text-4xl font-bold text-purple-700 mb-4">{translate('home.hero.title')}</h1>
        <p className="text-xl text-blue-600 mb-8">{translate('home.hero.subtitle')}</p> */}
        <div className="h-96"></div> {/* Adjust height as needed */}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">{translate('home.howItWorks.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translate('home.howItWorks.steps').map((step, index) => (
            <div key={index} className="text-center">
              <Image src={`/icon-${step.title.toLowerCase().replace(' ', '-')}.svg`} alt={step.title} width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">{translate('home.plans.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{translate('home.plans.free.title')}</h3>
            <ul className="text-left mb-6">
              {translate('home.plans.free.features').map((feature, index) => (
                <li key={index} className="mb-2">✅ {feature}</li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/puzzles">{translate('home.plans.free.cta')}</Link>
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-4 border-yellow-400">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">{translate('home.plans.paid.title')}</h3>
            <p className="text-xl font-bold text-green-600 mb-4">{translate('home.plans.paid.price')}</p>
            <ul className="text-left mb-6">
              {translate('home.plans.paid.features').map((feature, index) => (
                <li key={index} className="mb-2">✅ {feature}</li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/membership">{translate('home.plans.paid.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <section className="text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">{translate('home.cta.title')}</h2>
        <Button asChild size="lg" className="mr-4">
          <Link href="/signup">{translate('home.cta.signUp')}</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/puzzles">{translate('home.cta.tryDemo')}</Link>
        </Button>
      </section> */}
    </div>
  )
}

