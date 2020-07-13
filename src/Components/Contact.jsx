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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna quam, finibus id velit in, placerat commodo sem. Morbi fermentum sem eget luctus cursus. In ultrices enim sit amet consequat commodo. Nam tempor elementum orci, in dictum metus lacinia sit amet. Curabitur ac tristique magna. Nulla facilisi. Curabitur eget lacinia nibh. Vivamus eu purus ac ligula fringilla mollis vitae eget nunc. Integer varius lorem sed rhoncus euismod. In sodales ultricies consectetur. Vivamus massa turpis, ornare quis neque id, tempor malesuada felis. Vestibulum eu massa et arcu ullamcorper volutpat ac eu nulla.
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