import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TechnologyParallax from './TechnologyParallax';
import Title from './Title';
import styles from './landingStyle-jss';

function Technology(props) {
  const { classes, slideMode } = props;

  return (
    <div className={classes.tech}>
      {!slideMode && (<TechnologyParallax />)}
      <div className={slideMode ? classes.fullWidth : classes.container}>
        <Title title="Security" desc="How CashMe helps protect your financial information" align="center" monocolor={slideMode && true} />
        <Grid container className={classes.root} spacing={3}>
          <Grid item sm={4} xs={12}>
            <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img className="security-images" src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/01.png?alt=media&token=f78459be-89ea-4b59-b761-bc299b26e493" alt="Security PIN" />
              </figure>
              <Typography variant="h5" className={classes.react}>Security PIN</Typography>
            </div>
            <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img className="security-images" src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/lOCK.svg?alt=media&token=0ac5e1c0-d047-466a-bf50-055a2fefff7c" alt="react router" />
              </figure>
              <Typography variant="h5" className={classes.router}>Fraud Protection</Typography>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.centerTech}>
              <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img className="security-images" src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/02.png?alt=media&token=62663525-661b-47fb-8a95-ff1500a5321f" alt="redux" />
                </figure>
                <Typography variant="h5" className={classes.redux}>Encryption</Typography>
              </div>
              <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img className="security-images" src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/Group%20559.svg?alt=media&token=136534d9-cd01-40bc-86d8-d96f4bb8d0ac" alt="webpack" />
                </figure>
                <Typography variant="h5" className={classes.webpack}>Touch ID</Typography>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img className="security-images" src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/03.png?alt=media&token=ad52b741-55bf-4f54-b0b5-c48f4fa8f5f5" alt="mui" />
              </figure>
              <Typography variant="h5" className={classes.mui}>Pause Wallet</Typography>
            </div>
            <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
              <figure>
                <img className="security-images" src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/04.png?alt=media&token=75e6a060-db95-4963-81b8-0d3ff883f940" alt="jss" />
              </figure>
              <Typography variant="h5" className={classes.jss}>Secure Passcode</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Technology.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Technology.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Technology);
