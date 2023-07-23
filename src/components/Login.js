import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/Authen/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert(json.error);
    } else {
      // Save the auth token and redirect
      localStorage.setItem("token", json.token);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const { email_id, password } = credentials;
  const stylingbody={
    marginTop:'90px'
  }
  return (
    <div style={stylingbody}>
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email_id"
            value={email_id}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            Relax... i'll Sell your Data to everyone. 🙏
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;

// import React, { Component } from 'react'
// import {useNavigate } from 'react-router-dom';
// export class Login extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       Credentials:{
//         email_id:'',
//         password:''
//       }
//     }
//   }
//   handleonsubmit= async (e)=>{
//     e.preventDefault();
//     const { navigate } = useNavigate();
//     const response = await fetch("http://localhost:5000/api/Authen/login",{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify({email_id:this.state.Credentials.email_id,password:this.state.Credentials.password})
//     });
//     const json=await response.json()
//     console.log(json);
//     if(!json.success){
//       alert(json.error)
//     }
//     else{
//       // save the suth token and redirect
//       localStorage.setItem('token',json.token);
//       navigate("/");
//     }
//   }
//    onChange=(e)=>{
//     const { name, value } = e.target;
//     this.setState(prevState => ({
//       Credentials: {
//         ...prevState.Credentials,
//         [name]: value
//       }
//     }));
//   }

//   render() {
//     const { email_id, password } = this.state.Credentials;
//     return (
//       <div>
//         <form onSubmit={this.handleonsubmit}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="email" aria-describedby="emailHelp"name="email_id"
//               value={email_id}
//               onChange={this.onChange}/>
//               <div id="emailHelp" className="form-text">Relax... we'll Sell  your email to everyone. 🙏</div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input type="password" className="form-control"name="password" id="password" value={password}
//               onChange={this.onChange}/>
//             </div>
//             <button type="submit" className="btn btn-primary" >Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default Login
