


import {Link,useNavigate} from "react-router-dom";










const navigateTo=()=>{

navigate("/about");
}




const ContactUsComp=()=> {
    const navigate=useNavigate();
  return (
    <div className="App" style={{width:"800px",height:"400px",backgroundColor:"green"}}><br/>
  <h1>Contact us page...</h1>

<Link to="/about">Go to about us page</Link><br/>
      <input type="button" value="To About Page" onclose={navigate}/>


    </div>
  );
}

export default ContactUsComp;
