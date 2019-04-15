import React from "react";
import Navigationbar from "../components/navbar";

const styles = {
  width: `100%`
};

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <img src="index.jpg" style={styles} />
      </div>
    );
  }
}

export default Index;
