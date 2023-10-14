
import { useLocation } from 'react-router-dom';
import React,{ useState } from 'react'
import './css/Signup.css'
import { useFormik } from "formik";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
  
const Signingoogle = () => {
  const [errorResponse, setError] = useState("");
  const [profile, setProfile] = useState(null);
  const [matricule,setMatricule]= useState('');
  const [nom,setNom]= useState('');
  const [prenom,setPrenom]= useState('');
  const [datenaiss,setDatenaiss]= useState('');
  const [email,setEmail]= useState('');
  const [type,setType]= useState('hr');
  const [password,setPassword]= useState('');
  const [passwordr,setPasswordr]= useState('');
  const [username,setUsername]= useState('');
  const [tailleentr,setTailleentr]= useState('200');
  const[typeus,setTypeus]=useState('Admin')
  const location = useLocation();
  const { data } = location.state;

  
    const handleSubmit =async (e)=>{
      e.preventDefault();
      const admin= {matricule,nom,prenom,datenaiss,username,email,password,tailleentr,type,typeus};
         
      const response= await fetch( 'http://localhost:4000/api/authentification/Signup',{
           method:'POST',
           body: JSON.stringify(admin),
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
             }})
       const jso =response.json();
  
       if (!response.ok){
           setError(jso.error)
       }
       if (response.ok){
           setError(null)
           console.log("employée ajouter")
           window.location.href="/Signin"
       }
      console.log(matricule,nom,prenom,datenaiss,username,email,password,tailleentr,type,typeus)
  }
  
    // function validate(values) {
    // 	const errors = {};
  
    // 	if (!values.email) {
    // 	  errors.email = "* Le champ email est obligatoire";
    // 	}
    //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
   
    //     errors.email = "le format de l'email est invalide"
   
    //   }
    // 	if(!values.password){
    // 		errors.password = "* Le champ mot de passe est obligatoire";
    // 	}
    //   if(!values.matricule){
    // 		errors.matricule = "* Le champ matricule est obligatoire";
    // 	}
    //   if(!values.rpassword){
    // 		errors.rpassword = "* Le champ mot de passe est obligatoire";
    // 	}
    //   if(!values.nom){
    // 		errors.nom = "* Le champ nom est obligatoire";
    // 	}
    //   if(!values.prenom){
    // 		errors.prenom = "* Le champ prenom est obligatoire";
    // 	}
    //   if(!values.date){
    // 		errors.date = "* Le champ date est obligatoire";
    // 	}
    //   if(!values.tel){
    // 		errors.tel = "* Le champ téléphone est obligatoire";
    // 	}
    //   if(!values.username){
    // 		errors.username = "* Le champ username est obligatoire";
    // 	}
    //   setError("")
    // 	return errors;
    //   }
  
    //   const {
    //     handleSubmit,
    //     handleChange,
    //     touched,
    //     errors,
    //     } = useFormik({
    //     initialValues: {
    //       email: "",
    //       password: "",
    //       rpassword: "",
    //       nom:"",
    //       prenom:"",
    //       username:"",
    //       matricule:"",
    //       date:"",
    //       typeus:"Admin"
    //     },
    //     validate,
    //     onSubmit: (values) => {
    //       console.log("sfdfdfsfdfdsf")
    //       registre(values)
    // }, });
    return (
      <div className=' Containe'>
      <div className='Wrapper' >
        <h1>CREATE AN ACCOUNT</h1>
        <form className='Form' onSubmit={handleSubmit}>
        <input className='Input' type='number'placeholder="matricule" onChange={(e) => setMatricule(e.target.value)}
              value={matricule}/>
  
          <input className='Input' type='text' name="nom" required onChange={(e) => setNom(e.target.value)}
              value={nom} placeholder="nom" />
  
          <input className='Input' type='text' name="prenom" required onChange={(e) => setPrenom(e.target.value)}
              value={prenom} placeholder="prenom" />
  
          <input className='Input' type='text' name='username'required onChange={(e) => setUsername(e.target.value)}
              value={username} placeholder="username" />
  
                  <input type='date' className='Input' name='date'required onChange={(e) => setDatenaiss(e.target.value)}
              value={datenaiss} />
  
          <input className='Input' type="email" name='email'required onChange={(e) => setEmail(e.target.value)}
              value={email} placeholder="email" />
  
          <input className='Input' type='password' name='password'required onChange={(e) => setPassword(e.target.value)}
              value={password} placeholder="password" />
  
          <input className='Input' type='password' name='rpassword'required onChange={(e) => setPasswordr(e.target.value)}
              value={passwordr} placeholder="confirm password" />
  
        {/*   <select name="" id="" className='Input'>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>*/}
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
            //handleSubmitgoogle(data);
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
          <button className='Button' type='submit'>Sign-up</button>
         
  
        </form>
      </div>
    </div>
  );
};

export default Signingoogle;