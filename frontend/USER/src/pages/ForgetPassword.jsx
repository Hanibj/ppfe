
import React, { useState } from 'react'
const ForgetPassword = () => {
    

        const [email,setEmail] =useState('')
        const [errorResponse, setError] = useState("");
        const generateRandomPassword = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
            const length = 10;
            let password = '';
        
            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              password += characters.charAt(randomIndex);
            }
        
            return password;
          };
        async function handlechange(e) {
          e.preventDefault()
            const password=generateRandomPassword()
            const response = await fetch('http://localhost:4000/api/authentification/resetpassword', {
            method: 'PATCH',
            body: JSON.stringify({email, password}),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
    
          if (!response.ok) {
            setError('Error signing up');
          } else {
            const emailSubject = 'Your Randomly Generated Password';
            const emailContent = `Dear ${email},\n\nYour randomly generated password is: ${password}\n\nPlease keep it secure.`;
    
            // Send the email content to the server for email sending
            const emailResponse = await fetch('http://localhost:4000/api/mail/Sendemail', {
              method: 'POST',
              body: JSON.stringify({
                recipient: email,
                subject: emailSubject,
                content: emailContent,
              }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            });
    
            if (emailResponse.ok) {
              console.log('Email sent successfully');
              window.location.href='/'
            } else {
              console.error('Error sending email:', emailResponse.statusText);
            }
    
            // Rest of your code...
          }
        
            
          };
      return (
        <div>ForgetPass
            <form>
                <input type='email' name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='taper votre email'/>
                <button type='submit' onClick={(e)=>handlechange(e)}>Valider</button>
            </form>
    
        </div>
      )
    }
    

export default ForgetPassword