import {Route, Routes, Link} from "react-router-dom";


import ContactUsComp from "./ContactUs";
import AboutUsComp from "./AboutUs";
import HomeComp from "./Home";





const MainPageComp=()=> {

    return(

    <div className="App"><br/>
        <h1>Welcome to SPA!</h1>
        <Link to="/home">To Home Page</Link><br/>
        <Link to="/contact">To Contact Page</Link><br/>
        <Link to="/about">To About Page</Link><br/>


        <Routes>
            <Route exact path="/home" element={<HomeComp/>}></Route>
            <Route exact path="/contact" element={<ContactUsComp/>}></Route>

            <Route path="/about" element={<AboutUsComp/>} ></Route>
        </Routes>







  <h1>SPA Footer</h1>





    </div>
  );
}

export default MainPageComp;
