import React from "react";
import Navigationbar from "../components/navbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  width: `100%`
};

const fontFamily = {
  fontFamily: `Courier New`
};

const hrStyle = {
  width: `200px`,
  color: `black`
};

class IndexContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <img src="index.jpg" style={styles} />
        <Typography
          component="h2"
          align="center"
          variant="headline"
          gutterBottom
          style={fontFamily}
        >
          We are Zairza
        </Typography>
        <hr style={hrStyle} />
      </div>
    );
  }
}

export default IndexContainer;
