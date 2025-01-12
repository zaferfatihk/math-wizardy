'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { translate, translateWithInput } from '../utils/translate'

export default function LoginPage() {
    const [givenName, setGivenName] = useState<string | null | undefined>(undefined);
    const [firstName, setFirstName] = useState<string | null | undefined>(undefined);
    sessionStorage.setItem("email", "zaferfatih@gmail.com");
    sessionStorage.setItem("firstName", "Zafer");
    sessionStorage.setItem("givenName", "Zafer Fatih Koyuncu");

    // Dispatch custom event after updating sessionStorage
    window.dispatchEvent(new Event('sessionStorageUpdated'));

    useEffect(() => {
      setGivenName("Zafer Fatih Koyuncu");
      setFirstName("Fatih");
      //todo: comment out the above 3 lines when going to production
    }, [firstName, givenName]);

    const GoogleLoginButton = () => {
        return (
          <GoogleLogin
            onSuccess={(codeResponse: any) => {
              console.log(codeResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        );
    };

    return (
      <div className="container max-sm:mx-auto px-4 py-8">
        {givenName === null ? (
          <>
            <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
              {translate('login.title')}
            </h1>
            <p className="text-xl font-bold text-center text-purple-700 mb-8">
              {translate('login.introText')}
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <GoogleOAuthProvider clientId="<YOUR_CLIENT_ID>">
                <GoogleLoginButton />
              </GoogleOAuthProvider>
            </div>
          </>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
                {translateWithInput('login.welcome', { name: givenName })}
            </h1>
            {/* <span className="text-xl font-bold text-center text-purple-700 mb-8">{givenName}</span> */}
          </div>
        )}
      </div>
    );
};