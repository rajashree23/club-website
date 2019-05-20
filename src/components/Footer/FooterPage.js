import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Icon from "react-icons-kit";
import {
  envelope,
  phone,
  facebook,
  linkedin,
  github
} from "react-icons-kit/fa";

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: "1rem"
  },
  content: {
    textAlign: "center",
    fontFamily: "Roboto"
  },
  upper: {
    backgroundColor: "#2c3e50",
    color: "white",
    marginTop: "0.7rem",
    paddingLeft: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "1rem"
  },
  lower: {
    backgroundColor: "#031828",
    color: "white",

    paddingTop: "1em",
    alignItems: "center",
    justify: "center",
    height: "3em"
  },
  nomargin: {
    marginBottom: 0
  },
  icon: {
    marginRight: "0.5rem",
    color: "white"
  },
  auto: {
    display: "inline-block",
    textAlign: "left"
  }
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid className={classes.upper} container spacing={24}>
        <Grid className={classes.content} item lg={6} md={6} sm={12}>
          <div className={classes.auto}>
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <p className={classes.nomargin}>SAC, Near Canteen,</p>
            <p className={classes.nomargin}>CET Bhubaneswar, Bhubaneswar,</p>
            <p className={classes.nomargin}>Odisha, India- 751003</p>
            <br />
            <p>
              <Icon className={classes.icon} icon={envelope} />
              cet.sac.zairza@gmail.com
            </p>
            <p>
              <Icon className={classes.icon} icon={phone} />
              +91-8598033713
            </p>
            <p>
              <div />
              <a href="https://www.facebook.com/zairza.cetb/">
                <Icon className={classes.icon} icon={facebook} />
              </a>
              <a href="https://github.com/zairza-cetb/">
                <Icon className={classes.icon} icon={github} />
              </a>
              <a href="https://linkedin.com/company/zairza/">
                <Icon className={classes.icon} icon={linkedin} />
              </a>
            </p>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={6} md={6} sm={12}>
          <div className={classes.auto}>
            <h4>
              <strong>About Us</strong>
            </h4>
            <p className={classes.nomargin}>
              At Zairza, we cultivate technical innovation, shared learning
            </p>
            <p> and personal improvement among the members.</p>
            <p>
              <strong>Wonder. Think. Create.</strong>
            </p>
            <p>Designed with &#10084; by Zairza Web Team</p>
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.lower}>
        <Grid className={classes.content}>
          <p>&copy; 2019 Zairza All Rights Reserved </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Footer);
