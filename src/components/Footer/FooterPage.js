import React from "react";
import Sitemetadata from "../sitemetadata";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footerCSS.css";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneSlash } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

var iconstyle = {
  color: "white"
};

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBCol md="8" className="contact">
          <p className="title">Contact Us</p>
          <MDBCol md="1" className="icons">
            <FaMapMarkerAlt style={iconstyle} />
            <br />
            <br />
            <br />
            <FaRegEnvelope style={iconstyle} />
            <br />
            <MdCall style={iconstyle} />
            <br />
            <span>
              <a href="https://www.facebook.com/zairza.cetb/" target="_blank">
                <FaFacebookSquare style={iconstyle} />
              </a>
            </span>
          </MDBCol>
          <MDBCol md="3" className="location">
            <div className="location">
              Kalinga Nagar,Ghatikia
              <br />
              CET, Bhubaneswar
              <br />
              Odisha
            </div>
            <div className="contactn">
              <a href="#" style={{ color: "#fdd835" }} target="_blank">
                cet.sac.zairza@gmail.com
              </a>
              <br />
              <tel style={{ color: "#fdd835" }}>8598033713</tel>
              <br />
              <span>
                <a href="https://github.com/zairza-cetb" target="_blank">
                  <FaGithubSquare style={iconstyle} />{" "}
                </a>
              </span>
            </div>
          </MDBCol>
          <MDBRow />
        </MDBCol>
        <MDBRow>
          <MDBCol md="15" className="about">
            <p className="title">About</p>

            <p className="cet">
              Technical Society of CET,Bhubaneswar
              <br />
              <br />
              Wonder.Think.Create
              <br />
              <br />
              Designed by Zairza Web Team
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 feet">
        <MDBContainer fluid>
          <p class="feet">&copy; 2019 Zairza All Rights Reserved </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
