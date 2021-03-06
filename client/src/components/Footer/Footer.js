import React from "react";
import "./Footer.css";


var style = {
    backgroundColor: "#312581",
    borderTop: "1px solid #E7E7E7",
    color: "white",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'inline',
  height: '60px',
  width: '100%',
}

function Footer() {
    return <div>
        <div style={phantom}>
          <div style={style}>
            
            <div class="container">
            Our Company - Help - Privacy


              <div class="text-center">
                <a href="https://www.facebook.com/bootsnipp">
                  <i id="social-fb" class=" social fa fa-facebook-square fa-3x social" />
                </a>
                <a href="https://twitter.com/bootsnipp">
                  <i id="social-tw" class=" social fa fa-twitter-square fa-3x social" />
                </a>
                <a href="https://plus.google.com/+Bootsnipp-page">
                  <i id="social-gp" class="social fa fa-google-plus-square fa-3x social" />
                </a>
                <a href="mailto:#">
                  <i id="social-em" class="social fa fa-envelope-square fa-3x social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>;
}

//export default Footer




// const Footer = ({topText, bottomText}) => (
//   <footer className="footer"
    
//     style={{
//       background: '#312581',
//       color: 'white',
//       fontFamily: 'Helvetica',
//       textAlign: 'center'

//     }}
//   >
//     <div className="container-fluid">
//   	<span style={{ fontWeight: 'bold' }}>
//     	{topText}
//     </span>
//     <br />
//     {bottomText}
//     </div>
//   </footer>
// );

export default Footer;