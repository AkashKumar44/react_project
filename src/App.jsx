import React from "react";
import "tachyons";
import Home from "./Home";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Services from "./Services";
import { Button } from "react-bootstrap";



const App = (props) =>{
  const avtarlist = [
    {
        id:1,
        name:"vinod",
        work:"developer"
    },
    {
      id:2,
      name:"gola",
      work:"developercxvxv"
  },
  {
    id:3,
    name:"vinod123",
    work:"developer12312"
},
{
  id:4,
  name:"singh",
  work:"developer21312"
} ,
{
  id:5,
  name:"singh",
  work:"developer21312"
}
]
const avtarcard = avtarlist.map( (akash,i) =>{
  return <Home  key={avtarlist[i].id}  name={avtarlist[i].name} work={avtarlist[i].work}/>
})
  return ( 
  <>
  <Home />
  {/* <Button variant="success">Testhell</Button> */}
  </>
  );
};


export default App;