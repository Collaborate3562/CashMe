import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import Title from './Title';
import styles from './landingStyle-jss';

function Feature(props) {
  const { classes, slideMode } = props;
  const [steps, setStep] = useState({
    login: true,
    passCode: false,
    fullName: false,
    cashName: false,
    debit: false,
  });
  const [cashName, setCashName] = useState('');
  const [fullName, setFullName] = useState('');
  const [passCode, setPassCodes] = useState(['', '', '', '', '', '']);
  const [input1, input2, input3, input4, input5, input6] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const [debit, setDebit] = useState({
    number: null,
    day: null,
    cvv: null
  });
  const setPassCode = object => setPassCodes(prevState => ({ ...prevState, ...object }));
  const setSteps = object => setStep(prevState => ({ ...prevState, ...object }));

  function submitEmailOrPhone(event) {
    event.preventDefault();
    setSteps({ passCode: true });
  }

  function submitPassCode(event) {
    event.preventDefault();
    const value = passCode['1'].concat(passCode['2']).concat(passCode['3']).concat(passCode['4']).concat(passCode['5'])
      .concat(passCode['6']);
    setSteps({
      fullName: true, login: false, passCode: false, cashName: false, debit: false
    });
    console.log(value);
  }
  function submitCashName(event) {
    event.preventDefault();
    setSteps({
      fullName: false, login: false, passCode: false, cashName: true, debit: false
    });
  }
  function submitDebit(event) {
    event.preventDefault();
    setSteps({
      fullName: false, login: false, passCode: false, cashName: false, debit: true
    });
  }
  function submitWelcome(event) {
    event.preventDefault();
    setSteps({
      fullName: false, login: false, passCode: false, cashName: false, debit: false
    });
  }
  return (
    steps.passCode ? (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="Enter the passcode send to your email or phone" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5} style={{ justifyContent: 'center' }}>
            <form autoComplete="off" onSubmit={submitPassCode}>
              <div>
                <input
                  ref={input1}
                  type="number"
                  value={passCode['1']}
                  onChange={(e) => {
                    if (e.target.value.length <= 1) {
                      setPassCode({ 1: e.target.value });
                      input2.current.focus();
                    }
                    if (e.target.value.length < 1) {
                      input1.current.focus();
                    }
                  }}
                  name="passcode"
                  className="pass-code-input"
                />
                <input
                  ref={input2}
                  type="number"
                  value={passCode['2']}
                  onChange={(e) => {
                    if (e.target.value.length <= 1) {
                      setPassCode({ 2: e.target.value });
                      input3.current.focus();
                    }
                    if (e.target.value.length < 1) {
                      input1.current.focus();
                    }
                  }}
                  name="passcode"
                  className="pass-code-input"
                />
                <input
                  ref={input3}
                  type="number"
                  value={passCode['3']}
                  onChange={(e) => {
                    if (e.target.value.length <= 1) {
                      setPassCode({ 3: e.target.value });
                      input4.current.focus();
                    }
                    if (e.target.value.length < 1) {
                      input2.current.focus();
                    }
                  }}
                  name="passcode"
                  className="pass-code-input"
                />
                <input
                  ref={input4}
                  type="number"
                  value={passCode['4']}
                  onChange={(e) => {
                    if (e.target.value.length <= 1) {
                      setPassCode({ 4: e.target.value });
                      input5.current.focus();
                    }
                    if (e.target.value.length < 1) {
                      input3.current.focus();
                    }
                  }}
                  name="passcode"
                  className="pass-code-input"
                />
                <input
                  ref={input5}
                  type="number"
                  value={passCode['5']}
                  onChange={(e) => {
                    if (e.target.value.length <= 1) {
                      setPassCode({ 5: e.target.value });
                      input6.current.focus();
                    }
                    if (e.target.value.length < 1) {
                      input4.current.focus();
                    }
                  }}
                  name="passcode"
                  className="pass-code-input"
                />
                <input
                  ref={input6}
                  type="number"
                  value={passCode['6']}
                  onChange={(e) => {
                    if (e.target.value.length <= 1) setPassCode({ 6: e.target.value });
                    if (e.target.value.length < 1) {
                      input5.current.focus();
                    }
                  }}
                  name="passcode"
                  className="pass-code-input"
                />
              </div>
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </form>
          </Grid>
        </div>
      </div>
    ) : steps.fullName ? (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="Confirm your full name" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5}>
            <form autoComplete="off" onSubmit={submitCashName}>
              <TextField id="outlined-basic-1" label="Full Name" variant="outlined" style={{ width: '400px' }} value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Save
              </Button>
            </form>
          </Grid>
        </div>
      </div>
    ) : steps.cashName ? (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="Choose a $Cashname, your unique name to get paid" id="cash-name-title" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5} style={{ justifyContent: 'center' }}>
            <form autoComplete="off" onSubmit={submitDebit}>
              <TextField id="outlined-basic-2" value={cashName} onChange={(e) => setCashName(e.target.value)} label={`cashmeapp.ca/$${cashName}`} variant="outlined" style={{ width: '400px' }} />
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Save
              </Button>
            </form>
          </Grid>
        </div>
      </div>
    ) : steps.debit ? (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="Add bank using debit card" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5}>
            <form autoComplete="off" onSubmit={submitWelcome}>
              <div id="debit-continuer">
                <input
                  className="debit-input"
                  type="number"
                  placeholder="Debit card number"
                  value={debit.number}
                  onChange={(e) => {
                    if (e.target.value.length <= 20) setDebit({ number: e.target.value });
                  }}
                />
                <br />
                <NumberFormat className="debit-input" format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} />
                <input
                  className="debit-input"
                  type="number"
                  placeholder="CVV"
                  value={debit.cvv}
                  onChange={(e) => {
                    if (e.target.value.length <= 3) setDebit({ cvv: e.target.value });
                  }}
                />
              </div>
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Request Passcode
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  setSteps({
                    fullName: false, login: false, passCode: false, cashName: false, debit: false
                  });
                }}
              >
                Skip

              </Button>
            </form>
          </Grid>
        </div>
      </div>
    ) : steps.login && (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="Login" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5}>
            <form autoComplete="off" onSubmit={submitEmailOrPhone}>
              <TextField id="outlined-basic-3" label="Enter Email or Phone" variant="outlined" style={{ width: '400px' }} />
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Request Passcode
              </Button>
            </form>
          </Grid>
        </div>
      </div>
    )
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
