'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { translate } from '../utils/translate'
import { Button } from '@/components/ui/button'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


export default function LoginPage() {
    const GoogleLoginButton = () => {
        return (
          <GoogleLogin
            onSuccess={(codeResponse: any) => {
              console.log(codeResponse);
            }}
            onError={() => console.log("Login Failed")}
          />
        );
      };
    
    return (
      <div className="container max-sm:mx-auto px-4 py-8">
        
        <p className="text-xl font-bold text-center text-purple-700 mb-8">{translate('login.introText')}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleOAuthProvider clientId="<YOUR_CLIENT_ID>">
              <GoogleLoginButton />
            </GoogleOAuthProvider>
        </div>
      </div>
    );
};