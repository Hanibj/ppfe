import React,{ useState } from 'react'
import './css/Signup.css'
import { useFormik } from "formik";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
// import nodemailer from 'nodemailer';
// import generatePassword from 'generate-password';
const Signup = () => {
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
  const generateRandomMatricule = () => {
    const characters = '0123456789';
    const length = 8;
    let matricul = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      matricul += characters.charAt(randomIndex);
    }

    return matricul;
  };

  const responseGoogle = async (data) => {
    console.log(data)
    if (data) {
      const generatedPassword = generateRandomPassword();
      const generateMatricule = generateRandomMatricule();
      const admin = {
        matricule: generateMatricule,
        prenom: data.family_name || '',
        nom: data.given_name,
        datenaiss: '',
        username: data.email || '',
        email: data.email || '',
        password: generatedPassword,
        tailleentr: '200',
        type: 'hr',
        typeus: 'Admin',
      };

      console.log(admin);

      // Send the admin data to the server
      const response = await fetch('http://localhost:4000/api/authentification/signup', {
        method: 'POST',
        body: JSON.stringify(admin),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        setError('Error signing up');
      } else {
        const emailSubject = 'Your Randomly Generated Password';
        const emailContent = `Dear ${admin.prenom},\n\nYour randomly generated Matricule is: ${generateMatricule},\n\nYour randomly generated password is: ${generatedPassword}\n\nPlease keep it secure.`;

        // Send the email content to the server for email sending
        const emailResponse = await fetch('http://localhost:4000/api/mail/Sendemail', {
          method: 'POST',
          body: JSON.stringify({
            recipient: admin.email,
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
    } else {
      console.log('Error: Failed to retrieve user profile');
    }
  };
  ////////////////////////////////////////////////
      //Signup Facebook
  ////////////////////////////////////////////////
  const responseFacebook = async (data) => {
    //console.log(data)
    if (data) {
      const generatedPassword = generateRandomPassword();
      const generateMatricule = generateRandomMatricule();
      const admin = {
        matricule: generateMatricule,
        prenom: data.last_name || '',
        nom: data.first_name,
        datenaiss: '',
        username: data.email || '',
        email: data.email || '',
        password: generatedPassword,
        tailleentr: '200',
        type: 'hr',
        typeus: 'Admin',
      };

      console.log(admin);

      // Send the admin data to the server
     const response = await fetch('http://localhost:4000/api/authentification/signup', {
        method: 'POST',
        body: JSON.stringify(admin),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        setError('Error signing up');
      } else {
        const emailSubject = 'Your Randomly Generated Password';
        const emailContent = `Dear ${admin.prenom},\n\nYour randomly generated Matricule is: ${generateMatricule},\n\nYour randomly generated password is: ${generatedPassword}\n\nPlease keep it secure.`;

        // Send the email content to the server for email sending
        const emailResponse = await fetch('http://localhost:4000/api/mail/Sendemail', {
          method: 'POST',
          body: JSON.stringify({
            recipient: admin.email,
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
   } else {
     console.log('Error: Failed to retrieve user profile');
    }
 
 
 
  };
  // const generateRandomPassword = () => {
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  //   const length = 10;
  //   let password = '';
  
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     password += characters.charAt(randomIndex);
  //   }
  
  //   return password;
  // };

  

  // const responseGoogle = async (data) => {
  //   if (data) {
      
  //     const generatedPassword = generateRandomPassword();

  //     const admin = {
  //       matricule: '',
  //       prenom: data.givenName || '',
  //       datenaiss: '',
  //       username: data.email || '',
  //       email: data.email || '',
  //       password: generatedPassword,
  //       tailleentr: '200',
  //       type: 'hr',
  //       typeus: 'Admin',
  //     };

  //     console.log(admin);

  //     // Send the password to the user's email
  //     const emailSubject = 'Your Randomly Generated Password';
  //     const emailContent = `Dear ${admin.prenom},\n\nYour randomly generated password is: ${generatedPassword}\n\nPlease keep it secure.`;
  //     await sendEmail(admin.email, emailSubject, emailContent);

  //     // Rest of your code...
  //   } else {
  //     console.log('Error: Failed to retrieve user profile');
  //   }
  // };

  // ...

  // const responseGoogle = async (data) => {
  //   console.log(data.family_name)
  // try{
  //     const admin = {
  //       matricule: '',
  //       prenom: data.family_name,
  //       datenaiss: '',
  //       username: data.email || '',
  //       email: data.email || '',
  //       password: '',
  //       tailleentr: '200',
  //       type: 'hr',
  //       typeus: 'Admin'
  //     };
  
  //     console.log(admin);
  //   }catch{alert('erreur')}
  //     // Rest of your code...
   
   
    
  // };
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
         window.location.href="/"
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
          onResolve={({ provider, data }) => {
            responseFacebook(data);
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
          responseGoogle(data);
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
  )
}

export default Signup