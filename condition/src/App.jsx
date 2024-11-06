
import {useState} from "react";
import Cybrom from "./Cybrom";
import Bhopal from "./Bhopal";
const App=()=>{
    const [status,setStatus]=useState(false);
   return(
    <>
    {status?<Cybrom/>:<Bhopal/>}
   <button onClick={()=>{setStatus(true)}}>Click here</button>
    </>
   )
}
export default App;
