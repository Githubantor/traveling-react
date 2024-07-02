import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Body from "../Component/Body/Body";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div className="mx-20">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Body></Body>  
            <div>
                <Footer></Footer>
            </div>
        </div>
        
        

       
    );
};

export default Root;