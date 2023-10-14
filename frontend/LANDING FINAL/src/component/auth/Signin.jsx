import React,{ useState } from 'react'
import '../css/Signin.css'
import { useFormik } from "formik";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
const Signin = () => {
  const [profile, setProfile] = useState(null);
  const [errorResponse, setError] = useState("");
  function validate(values) {
    const errors = {};

    if (!values.username) {
      errors.username =
        "*Le champ username est obligatoire";
    }
    if (!values.password) {
      errors.password =
        "*Le champ mot de passe est obligatoire";
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
      alert('coonect');
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
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
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
          <img src={profile.picture.data.url} />
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
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
          <button className='Button'  onClick={handleSubmit}>LOGIN</button>
          {errorResponse ? (
            <p className="errors">{errorResponse}</p>
          ) : null}
          <a href='#' className='Link'>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href='# 'className='Link'>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
  </div>
  )
}

export default Signin