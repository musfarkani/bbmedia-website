import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setcount] =useState(0)
    const [count2,setcount2] =useState(0)
    useEffect(()=>{
        console.log('Mounting...');
        console.log('Count1...'+count);
        console.log('Count2...'+count2);
        return ()=>{
            console.log('Clean Up'+count);
        }
           },[count,count2])
    
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <h1>hello Iam component {count}</h1>

            <button onClick={()=>setcount2(count2+1)}>Increment</button>
            <h1>hello Iam component {count2}</h1>
        </div>
    )
}

export default Counter
