import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import orange from "@material-ui/core/colors/orange";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";

// declarations and css
const innerTypo = {
  color: `grey`,
  fontSize: `14px`,
  fontFamily: "Lato",
  marginBottom: `10px`
};

const fontFamily = {
  fontFamily: "Lato",
  marginTop: "10px"
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  btn: {
    color: "white",
    borderRadius: "20px",
    fontSize: "12px",
    fontFamily: "Lato"
  },
  thirdButton: {
    backgroundColor: "#1a237e",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#0d47a1",
      borderColor: "#0062cc"
    }
  },
  fourthButton: {
    backgroundColor: "#42a5f5",
    borderColor: "#007bff",
    "&:hover": {
      backgroundColor: "#90caf9",
      borderColor: "#0062cc"
    }
  },
  thirdLink: {
    color: "#1a237e"
  },
  fourthLink: {
    color: "#42a5f5"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      main: "#8e24aa"
    }
  }
});

// functional component
function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        {/* First paper component */}
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.paper}>
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                MONTHLY SESSIONS
              </Button>
              <Typography
                component="h2"
                align="left"
                variant="subtitle1"
                gutterBottom
                style={fontFamily}
              >
                Tech talks, demo and display of projects, hands-on experience.
              </Typography>
              <Typography
                component="h2"
                align="left"
                variant="body1"
                gutterBottom
                style={innerTypo}
              >
                These sessions attempt to bring all developers and enthusiasts
                to learn, innovate and share ideas.
              </Typography>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  window.location = "/sessions";
                }}
              >
                SESSIONS
              </Link>
            </Paper>
          </Grid>

          {/* Second paper component */}
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.paper}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
              >
                RICH ALUMNI BASE
              </Button>
              <Typography
                component="h2"
                align="left"
                variant="subtitle1"
                gutterBottom
                style={fontFamily}
              >
                Meet our great achievers and well-placed Alumni.
              </Typography>
              <Typography
                component="h2"
                align="left"
                variant="body1"
                gutterBottom
                style={innerTypo}
              >
                We have an active, diverse and extremely well-connected Alumni
                base across the globe with great accomplishments.
              </Typography>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  window.location = "/alumni";
                }}
                color="secondary"
              >
                ZAIRZA FAMILY
              </Link>
            </Paper>
          </Grid>

          {/* Third paper component */}
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.paper}>
              <Button
                variant="contained"
                color="tertiary"
                className={classNames(classes.btn, classes.thirdButton)}
              >
                BIG ACHIEVERS
              </Button>
              <Typography
                component="h2"
                align="left"
                variant="subtitle1"
                gutterBottom
                style={fontFamily}
              >
                Meet our big achievers with exceptional achievements.
              </Typography>
              <Typography
                component="h2"
                align="left"
                variant="body1"
                gutterBottom
                style={innerTypo}
              >
                Zairza has the highest number of Google Summer of Code interns
                from Odisha and various other achievements too.
              </Typography>
              <Link
                component="button"
                variant="body2"
                className={classes.thirdLink}
                onClick={() => {
                  window.location = "/team";
                }}
              >
                MEET THE TEAM
              </Link>
            </Paper>
          </Grid>

          {/* Fourth paper component */}
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.paper}>
              <Button
                variant="contained"
                color="tertiary"
                className={classNames(classes.btn, classes.fourthButton)}
              >
                AWESOME PROJECTS
              </Button>
              <Typography
                component="h2"
                align="left"
                variant="subtitle1"
                gutterBottom
                style={fontFamily}
              >
                Here at Zairza, we design, create and innovate.
              </Typography>
              <Typography
                component="h2"
                align="left"
                variant="body1"
                gutterBottom
                style={innerTypo}
              >
                List of our extensive research work, innovative project
                development both in hardware as well as in software category.
              </Typography>
              <Link
                component="button"
                variant="body2"
                className={classes.fourthLink}
                onClick={() => {
                  window.location = "/projects";
                }}
              >
                PROJECTS
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
