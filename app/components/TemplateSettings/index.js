import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import styles from './settings-jss';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 1.5 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function TemplateSettings(props) {
  const [dark, setDark] = useState(true); // eslint-disable-line
  const [gradientState, setGradient] = useState(false); // eslint-disable-line

  useEffect(() => {
    const { changeMode } = props;
    changeMode('dark');
    setGradient(true);
  }, []);
  // TaB Handle

  const {
    classes,
    layout,
  } = props;

  return (
    <aside
      className={
        classNames(
          classes.settingSidebar,
          layout === 'right-sidebar' ? classes.leftSidebar : classes.rightSidebar,
        )
      }
    >
      <div className={classes.toggleButton}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Fab
            size="small"
            color="primary"
            aria-label="toggle"
            className={classes.button}
            classes={{
              root: classes.buttonDrawer,
            }}
          >
            <img width={20} src="https://firebasestorage.googleapis.com/v0/b/cashme-web-app.appspot.com/o/googleplay.png?alt=media&token=ea883753-207c-4bee-93f1-6bfbcd646c9d" alt="google sign" />
          </Fab>
        </a>
      </div>
    </aside>
  );
}

TemplateSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
};

TemplateSettings.defaultProps = {
  palette: undefined
};

export default withStyles(styles)(TemplateSettings);
