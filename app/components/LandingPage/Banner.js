import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './landingStyle-jss';
import BannerParallax from './BannerParallax';

function Banner(props) {
  const { classes, slideMode } = props;

  const reducer = 'ui';
  const gradient = useSelector(state => state.getIn([reducer, 'gradient']));
  return (
    <div
      className={
        classNames(
          classes.banner,
          gradient ? classes.gradient : classes.solid,
          slideMode ? classes.out : classes.fit
        )
      }
    >
      {!slideMode && <BannerParallax />}
      <div className={!slideMode ? classes.container : ''} id="homepage">
        <div>
          <Typography component="h2" variant="h2" gutterBottom align="left" className="brandName__border-bottom">CashMe</Typography>
          <Typography component="p" variant="h5" gutterBottom align="left" className="brandName__description">Send and receive mony with anyone, just enter a $Cashname, email, phone number or scan their QR code, send, spend or Invest Cash</Typography>
          <Typography component="h1" variant="h2" gutterBottom align="left" className="brandName__app">APP</Typography>
        </div>
        <div className={classes.previewApp}>
          <Hidden smDown>
            <img id="homepage__image" src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/Cash%20me.svg?alt=media&token=0facaaf8-36aa-4c61-b020-d1ec2d53d71c" alt="crypto dashboard" />
          </Hidden>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Banner.defaultProps = {
  slideMode: false
};

const MemoedBanner = memo(Banner);
export default (withStyles(styles)(MemoedBanner));
