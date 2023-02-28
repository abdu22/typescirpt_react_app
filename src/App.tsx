import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import Home from './Component/Home';
import About from './Component/About';
import "./Navigation.css";
import { Button } from "@material-ui/core";
import AddressPanel from './Component/AddressPanel';

export type Address = {
    city: string,
    state: string,
} 

function App() {

   const [name, setName] = useState<string>("");
   const [age, setAge] = useState<number>(0);
   const [address, setAddress] = useState<Address>({city: "", state: ""});


   return (
     <Router>
        <div>
            <Navigation />
            <Routes>
            <Route  path="/" element ={ <Home setName={setName} name={name} address={address} setAddress={setAddress}/>} />
            <Route  path="/about" element ={ 
                   <About name={name}>
                      <AddressPanel address={address}/>
                   </About>
                } 
            />
            </Routes>
            
        </div>
     </Router>
   )
}

const Navigation = () => {
   let navigate = useNavigate();
     return (
      <nav>
         <ul className='nav-links'>
         <li>
          <Button   className="nav-link" onClick={() => navigate("/")}>
            Home
          </Button>
        </li>
        <li>
          <Button className="nav-link" onClick={() => navigate("/about")}>
            About
          </Button>
        </li>
         </ul>
      </nav>
     );
}

export default App;
