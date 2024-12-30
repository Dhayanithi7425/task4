import { useState } from "react"
import Dog from './Dog';
function Cat(){
    let[count, setCount] = useState(0);
    let[name,setName] = useState(" ")
    
    return(                                                                                                                                             
        <>  
        <div>
            <button onClick={()=>setCount(count+1)}>++</button>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count-1)}>--</button>
            <h1>name:{name}</h1>
            <input type="text"  onChange={(event)=>{setName(event.target.value)}}></input>
        </div>
        </>
    )
}
export default Cat  