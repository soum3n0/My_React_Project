import { LOGO_URL } from "../Utils/contants";

const Header = () => {
    return(
        <div className="header">

            <div className="logo-container">
                <img  className="logo" src= {LOGO_URL}/>    
            </div> 

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact us</li>  
                    <div className = "logo-sec">
                       <li><img className="chart-logo" src="https://i.pinimg.com/originals/53/a0/fd/53a0fdd351674e0794ada73267f0fa33.png"></img></li>
                    </div>
                </ul>    
            </div>
        </div>
    );
};

export default Header;