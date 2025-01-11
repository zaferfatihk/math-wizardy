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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
            <h1 style={{ color: 'purple', fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>Welcome to Kids Math Puzzles</h1>
            <p style={{ color: 'purple', fontFamily: 'Arial, sans-serif', fontSize: '1.2rem' }}>Please log in to continue</p>
            <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <GoogleOAuthProvider clientId="<YOUR_CLIENT_ID>">
            <GoogleLoginButton />
            </GoogleOAuthProvider>
            </div>
        </div>
      );

};