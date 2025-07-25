'use client';
import { useEffect } from "react";
import AddOocytes from "./components/AddOocytes";
import Reports from "./components/Reports";
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  useEffect(()=>{
    alert("This is made by Muzammil Abbas \n Github Link:https://github.com/MuzammilDaku/frontend-assignment \n Mobile:0329247213")
  },[])
  return (
   <div>
    <AddOocytes />
    <Reports />
   </div>
  );
}
