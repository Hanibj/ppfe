


// import React,{ useState } from 'react'
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import './css/Signin.css' 
// import { useFormik } from "formik";
// import { GoogleLoginButton } from "react-social-login-buttons";
// import { LoginSocialGoogle } from "reactjs-social-login";
// import { LoginSocialFacebook } from "reactjs-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";
// const Signin = () => {
  
//   const [profile, setProfile] = useState(null);
  
//   const [errorResponse, setError] = useState("");
//   const [username,setUsername]= useState('');
//   const [password,setPassword]= useState('');
//   const [admin, setAdmin] = useState(null);
//   const [users,setUsers]=useState({})
//   const navigate = useNavigate();
//  async function login (values){
  
 
//   let response= await fetch( 'http://localhost:4000/api/authentification/Signin',{
//     method:'POST',
//     body: JSON.stringify(values),
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       }})
      
//       const jso = await response.json();

//       if (response.ok) {
//         setUsers(jso);
//         console.log(jso)
//         console.log(users.typeus)
      
//           localStorage.setItem("token", JSON.stringify(jso));
//           localStorage.setItem("login", JSON.stringify(true)); 
//           window.location.href='/'     

//       }
//     }

//   function validate(values) {
//     const errors = {};

//     if (!values.username) {
//       errors.username =
//         "*Le champ username est obligatoire";
//     }
//     if (!values.password) {
//       errors.password =
//         "*Le champ mot de passe est obligatoire";
//     }

//     setError("");
//     return errors;
//   }
//   const { handleSubmit, handleChange, touched, errors } =
//   useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       login(values);
//     },
//   });
//   return (
//     <div className='Container' > 
//     <div className='warrper'>
//       <h1>SIGN IN</h1>
//       <form className='Form'>
//         <input className='input' type='text' name='username' placeholder="username" onChange={handleChange} />
//         {touched.username && errors.username ? (
//           <p className="errors">{errors.username}</p>
//         ) : null}
//         <input className='input' type='password' name='password' placeholder="password" onChange={handleChange} />
//         {touched.password && errors.password ? (
//           <p className="errors">{errors.password}</p>
//         ) : null}
//         <div>
//     {!profile ? (
//       <LoginSocialFacebook
//         appId="953030452502125"
//         onResolve={(response) => {
//           console.log(response);
//           setProfile(response.data);
//         }}
//         onReject={(error) => {
//           console.log(error);
//         }}
//       >
//         <FacebookLoginButton />
//       </LoginSocialFacebook>
//     ) : (
//       ""
//     )}

//     {profile ? (
//       <div>
//         <h1>{profile.name}</h1>
//         <img src={profile.picture.data.url} />
//       </div>
//     ) : (
//       ""
//     )}
//   </div>
//   <div>
//     <LoginSocialGoogle
//       client_id={"334686402139-9lbrdt23rladhtq2r3744orrm0c6so2p.apps.googleusercontent.com"}
//       scope="openid profile email"
//       discoveryDocs="claims_supported"
//       access_type="offline"
//       onResolve={({ provider, data }) => {
//         console.log(provider, data);
//       }}
//       onReject={(err) => {
//         console.log(err);
//       }}
//     >
//       <GoogleLoginButton />
//     </LoginSocialGoogle>
//   </div>
//         <button className='Button'  onClick={handleSubmit}>LOGIN</button>
//         {errorResponse ? (
//           <p className="errors">{errorResponse}</p>
//         ) : null}
//         <a href='#' className='Link'>DO NOT YOU REMEMBER THE PASSWORD?</a>
//         <a href='/Signup 'className='Link'>CREATE A NEW ACCOUNT</a>
//       </form>
//     </div>
// </div>
//   )
// }



// export default Signin
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/Signin.css'
import { useFormik } from "formik";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import Signingoogle from './Signingoogle';
import { elements } from 'chart.js';
import FacebookLogin from '@greatsumini/react-facebook-login';
const Signin = () => {
  const [profile, setProfile] = useState(null);
  const [errorResponse, setError] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [username, setUsername] = useState('');
  const [emails, setEmail] = useState('');
 /* async function loginGoogle (data){
    
  
      
  }*/
  async function loginFacbook(email) {

    let response = await fetch('http://localhost:4000/api/authentification/Facebook', {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    });
  
    const jso = await response.json();
  
    if (response.ok) {
      setUsers(jso);
      console.log(jso);
      console.log(jso.typeus);
  
      if(jso.typeus ==='Admin'){
        localStorage.setItem("token", JSON.stringify(jso));
        localStorage.setItem("login", JSON.stringify(true));
       window.location.href='/'// navigate('/');
        }else{
          alert("tu n'est pas un admin");
          window.location.href='/'
        }
  }
}
  async function logingoogle(email) {
    let response = await fetch('http://localhost:4000/api/authentification/Signingoogle', {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    });
  
    const jso = await response.json();
  
    if (response.ok) {
      setUsers(jso);
      console.log(jso);
      console.log(jso.typeus);
  
      if(jso.typeus ==='Admin'){
        localStorage.setItem("token", JSON.stringify(jso));
        localStorage.setItem("login", JSON.stringify(true));
       window.location.href='/'// navigate('/');
        }else{
          alert("tu n'est pas un admin");
          window.location.href='/'
        }
  }
}
  async function login(values) {
    let response = await fetch('http://localhost:4000/api/authentification/Signin', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    });

    const jso = await response.json();

    if (response.ok) {
      setUsers(jso);
      console.log(jso);
      console.log(jso.typeus);
      if(jso.typeus ==='Admin'){
      localStorage.setItem("token", JSON.stringify(jso));
      localStorage.setItem("login", JSON.stringify(true));
     window.location.href='/'// navigate('/');
      }else{
        alert("tu n'est pas un admin");
        window.location.href='/'
      }
    }
  }
  const responseFacebook = (response) => {
    if (response.accessToken) {
      // L'utilisateur est connecté avec Facebook
      // Utilisez la réponse de l'API Facebook comme nécessaire
      console.log(response);
    } else {
      // Erreur lors de la connexion avec Facebook
      console.log("Erreur de connexion avec Facebook");
    }
  };
  function validate(values) {
    const errors = {};

    if (!values.username) {
      errors.username = "*Le champ username est obligatoire";
    }
    if (!values.password) {
      errors.password = "*Le champ mot de passe est obligatoire";
    }

    setError("");
    return errors;
  }

  const { handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validate,
      onSubmit: (values) => {
        login(values);
      },
    });

  return (
    <div className='Container' >
      <div className='warrper'>
        <h1>SIGN IN</h1>
        <form className='Form'>
          <input className='input' type='text' name='username' placeholder="username" onChange={handleChange} />
          {touched.username && errors.username ? (
            <p className="errors">{errors.username}</p>
          ) : null}
          <input className='input' type='password' name='password' placeholder="password" onChange={handleChange} />
          {touched.password && errors.password ? (
            <p className="errors">{errors.password}</p>
          ) : null}
          <div>
          {!profile ? (
              <LoginSocialFacebook
                appId="953030452502125"
                onResolve={({ provider, data }) => {
                  console.log(data.email)
                  loginFacbook(data.email);
                }}
                onReject={(error) => {
                  console.log(error);
                }}
              >
                <FacebookLoginButton />
              </LoginSocialFacebook>
            ) : (
              ""
            )}

            {profile ? (
              <div>
                <h1>{profile.name}</h1>
                <img src={profile.picture.data.url} alt="profile" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <LoginSocialGoogle
              client_id={"334686402139-9lbrdt23rladhtq2r3744orrm0c6so2p.apps.googleusercontent.com"}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log(data.email)
                logingoogle( data.email);
//console.log(typeof data.email)
             
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
          </div>
          <button className='Button' onClick={handleSubmit}>LOGIN</button>
          {errorResponse ? (
            <p className="errors">{errorResponse}</p>
          ) : null}
          <a href='/ResetPassword' className='Link'>Mot de passe oublié ?</a>
          <a href='/Signup' className='Link'>Créer un  compte</a>
        </form>
      </div>
    </div>
  )
}

export default Signin
