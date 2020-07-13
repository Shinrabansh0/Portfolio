import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './ResumeComponents/Education';
import Experience from './ResumeComponents/Experience';
import Skills from './ResumeComponents/Skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C5603AQE_CJozvDZGKQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=f2SeNb5Cs_coG83ZMolKNtDR_NJfBrq7bd4zbNFAE0Y"
                                alt="avatar"
                                style={{height: "200px"}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>
                            Tyler Felps
                        </h2>
                        <h4 style={{color: "grey"}}>
                            Programmer
                        </h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id odio et nisi tincidunt lacinia eu vitae sapien. In a euismod ipsum, sit amet gravida dui. Nunc dolor dolor, pretium non euismod vel, aliquet non dui. Nunc vestibulum odio quis consectetur aliquet. Curabitur dignissim nulla ut suscipit posuere. Donec consectetur nisl et blandit congue. Nullam scelerisque ex ut pharetra maximus. Pellentesque porttitor malesuada libero, sit amet fermentum sem. Nunc ac tellus blandit, bibendum nisi sed, commodo tellus. Nullam sed dapibus enim. Mauris luctus lacus quis dolor pretium, eget elementum leo blandit.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>
                            325 N Washington St. Apt 3
                            <br/>
                            Moscow, Idaho 83843
                        </p>
                        <h5>Phone</h5>
                        <p>(360) 720-1177</p>
                        <h5>Email</h5>
                        <p>felpskid2@yahoo.com</p>
                        <h5>Web</h5>
                        <p>The address for this page</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear = {2013}
                            endYear = {2017}
                            schoolName ="College of Southern Idaho"
                            schoolDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel euismod lectus. Integer mollis at sapien vel posuere. Nam in vestibulum risus. Nunc blandit finibus arcu sed lacinia. Ut sit amet dapibus nisi, vel egestas mi. Vivamus sit amet massa id lorem hendrerit dignissim vel vel ligula. Quisque et sagittis tellus. Duis fringilla tortor dui, non efficitur diam dignissim"
                        />
                        <Education
                            startYear = {2017}
                            endYear = {2020}
                            schoolName ="University of Idaho"
                            schoolDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel euismod lectus. Integer mollis at sapien vel posuere. Nam in vestibulum risus. Nunc blandit finibus arcu sed lacinia. Ut sit amet dapibus nisi, vel egestas mi. Vivamus sit amet massa id lorem hendrerit dignissim vel vel ligula. Quisque et sagittis tellus. Duis fringilla tortor dui, non efficitur diam dignissim"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2> Experience </h2>
                        <Experience
                            startYear={2018}
                            endYear={2020}
                            jobTitle="Associate Consultant"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel euismod lectus. Integer mollis at sapien vel posuere"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2> Skills </h2>
                        <Skills
                            skill="Javascript"
                            progress={55}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={55}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={55}
                        />
                        <Skills
                            skill="React"
                            progress={55}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;