import React from "react";
import NavigationBar from "../Layouts/Navigationbar";
import Typography from "@material-ui/core/Typography";
import Grid from "../components/homepage/grid";
import WhatWeDo from "../components/homepage/whatwedo";

const styles = {
  width: `100%`
};

const headingText = {
  fontFamily: `Courier New`,
  fontSize: `36px`,
  marginTop: `5%`
};

const hrStyle = {
  width: `20%`,
  color: `black`,
  height: `2px`,
  marginBottom: `3%`
};

const innerPara = {
  fontSize: `16px`,
  fontFamily: `Lato`,
  marginBottom: `5%`,
  lineHeight: `2`
};

const section = {
  marginBottom: `10%`
};

class IndexContainer extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <img src="index.jpg" style={styles} />
        <Typography
          component="h2"
          align="center"
          variant="h5"
          gutterBottom
          style={headingText}
        >
          We are Zairza
        </Typography>
        <hr style={hrStyle} />
        <div class="container">
          <Typography
            component="h2"
            align="justify"
            variant="h5"
            gutterBottom
            style={innerPara}
          >
            ZAIRZA is a cult for CETians who want to be ahead in the game. Sure
            we all have talent, in this club we put our talents through many
            obstacles and we conquer them. We walk out as winners who not only
            read books all these years but test the theories and sometimes make
            our own.
          </Typography>
        </div>
        <div className="container-fluid" style={section}>
          <Grid />
        </div>
        <Typography
          component="h2"
          align="center"
          variant="h5"
          gutterBottom
          style={headingText}
        >
          What We Do
        </Typography>
        <hr style={hrStyle} />
        <div class="container">
          <Typography
            component="h2"
            align="justify"
            variant="h5"
            gutterBottom
            style={innerPara}
          >
            Extensive research and development is carried out which equips the
            members with knowledge on various technological fields. Members are
            actively engaged in taking the society to greater height through
            their continuous efforts in the field of Engineering. The legacy of
            Zairza flows down through each batch of CET which empowers us to
            stand ahead of our counterparts.
          </Typography>
        </div>
        <div className="container" style={section}>
          <WhatWeDo />
        </div>
      </div>
    );
  }
}

export default IndexContainer;
