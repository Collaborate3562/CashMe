import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PapperBlock } from 'dan-components';
import styles from './helpSupport-jss';

function Testimonials(props) {
  const { classes } = props;
  const [expanded, setExpanded] = useState(null);

  const handleChange = useCallback(panel => {
    const expandedValue = expanded !== panel ? panel : false;
    setExpanded(expandedValue);
  }, [expanded]);

  return (
    <PapperBlock style={{ margin: '10rem' }} title="Question and Answer" icon="ios-help-circle-outline" whiteBg desc="Our customer support is here to help.">
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>What is CashMe</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            CashMe is a peer-to-peer payment app, that allows individuals
            <br />
            {' '}
to send, receive and request money to friends and family.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>What is $Cashname</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            A $Cashname is a unique identifier for individual using CashMe App.
            Choosing a $Cashname automatically creates your unique URL
            Where friends and family can make
            payment to you privately and securely.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel2'} onChange={() => handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Account Settings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Tab the profile icon from Home Screen to adjust your profile photo, edit your profile contact info, enable or reset security PIN and Touch ID, increase limit or change your &Cashname.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Add bank Account</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To add a bank to your CashMe Account:
            <br />
            <br />
            1. Tap My cash "wallet icon" on the tab menu
            <br />
            2. Select link bank
            <br />
            3. Add bank debit card info
            <br />
            4. Tab save
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel4'} onChange={() => handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Add Cash</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To add cash to your CashMe App account balance:
            <br />
            <br />
            1. Tab Add Cash from your home Screen
            <br />
            2. Enter the amount
            <br />
            3. Tab Add Cash
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel5'} onChange={() => handleChange('panel5')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Bank Transfers</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Some debit cards don't consistently support the transaction networks we use to send funds instantly, so in these cases we're unable to send the funds immediately to your bank account.
            <br />
            If we are unable to send your funds instantly, they will be available in your bank account within 1-3 business days and you will be refunded any instant deposit fees.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel6'} onChange={() => handleChange('panel6')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Cancel Payment</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            CashMe App to CashMe App payments are instant and usually can't be canceled To be sure, check your history transactions if the payment receipt is displaying cancel option.
            <br />
            Recipient can also refund your payment. ask them to:
            <br />
            <br />
            1. Tab the History
            <br />
            2. Select Payment on Question
            <br />
            3. Select cancel or refund
            <br />
            4. Tab Ok
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel7'} onChange={() => handleChange('panel7')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>CashMe Reward</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Collect 1 star for every dollar spent and redeem to cash:
            <br />
            <br />
            1. Tap home icons
            <br />
            2. Tap Reward
            <br />
            3. Tap Redeem to Cash
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel8'} onChange={() => handleChange('panel8')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Identity Verification</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To verify your identity:
            <br />
            <br />
            1. Tap profile icon on the tab menu
            <br />
            2. Tap Settings
            <br />
            3. Tab identity verification to complete the verification
            <br />
            4. The on-screen prompts will guide you through this process
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel9'} onChange={() => handleChange('panel9')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Login</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To login to CashMe App:
            <br />
            <br />
            1. open the CashMe App
            <br />
            2. Tab Get Stared
            <br />
            3. Enter your email or phone
            <br />
            4. Tab Request Passcode
            <br />
            5. Confirm Passcode
            <br />
            6. Tab Login
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel10'} onChange={() => handleChange('panel10')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Missing Payment</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Payment witch appear to be missing may have been send to the another phone number or email associated with you. Here's how to locate them:
            <br />
            <br />
            1. Tab profile
            <br />
            2. Tab settings
            <br />
            3. Tab support
            <br />
            4. Tab contact support
            <br />
            5. include the email the name. $cashname, phone number and email address associated with missing payment
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel11'} onChange={() => handleChange('panel11')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Receive a Payment</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Received payment are visible in your Receive. To view or accept payment:
            <br />
            <br />
            1. Tab the REceive on your Cashme App home Screen
            <br />
            2. Select the payment that you want to review
            <br />
            3. Tap..
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel12'} onChange={() => handleChange('panel12')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Refund</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To refund a payment:
            <br />
            <br />
            1. Tab History on your Cashme App Home Screen
            <br />
            2. Select the payment
            <br />
            3. Select refund
            <br />
            4. Tab OK
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel13'} onChange={() => handleChange('panel13')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Sending a Payment</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To send a payment
            <br />
            <br />
            1. Login to CashMe App
            <br />
            2. Tab the pay icon
            <br />
            3. Enter the amount
            <br />
            4. Enter an email address, phone number, or $Cashname
            <br />
            5. Enter "Note" what the payment is for
            <br />
            6. Tab Pay
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ minHeight: '25vh' }} expanded={expanded === 'panel14'} onChange={() => handleChange('panel14')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Sign up</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To Sign up a CashMe Account:
            <br />
            <br />
            1. Download the Cashme App
            <br />
            2. Opent the Cashme App
            <br />
            3. Tab Get Started
            <br />
            4. Enter your email or phone to sign up
            <br />
            5. Tab Request Passcode
            <br />
            6. Confirm Passcode and tab sign up
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </PapperBlock>
  );
}

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Testimonials);
