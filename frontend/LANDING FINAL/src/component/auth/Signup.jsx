import React,{ useState } from 'react'
import '../css/Signup.css'
import { useFormik } from "formik";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
const Signup = () => {
  const [errorResponse, setError] = useState("");
  const [profile, setProfile] = useState(null);



  function validate(values) {
		const errors = {};

		if (!values.email) {
		  errors.email = "* Le champ email est obligatoire";
		}
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 
      errors.email = "le format de l'email est invalide"
 
    }
		if(!values.password){
			errors.password = "* Le champ mot de passe est obligatoire";
		}
    if(!values.matricule){
			errors.matricule = "* Le champ matricule est obligatoire";
		}
    if(!values.rpassword){
			errors.rpassword = "* Le champ mot de passe est obligatoire";
		}
    if(!values.nom){
			errors.nom = "* Le champ nom est obligatoire";
		}
    if(!values.prenom){
			errors.prenom = "* Le champ prenom est obligatoire";
		}
    if(!values.date){
			errors.date = "* Le champ date est obligatoire";
		}
    if(!values.tel){
			errors.tel = "* Le champ téléphone est obligatoire";
		}
    if(!values.username){
			errors.username = "* Le champ username est obligatoire";
		}
    setError("")
		return errors;
	  }

    const {
      handleSubmit,
      handleChange,
      touched,
      errors,
      } = useFormik({
      initialValues: {
        email: "",
        password: "",
        rpassword: "",
        nom:"",
        prenom:"",
        username:"",
        matricule:"",
        date:"",
      },
      validate,
      onSubmit: (values) => {
  alert('connect')		
  }, });
  return (
    <div className=' Containe'>
    <div className='Wrapper' >
      <h1>CREATE AN ACCOUNT</h1>
      <form className='Form'>
      <input type='number'placeholder="matricule"className='Input'name="matricule" onChange={handleChange}/>
      {touched.matricule && errors.matricule
                ? <p className="Input">{errors.matricule}</p>
                : null}
        <input className='Input' type='text' name="nom" onChange={handleChange} placeholder="nom" />
        {touched.nom && errors.nom
                ? <p className="Input">{errors.nom}</p>
                : null}
        <input className='Input' type='text' name="prenom" onChange={handleChange} placeholder="prenom" />
          {touched.prenom && errors.prenom
                ? <p className="Input" >{errors.prenom}</p>
                : null}
        <input className='Input' type='text' name='username'onChange={handleChange} placeholder="username" />
        {touched.username && errors.username
                ? <p className="Input">{errors.username}</p>
                : null}
                <input type='date' className='Input' name='date'onChange={handleChange} />
                {touched.date && errors.date
                ? <p className="Input">{errors.date}</p>
                : null}
        <input className='Input' type="email" name='email' onChange={handleChange} placeholder="email" />
        {touched.email && errors.email
                ? <p className="Input">{errors.email}</p>
                : null}
        <input className='Input' type='password' name='password' onChange={handleChange} placeholder="password" />
        {touched.password && errors.password
                ? <p className="Input">{errors.password}</p>
                : null}
        <input className='Input' type='password' name='rpassword' onChange={handleChange} placeholder="confirm password" />
        {touched.rpassword && errors.rpassword
                ? <p className="Input">{errors.rpassword}</p>
                : null}
        <select name="" id="" className='Input'>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
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
        <p>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <button className='Button' onClick={handleSubmit}>CREATE</button>
        {errorResponse
                ? <p className="errors">{errorResponse}</p>
                : null}
      </form>
    </div>
  </div>
  )
}

export default Signup