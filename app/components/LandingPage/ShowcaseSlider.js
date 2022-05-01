import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShowcaseCard from '../CardPaper/ShowcaseCard';
import Title from './Title';
import styles from './landingStyle-jss';

function ShowcaseSlider(props) {
  const { classes, slideMode } = props;

  return (
    <div className={classes.showcase}>
      <div className={slideMode ? classes.fullWidth : classes.container}>
        <Grid container className={classes.root} spacing={5}>
          <Grid item md={6} xs={12}>
            <Title title="Feature" align="left" monocolor={slideMode && true} />
            <ShowcaseCard
              landscape
              title="Payments"
              desc="Pay or Request"
              action="LOOK INSIDE"
              image="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/pay%20request.svg?alt=media&token=7a807d1c-2b35-4875-a0f1-c90ab035f9c7"
            />
            <ShowcaseCard
              landscape
              title="My Cash"
              desc="Banking"
              action="LOOK INSIDE"
              image="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/My%20Cash%20WITHOUT%20SHADO.svg?alt=media&token=b047fc8e-d401-47f8-aa37-7ef25279f08a"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Star"
              desc="Redeem Cash"
              action="LOOK INSIDE"
              image="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/Reward.png?alt=media&token=380cb7a7-4f39-4545-b973-94f9e2fc8cec"
            />
            <ShowcaseCard
              landscape
              title="Reward"
              desc="Star Rewards"
              action="LOOK INSIDE"
              image="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/Note%20in%20black%20version.svg?alt=media&token=71605c7c-b102-439b-8b72-41fe96759820"
            />
            <ShowcaseCard
              landscape
              title="QR code"
              desc="Scan in Stores"
              action="LOOK INSIDE"
              image="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/SCAN%20CODE.svg?alt=media&token=4e453b8e-63d4-4e1b-9160-8a17c8e32d7a"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

ShowcaseSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

ShowcaseSlider.defaultProps = {
  slideMode: false
};


export default withStyles(styles)(ShowcaseSlider);
