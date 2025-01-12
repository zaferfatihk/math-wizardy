'use client'

import { translate } from '../utils/translate'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        {translate('about.head')}
      </h1>
      <p className="text-xl text-center text-black-700 mb-8">
        Arnie's Math Lab is an initiative to use AI in Math education for kids. I am aiming to improve the learning journey of the user with different types of educational material. In the future, I will share more details on how I structure the learning material to make kids love maths and help them to learn.
      </p>
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
      {translate('about.body')}
      </h2>
      <p className="text-xl text-center text-black-700 mb-8">
        My name is Zafer. I am a computer science graduate with 17 years of IT industry experience, working at all levels up to senior engineering manager. Currently, I am trying to start my own business around things I love, such as helping society with useful material, such as this website, which individuals can use to support their kids' screen time spent on something useful.
      </p>
    </div>
  );
}
