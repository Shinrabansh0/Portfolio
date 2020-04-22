import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import MainRoutes from './Components/MainRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Tyler Felps' Portfolio" scroll>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Portfolio">
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <MainRoutes/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;