import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const [credentials, setCredentials] = useState({
    email_id: "",
    password: "",
    cpassword:"",
    name:""
  });

  const navigate = useNavigate();

  const handleonSubmit = async (e) => {
    e.preventDefault();
    const {name,email_id,password} = credentials;
    const response = await fetch("http://localhost:5000/api/Authen/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email_id,password}),
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
      <form onSubmit={handleonSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label" >
            Naam bol be
          </label>
          <input onChange={handleChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email_id"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            minLength={8} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input onChange={handleChange}
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            minLength={8} required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
