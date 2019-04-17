import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import orange from "@material-ui/core/colors/orange";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";

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
    backgroundColor: "#0d47a1",
    borderColor: "#007bff"
  },
  fourthButton: {
    backgroundColor: "#90caf9",
    borderColor: "#007bff"
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

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
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
                Monthly sessions on latest technologies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.paper}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
              >
                TEAM
              </Button>
              <Typography
                component="h2"
                align="left"
                variant="subtitle1"
                gutterBottom
                style={fontFamily}
              >
                Monthly sessions on latest technologies.
              </Typography>
            </Paper>
          </Grid>
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
                Monthly sessions on latest technologies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <Paper className={classes.paper}>
              <Button
                variant="contained"
                color="tertiary"
                className={classNames(classes.btn, classes.fourthButton)}
              >
                NEW
              </Button>
              <Typography
                component="h2"
                align="left"
                variant="subtitle1"
                gutterBottom
                style={fontFamily}
              >
                Monthly sessions on latest technologies.
              </Typography>
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
