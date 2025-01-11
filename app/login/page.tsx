// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

// export default function LoginPage() {
//     const handleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
//         console.log('Login Success:', response);
//     };

//     const handleLoginFailure = (response: any) => {
//         console.log('Login Failed:', response);
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//             <h1>Login</h1>
//             <GoogleLogin
//                 clientId="YOUR_GOOGLE_CLIENT_ID"
//                 buttonText="Login with Google"
//                 onSuccess={handleLoginSuccess}
//                 onFailure={handleLoginFailure}
//                 cookiePolicy={'single_host_origin'}
//             />
//         </div>
//     );
// }