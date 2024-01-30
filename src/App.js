import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarm from "./components/Navbar";
import Newscompm from "./components/Newscomp";
import Stockkakaam from "./components/Stock";
import Loginm from "./components/Login";
import Signupm from "./components/Sign";


export default function App(props){
  const [mode,setMode]=useState("black");
  const [altermode,setALtermode]=useState("white");
  const [sign,setSign]=useState("in");

  const onModeChange = () => {
    if(mode==="black"){
      setMode("white");
    }
    else{
      setMode("black");
    }
    if(altermode==="black"){
      setALtermode("white");
    }
    else{
      setALtermode("black");
    }
  };
  const onSignChange=()=>{
    if(altermode==="in"){
      setSign("out");
    }
    else{
      setSign("in");
    }
  };

    return (
      <div>
        <Router>
          <Navbarm 
            altermode={altermode} 
            mode={mode}  
            onModeChange={onModeChange}
            sign={sign}
            onSignChange={onSignChange}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Stockkakaam
                    altermode={altermode} 
                    mode={mode}  
                    onModeChange={onModeChange}
                  />
                  <Newscompm
                    key="general"
                    pageSize={8}
                    country="in"
                    category="general"
                    altermode={altermode} 
                    mode={mode}  
                  />
                    
                </div>
              }
            ></Route>
            <Route
              exact
              path="/Business"
              element={
                <div>
                <Stockkakaam
                  altermode={altermode} 
                  mode={mode}  
                  onModeChange={onModeChange}
                />
                <Newscompm
                  key="business"
                  pageSize={8}
                  country="in"
                  category="business"
                  altermode={altermode} 
                  mode={mode}
                />
                </div>
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <div>
                <Stockkakaam
                  altermode={altermode} 
                  mode={mode}  
                  onModeChange={onModeChange}
                />
                <Newscompm
                  key="entertainment"
                  pageSize={8}
                  country="in"
                  category="entertainment"
                  altermode={altermode} 
                  mode={mode}
                />
                </div>
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <div>
                <Stockkakaam
                  altermode={altermode} 
                  mode={mode}  
                  onModeChange={onModeChange}
                />
                <Newscompm
                  key="health"
                  pageSize={8}
                  country="in"
                  category="health"
                  altermode={altermode} 
                  mode={mode}
                />
                </div>
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <div>
                <Stockkakaam
                  altermode={altermode} 
                  mode={mode}  
                  onModeChange={onModeChange}
                />
                <Newscompm
                  key="science"
                  pageSize={8}
                  country="in"
                  category="science"
                  altermode={altermode} 
                  mode={mode}
                />
                </div>
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <div>
                <Stockkakaam
                  altermode={altermode} 
                  mode={mode}  
                  onModeChange={onModeChange}
                />
                <Newscompm
                  key="sports"
                  pageSize={8}
                  country="in"
                  category="sports"
                  altermode={altermode} 
                  mode={mode}
                />
                </div>
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <div>
                <Stockkakaam
                  altermode={altermode} 
                  mode={mode}  
                  onModeChange={onModeChange}
                />
                <Newscompm
                  key="technology"
                  pageSize={8}
                  country="in"
                  category="technology"
                  altermode={altermode} 
                  mode={mode}
                />
                </div>
              }
            ></Route>
            <Route
              exact path="/login"
              element={
                <Loginm
                
                />
              }  
            ></Route>
            <Route
              exact path="/signup"
              element={
                <Signupm
                
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  
}
