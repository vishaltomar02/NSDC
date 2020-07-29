import React from 'react';
import { Route , Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import VisionAndMissionPage from './components/VisionAndMissionPage';
import BecomeAVoluteerPage from './components/BecomeAVolunteerPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import MenuNav from './components/MenuNav';
import Footer from './components/Footer';

function AppTemplatePage(props) {
  console.log(props);
  return (
    <div id="app" className="app">
      <Header></Header>
      <MenuNav {...props}></MenuNav>
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route path="/home" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/vision-n-mission" component={VisionAndMissionPage}/>
        <Route path="/become-a-volunteer" component={BecomeAVoluteerPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default AppTemplatePage;
