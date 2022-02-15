import axios from "axios";

const getUserFullData=async (id)=>{
    let userData={};
    userData.id=id;
   let resp=await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
   let user=resp.data;
   userData.name=user.name;
   userData.email=user.email;
   //Get todos

    resp=await axios.get("https://jsonplaceholder.typicode.com/todos");
    let allTodos=resp.data;
    let userTodos=allTodos.filter(x=>x.userId=id);
    userTodos=userTodos.slice(0,5);
    let userTitles=userTodos.map(x=>x.title);
    userData.todo=userTitles;
    //Get Post data


    resp=await axios.get("https://jsonplaceholder.typicode.com/posts");
    let allPosts=resp.data;
    let userPosts=allPosts.map(x=>x.userId=id);
    userData.post=userPosts[0].title;
    return userData;






}