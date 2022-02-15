import {useEffect, useState} from "react";
import axios from "axios";


function TaskComp(props) {
 const [titles,setTitles]=useState([])
    useEffect(async ()=>{
 let resp= await  axios.get("https://jsonplaceholder.typicode.com/todos");
 let allTodos=resp.data;


 let userTodos=allTodos.filter(x=>x.userId=props.userid);
        userTodos=userTodos.slice(0,3);
 let userTitles=userTodos.map(x=>x.title)
     setTitles(userTitles);
    },[])
  return (
    <div className="App" style={{width:"300px", borderColor:"blue",borderWidth:"1px",border:"solid"}}><br/>
   <h3>Tasks</h3>
       <ul>
           {
             titles.map((item,index)=>{
                 return <li key={index} >{item}</li>
             })
           }
       </ul>
    </div>
  );
}

export default TaskComp;
