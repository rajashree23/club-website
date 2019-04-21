import React from "react";
import NavigationBar from "../Layouts/Navigationbar";
import Typography from "@material-ui/core/Typography";
import Grid from "../components/grid";

const styles = {
  width: `100%`
};

const fontFamily = {
  fontFamily: `Courier New`
};

const hrStyle = {
  width: `400px`,
  color: `black`,
  height: `2px`
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
          style={fontFamily}
        >
          We are Zairza
        </Typography>
        <hr style={hrStyle} />
        <div className="container-fluid">
          <Grid />
        </div>
      </div>
    );
  }
}

export default IndexContainer;
