import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style ={{width: '100', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                       <img src = "https://media-exp1.licdn.com/dms/image/C5603AQE_CJozvDZGKQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=f2SeNb5Cs_coG83ZMolKNtDR_NJfBrq7bd4zbNFAE0Y"
                            alt = "Avatar"
                            className = "avatar-img"
                       />
                       <div className = "banner-text">
                        <h1>
                            Full Stack Web Developer
                        </h1>
                        <p>
                            Javascript | React | CSS | HTML | SQL | NodeJS | Git
                        </p>
                        <div className ="social-links">
                            <a href="http://google.com" rel = "noopener noreferrer" target = "_blank">
                            <i className="fab fa-linkedin-in"></i>
                            </a>

                            <a href="http://google.com" rel = "noopener noreferrer" target = "_blank">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                       </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;