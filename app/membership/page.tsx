'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { loadStripe } from '@stripe/stripe-js'
import { translate } from '../utils/translate'

// Make sure to replace with your actual Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function MembershipPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubscribe = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_1234567890', // Replace with your actual Stripe price ID
        }),
      })

      const session = await response.json()

      const stripe = await stripePromise
      const { error } = await stripe!.redirectToCheckout({
        sessionId: session.id,
      })

      if (error) {
        console.error('Error:', error)
        setLoading(false)
      }
    } catch (err) {
      console.error('Error:', err)
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">{translate('membership.title')}</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{translate('membership.plan.title')}</h2>
        <p className="text-xl font-bold text-green-600 mb-4">{translate('membership.plan.price')}</p>
        <ul className="mb-6">
          {translate('membership.plan.features').map((feature, index) => (
            <li key={index} className="mb-2">✅ {feature}</li>
          ))}
        </ul>
        <Button onClick={handleSubscribe} disabled={loading} className="w-full">
          {loading ? 'Processing...' : translate('membership.plan.cta')}
        </Button>
      </div>
    </div>
  )
}

