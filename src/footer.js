import React from 'react';
import './footer.css';

const Footer = (props) => {
    return(
        <footer id="footer">
            <p id="footText">&copy; YSK DEVELOPER</p>
            <hr/>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footDiv">
                <p>Blogs</p>
                <p>Details</p>
            </div>
            <div className="footDiv noBorder">
                <p>Add Restaurants</p>
                <p>Careers</p>
            </div>
            
        </footer>
    )
}

export default Footer;