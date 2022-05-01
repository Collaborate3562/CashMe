import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import ClearIcon from '@material-ui/icons/Clear';
import styles from './cardStyle-jss';
import stylesss from '../LandingPage/landingStyle-jss';
import Title from '../LandingPage/Title';


const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function ShowcaseCard(props) {
  const {
    classes,
    slideMode,
    title,
    desc,
    action,
    image,
    landscape,
    date,
    noMargin,
    extraSize,
    href
  } = props;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classNames(stylesss.contact, !slideMode && stylesss.withBg)}>
          <div className={stylesss.container}>
            <div className={stylesss.contactBubble} style={{ minHeight: '555px', padding: '2rem' }}>
              <div style={{ textAlign: 'right' }}><ClearIcon style={{ cursor: 'pointer', fontSize: 'xx-large', color: '#6c6c6c' }} onClick={handleClose} /></div>
              <Title id="title-popup" title={title} align="center" nomargin />
              {/* <h1 style={{ marginTop: '3rem' }}>{title === 'Payments' ? popup.Payments : title === 'QR code' ? popup.qr : title === 'Reward' ? popup.reward : title === 'My Cash' ? popup.myCash : title === 'Star' ? popup.star : ''}</h1> */}
              {title === 'My Cash' ? (
                <h1 style={{ marginTop: '3rem' }}>
                  _Link bank account or credit card,
                  <br />
                  share moments with friends.
                  <br />
                  <br />
                  <br />
                  _Use your CashMe balance or credit card for
                  <br />
                  {' '}
                  your online and in stare purchase.
                </h1>
              ) : title === 'Payments' ? (
                <h1 style={{ marginTop: '3rem' }}>
                  _Pay friends and family with a CashMe account,
                  <br />
                  {' '}
                  using a phone number or email to sign up.
                  <br />
                  <br />
                  <br />
                  {' '}
                  _Send and receive money with anyone, just enter
                  <br />
                  {' '}
                  a $Cashname, phone, or scan their QR code.
                </h1>
              ) : title === 'QR code' ? (
                <h1 style={{ marginTop: '3rem' }}>
                  _Scan your QR code to purchase in stores
                  <br />
                  {' '}
                  with a tap.
                  <br />
                  <br />
                  <br />
                  {' '}
                  _Send and receive mony with anyone, just scan their QR code
                </h1>
              ) : title === 'Reward' ? (
                <h1 style={{ marginTop: '3rem' }}>
                  _Every dollar you spent earn star points.
                  <br />
                  {' '}
                  Online or in stores purchase.
                  <br />
                  <br />
                  <br />
                  {' '}
                  _Turn your stars to cash instantly.
                  <br />
                  {' '}
                  Make it rain$$$
                </h1>
              ) : title === 'Star' ? (
                <h1 style={{ marginTop: '3rem' }}>
                  _With everyday purchase comes with reward stars.
                  <br />
                  <br />
                  <br />
                  {' '}
                  _Turn your star rewards into cash instantly.
                </h1>
              ) : ''}
            </div>
          </div>
        </div>
      </Dialog>
      <Card className={classNames(noMargin ? classes.gutterBottom : classes.cardMedia, landscape && classes.landscapeCard)}>
        <CardMedia
          className={
            classNames(
              landscape ? classes.roundedThumb : classes.roundedMedia,
              extraSize ? classes.extraRounded : ''
            )
          }
          image={image}
          title={title}
          style={{ backgroundSize: image === 'https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/Note%20in%20black%20version.svg?alt=media&token=71605c7c-b102-439b-8b72-41fe96759820' ? '180px' : image === 'https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/pay%20request.svg?alt=media&token=7a807d1c-2b35-4875-a0f1-c90ab035f9c7' ? '120px' : image === 'https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/Reward.png?alt=media&token=380cb7a7-4f39-4545-b973-94f9e2fc8cec' ? '140px' : image === 'https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/SCAN%20CODE.svg?alt=media&token=4e453b8e-63d4-4e1b-9160-8a17c8e32d7a' ? '85px' : '' }}
        />
        <CardContent>
          <Typography noWrap variant="h5">{title}</Typography>
          {date && (<Typography variant="caption" gutterBottom>{date}</Typography>)}
          <Typography variant="subtitle1">{desc}</Typography>
          {landscape && (
            <div className={classes.btnArea}>
              <Button size="large" component={Link} to={href} variant="outlined" color="primary" onClick={handleClickOpen}>{action}</Button>
            </div>
          )}
        </CardContent>
        {!landscape && (
          <CardActions className={classes.btnArea}>
            <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
          </CardActions>
        )}
      </Card>
    </React.Fragment>
  );
}

ShowcaseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  landscape: PropTypes.bool,
  noMargin: PropTypes.bool,
  extraSize: PropTypes.bool,
  date: PropTypes.string,
  href: PropTypes.string,
  slideMode: PropTypes.bool,
};

ShowcaseCard.defaultProps = {
  landscape: false,
  date: undefined,
  noMargin: false,
  extraSize: false,
  slideMode: false,
  href: '#'
};

export default withStyles(styles)(ShowcaseCard);
