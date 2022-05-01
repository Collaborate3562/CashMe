import React, { Fragment, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';
import { connect } from 'react-redux';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from 'dan-components/LandingPage/landingStyle-jss';
import Hidden from '@material-ui/core/Hidden';
import {
  ShowcaseSlider,
  Testimonials,
  Security,
  Connection,
  Favorites,
  Pricing,
  Contact,
  PapperBlock,
  Cover
} from 'dan-components';
import bgCover from 'dan-images/petal_bg.svg';
import dummy from 'dan-api/dummy/dummyContents';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import {
  AccountCircle, Favorite, PhotoLibrary, SupervisorAccount
} from '@material-ui/icons';
import SideNav from './SidebarDashboard';
import { AdvFilter } from './demos';

function TabContainer(props) {
  const { children } = props;
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function SliderPage(props) {
  const [curSlide, setCurSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);
  const [value, setValue] = useState(0);
  const slider = useRef(null);
  const setParallaxState = () => setNextSlide(!nextSlide);
  const setActiveMenu = index => setCurSlide(index);

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
    setParallaxState();
  };

  const { classes, sidebarOpen } = props;

  const handleChange = (event, val) => {
    setValue(val);
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Fragment>
      <Hidden mdDown>
        <SideNav
          open={sidebarOpen}
          curSlide={curSlide}
          gotoSlide={(slide) => gotoSlide(slide)}
        />
      </Hidden>
      <main className={classes.fullSliderContent} id="mainContent">
        <div className={classes.sliderPageWrap}>
          <Hidden mdDown>
            <Slider
              ref={slider}
              {...settings}
              onSwipe={() => setParallaxState()}
              afterChange={(index) => setActiveMenu(index)}
            >
              <section id="banner" className="profile" style={{ overflow: 'auto' }}>
                <Cover
                  coverImg={bgCover}
                  avatar={`https://ui-avatars.com/api/length=1?bold=true?name=${'John Doe'}`}
                  name={dummy.user.name}
                  desc="Consectetur adipiscing elit."
                />
                <AppBar position="static" className={classes.profileTab}>
                  <Hidden mdUp>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="fullWidth"
                      indicatorColor="primary"
                      textColor="primary"
                      centered
                    >
                      <Tab icon={<AccountCircle />} />
                      <Tab icon={<SupervisorAccount />} />
                      <Tab icon={<Favorite />} />
                      <Tab icon={<PhotoLibrary />} />
                    </Tabs>
                  </Hidden>
                  <Hidden smDown>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="fullWidth"
                      indicatorColor="primary"
                      textColor="primary"
                      centered
                    >
                      <Tab icon={<AccountCircle />} onClick={() => setValue(0)} label="ABOUT" />
                      <Tab icon={<SupervisorAccount />} label="20 CONNECTIONS" />
                      <Tab icon={<Favorite />} label="18 FAVORITES" />
                      <Tab icon={<PhotoLibrary />} label="4 ALBUMS" />
                    </Tabs>
                  </Hidden>
                </AppBar>
                {value === 1 && <TabContainer><Connection /></TabContainer>}
                {value === 2 && <TabContainer><Favorites /></TabContainer>}
              </section>
              <section id="feature" className="history-section">
                <PapperBlock whiteBg icon="ios-clipboard-outline" title="Advanced Data Table" desc="It uses npm mui-datatables. It's easy to use, you just describe columns and data collection. After that it will magically build features such as filtering, viewing / hiding columns, exporting to CSV downloads, printing, and more.">
                  <div>
                    <AdvFilter />
                  </div>
                </PapperBlock>
              </section>
              <section id="showcase" style={{ overflow: 'auto' }}>
                <div>
                  <div>
                    Earn 1 Star
                    {' '}
                    <br />
                    {' '}
                    For every dollar spent
                  </div>
                  <div className="wrapper-circles" data-anim="base wrapper">
                    <div className="circle1" data-anim="base left" />
                    <div className="circle2" data-anim="base right" />
                  </div>
                </div>
              </section>
              <section id="testimonials">
                <Testimonials slideMode />
              </section>
              <section id="technology">
                <Security slideMode />
              </section>
              <section id="pricing">
                <Pricing slideMode />
              </section>
              <section id="contact">
                <Contact slideMode />
              </section>
            </Slider>
          </Hidden>
          <Hidden only="lg">
            <section id="banner" className="profile" style={{ overflow: 'auto' }}>
              <Cover
                coverImg={bgCover}
                avatar={`https://ui-avatars.com/api/length=1?bold=true?name=${'John Doe'}`}
                name={dummy.user.name}
                desc="Consectetur adipiscing elit."
              />
              <AppBar position="static" className={classes.profileTab}>
                <Hidden mdUp>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab icon={<AccountCircle />} />
                    <Tab icon={<SupervisorAccount />} />
                    <Tab icon={<Favorite />} />
                    <Tab icon={<PhotoLibrary />} />
                  </Tabs>
                </Hidden>
                <Hidden smDown>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab icon={<AccountCircle />} onClick={() => setValue(0)} label="ABOUT" />
                    <Tab icon={<SupervisorAccount />} label="20 CONNECTIONS" />
                    <Tab icon={<Favorite />} label="18 FAVORITES" />
                    <Tab icon={<PhotoLibrary />} label="4 ALBUMS" />
                  </Tabs>
                </Hidden>
              </AppBar>
              {value === 1 && <TabContainer><Connection /></TabContainer>}
              {value === 2 && <TabContainer><Favorites /></TabContainer>}
            </section>
            <section id="feature">
              <PapperBlock whiteBg icon="ios-clipboard-outline" title="Advanced Data Table" desc="It uses npm mui-datatables. It's easy to use, you just describe columns and data collection. After that it will magically build features such as filtering, viewing / hiding columns, exporting to CSV downloads, printing, and more.">
                <div>
                  <AdvFilter />
                </div>
              </PapperBlock>
            </section>
            <section id="showcase">
              <ShowcaseSlider slideMode />
            </section>
            <section id="testimonials">
              <Testimonials slideMode />
            </section>
            <section id="technology">
              <Security slideMode />
            </section>
            <section id="pricing">
              <Pricing slideMode />
            </section>
            <section id="contact">
              <Contact slideMode />
            </section>
          </Hidden>
        </div>
      </main>
    </Fragment>
  );
}

SliderPage.propTypes = {
  classes: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  sidebarOpen: state.getIn([reducer, 'sidebarOpen']),
  gradient: state.getIn([reducer, 'gradient']),
});

const SliderPageMapped = connect(
  mapStateToProps,
)(SliderPage);

export default (withStyles(styles)(SliderPageMapped));
