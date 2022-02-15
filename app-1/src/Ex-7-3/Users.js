import {useEffect, useState} from "react";
import axios from "axios";
import UserComp from "./User";



function UsersComp() {
  const[users,setUsers]=useState([]);


  useEffect(async ()=>{
let resp=await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(resp.data)
  },[]);

  return (
    <div className="App" style={{textAlign:"center"}}>
  <h1>Users List</h1>
      {
        users.map(item=>{
          return <UserComp key={item.id} userData={item}/>
        })
      }
    </div>
  );
}

export default UsersComp;
