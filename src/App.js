import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarm from "./components/Navbar";
import Newscompm from "./components/Newscomp";
import Stockkakaam from "./components/Stock";
import Loginm from "./components/Login";
import Signupm from "./components/Sign";
export default class App extends Component {
  constructor(props) {
    super(props);//used to call the constructor of the parent class (in this case, Component).
    this.state = {
      mode: "black",
      altermode:"white",
      sign:"in"
    }
  }
  onModeChange = () => {
    this.setState((pichhla) => ({
      mode: pichhla.mode === "black" ? "white" : "black",
      altermode : pichhla.altermode==="white"?"black" :"white"
    }));
  };
  onSignChange=()=>{
    this.setState((pichhla) => ({
      sign:pichhla.sign==="in"?"out":"in"
    }));
  };
  render() {
    
    return (
      <div>
        <Router>
          <Navbarm 
            altermode={this.state.altermode} 
            mode={this.state.mode}  
            onModeChange={this.onModeChange}
            sign={this.state.sign}
            onSignChange={this.onSignChange}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Stockkakaam
                    altermode={this.state.altermode} 
                    mode={this.state.mode}  
                    onModeChange={this.onModeChange}
                  />
                  <Newscompm
                    key="general"
                    pageSize={8}
                    country="in"
                    category="general"
                    altermode={this.state.altermode} 
                    mode={this.state.mode}  
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
                  altermode={this.state.altermode} 
                  mode={this.state.mode}  
                  onModeChange={this.onModeChange}
                />
                <Newscompm
                  key="business"
                  pageSize={8}
                  country="in"
                  category="business"
                  altermode={this.state.altermode} 
                  mode={this.state.mode}
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
                  altermode={this.state.altermode} 
                  mode={this.state.mode}  
                  onModeChange={this.onModeChange}
                />
                <Newscompm
                  key="entertainment"
                  pageSize={8}
                  country="in"
                  category="entertainment"
                  altermode={this.state.altermode} 
                  mode={this.state.mode}
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
                  altermode={this.state.altermode} 
                  mode={this.state.mode}  
                  onModeChange={this.onModeChange}
                />
                <Newscompm
                  key="health"
                  pageSize={8}
                  country="in"
                  category="health"
                  altermode={this.state.altermode} 
                  mode={this.state.mode}
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
                  altermode={this.state.altermode} 
                  mode={this.state.mode}  
                  onModeChange={this.onModeChange}
                />
                <Newscompm
                  key="science"
                  pageSize={8}
                  country="in"
                  category="science"
                  altermode={this.state.altermode} 
                  mode={this.state.mode}
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
                  altermode={this.state.altermode} 
                  mode={this.state.mode}  
                  onModeChange={this.onModeChange}
                />
                <Newscompm
                  key="sports"
                  pageSize={8}
                  country="in"
                  category="sports"
                  altermode={this.state.altermode} 
                  mode={this.state.mode}
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
                  altermode={this.state.altermode} 
                  mode={this.state.mode}  
                  onModeChange={this.onModeChange}
                />
                <Newscompm
                  key="technology"
                  pageSize={8}
                  country="in"
                  category="technology"
                  altermode={this.state.altermode} 
                  mode={this.state.mode}
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
}
