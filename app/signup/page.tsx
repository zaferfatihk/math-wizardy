'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { translate } from '../utils/translate'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    surname: '',
    age: '',
    gender: '',
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Redirect to puzzles page after successful signup
    router.push('/puzzles')
  }

  const handleGoogleSignUp = () => {
    // Implement Google Sign-Up logic here
    console.log('Google Sign-Up clicked')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">{translate('signup.title')}</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <Label htmlFor="email">{translate('signup.fields.email')}</Label>
          <Input type="email" id="email" name="email" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">{translate('signup.fields.name')}</Label>
          <Input type="text" id="name" name="name" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <Label htmlFor="surname">{translate('signup.fields.surname')}</Label>
          <Input type="text" id="surname" name="surname" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <Label htmlFor="age">{translate('signup.fields.age')}</Label>
          <Input type="number" id="age" name="age" min="3" max="6" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <Label>{translate('signup.fields.gender')}</Label>
          <RadioGroup defaultValue="female" onValueChange={(value) => setFormData({ ...formData, gender: value })}>
            {Object.entries(translate('signup.genders')).map(([value, label]) => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} id={value} />
                <Label htmlFor={value}>{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button type="submit" className="w-full mb-4">{translate('signup.cta')}</Button>
        <Button type="button" onClick={handleGoogleSignUp} variant="outline" className="w-full">
          {translate('signup.googleCta')}
        </Button>
      </form>
    </div>
  )
}

