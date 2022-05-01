import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Title from './Title';
import styles from './landingStyle-jss';

let counter = 0;
function createFeatureData(icon, title, desc) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc
  };
}

function Feature(props) {
  const { classes, slideMode } = props;
  const featureList = [
    createFeatureData('ion-ios-infinite-outline', 'User Agreemet', 'This user agreement is a Contact between you and CashMe, Inc...'),
    createFeatureData('ion-ios-flower-outline', 'E-Sign Consent', 'Under this consent, Cashme may provide all communications, Notices, agreemet..'),
    createFeatureData('ion-ios-ionic-outline', 'Privacy Policy', 'CashMe, Inc. service. Knows that you care about how your Personal information...')
  ];

  return (
    <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
      <div className={!slideMode ? classes.container : ''}>
        <Title title="Terms of Service" align="center" monocolor={slideMode && true} />
        <Grid container className={classes.root} spacing={5}>
          {featureList.map(item => (
            <Grid key={item.id.toString()} item xs={12} md={4}>
              <Typography component="h4" variant="h6">
                <span className={classes.icon}>
                  <i className={item.icon} />
                </span>
                {item.title}
              </Typography>
              <Typography className={slideMode ? classes.colorWhite : ''}>
                {item.desc}
              </Typography>
              <Button style={{ marginTop: '2rem' }} type="submit" variant="contained" color="secondary" fullWidth>
                Get Informed
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Feature.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Feature);
