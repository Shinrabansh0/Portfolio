import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';


const MainRoutes = () => (
    <Switch>
        <Route exact path = "/" component = {Landing}/>
        <Route path = "/AboutMe" component={AboutMe}/>
        <Route path = "/Contact" component = {Contact}/>
        <Route path = "/Projects" component = {Projects}/>
        <Route path = "/Resume" component = {Resume}/>
    </Switch>
)

export default MainRoutes;