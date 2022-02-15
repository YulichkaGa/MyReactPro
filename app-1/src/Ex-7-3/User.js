import {useState} from "react";
import TaskComp from "./Task";







function UserComp(props) {
    const[showTask,setShowTask]=useState(false)
  return (
    <div className="App" style={{width:"500px",borderWidth:"2px",border:"solid",borderColor:"red",textAlign:"center"}}><br/>
        Id:{props.userData.id}<br/>
        Name:{props.userData.name}<br/>
        Email:{props.userData.email}<br/>
        <input type="button"   value="Task" onClick={()=>setShowTask(true)}/>{

        showTask && <TaskComp userid={props.userData.id}/>
        }

    </div>
  );
}

export default UserComp;
