import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <h2> Tyler Felps </h2>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQE_CJozvDZGKQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=f2SeNb5Cs_coG83ZMolKNtDR_NJfBrq7bd4zbNFAE0Y"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            My name is Tyler Felps, I'm a graduate from the University of Idaho with a major focus on Computer Science and a minor in Mathematics. I strive for success in my field and aim to continue growing my knowledge and experience in any role I take to better myself and my company. Working in a team environment is my preferred method for development to ensure every possible method has been discussed without too focused on a single solution. My career goals are stability in an employer and growth as an individual within the industry.
                        </p>
                    </Cell>
                    <Cell col = {6}>
                        <h2> Contact Me </h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                                        <i className= "fa fa-phone-square" aria-hidden="true"> (360) 720-1177</i>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                                        <i className= "fa fa-envelope" aria-hidden="true"> felpskid2@yahoo.com </i>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;