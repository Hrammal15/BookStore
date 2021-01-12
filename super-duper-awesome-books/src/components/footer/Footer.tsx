import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import gitlogo from '../../pictures/GitHub-Mark.png'; 


  export const FooterPage: React.FunctionComponent<any> = (props) => {
  return (

    <MDBFooter style={{position:"absolute" , bottom:"0", background:"#808080", width:"100%"}} color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      </MDBContainer>
      <MDBContainer>

    <div className="footer-copyright text-center py-3">
    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/2011Canada/project-2-team6-frontEnd">
     <img style={{height:"50px", width:"50px", borderRadius:"40px"}}  src={gitlogo} alt="Logo" />
    </a></div>
        </MDBContainer>
      
    </MDBFooter>
  );
}

export default FooterPage;

// WORK WITH US
// Authors
// Advertise
// Authors & ads blog
// API