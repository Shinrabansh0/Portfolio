import React, { Component } from "react";
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from "react-mdl";

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0}
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className = "projects-grid">
        {/*Project 1*/}
        <Card shadow = {5} style ={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style ={{color:'#000', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>
            React Project #1
          </CardTitle>
          <CardText>
            Fill in with card text later
          </CardText>
          <CardActions border>
            <Button colored>
              GitHub
            </Button>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>
        
        {/*Project 2*/}
        <Card shadow = {5} style ={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style ={{color:'#000', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>
            React Project #2
          </CardTitle>
          <CardText>
            Fill in with card text later
          </CardText>
          <CardActions border>
            <Button colored>
              GitHub
            </Button>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>
      </div>
      )
    }else if (this.state.activeTab ===1){
      return(
        <div className = "projects-grid">
          {/*Card 1 */}
        <Card shadow = {5} style ={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style ={{color:'#000', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>
          SQL Project #1
        </CardTitle>
        <CardText>
          Fill in with card text later
        </CardText>
        <CardActions border>
          <Button colored>
            GitHub
          </Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
          <IconButton name = "share"/>
        </CardMenu>
      </Card>

      {/*Card 2 */}
      <Card shadow = {5} style ={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style ={{color:'#000', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>
          SQL Project #1
        </CardTitle>
        <CardText>
          Fill in with card text later
        </CardText>
        <CardActions border>
          <Button colored>
            GitHub
          </Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
          <IconButton name = "share"/>
        </CardMenu>
      </Card>
      </div>
      )
    }else if (this.state.activeTab ===2){
      return(
        <div className = "projects-grid">
          {/*Card 1 */}
        <Card shadow = {5} style ={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style ={{color:'#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}}>
          Javascript Project #1
        </CardTitle>
        <CardText>
          Fill in with card text later
        </CardText>
        <CardActions border>
          <Button colored>
            GitHub
          </Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
          <IconButton name = "share"/>
        </CardMenu>
      </Card>
        {/*Card 2 */}
      <Card shadow = {5} style ={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style ={{color:'#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}}>
          Javascript Project #1
        </CardTitle>
        <CardText>
          Fill in with card text later
        </CardText>
        <CardActions border>
          <Button colored>
            GitHub
          </Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
          <IconButton name = "share"/>
        </CardMenu>
      </Card>

      </div>
      )
    }
  }

  render() {
    return (
      <div className ="category-tabs">
        <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>          
          <Tab>SQL</Tab>
          <Tab>Javascript</Tab>

        </Tabs>
          <Grid>
            <Cell col = {12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>

      </div>
    );
  }
}

export default Projects;
