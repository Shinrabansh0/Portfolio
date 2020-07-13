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
                        My name is Tyler Felps, I'm a graduate from the University of Idaho with a major focus on Computer Science and a minor in Mathematics. I strive for success in my field and aim to continue growing my knowledge and experience in any role I take to better myself and my company. Working in a team environment is my preferred method for development to ensure every possible method has been discussed without too focused on a single solution. My career goals are stability in an employer and growth as an individual within the industry.
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
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear = {2013}
                            endYear = {2017}
                            schoolName ="College of Southern Idaho"
                            schoolDescription = "The College of Southern Idaho (CSI) is one of the fastest growing educational institutions in the State of Idaho. CSI is a public community college that helps guide students to the field they desire or to help transfer to a larger college of their choice. CSI offers associate degrees in various fields including: arts, sciences, applied sciences, and technical certifications in over 115 disciplines."
                        />
                        <Education
                            startYear = {2017}
                            endYear = {2020}
                            schoolName ="University of Idaho"
                            schoolDescription = "The University of Idaho (UoI) is one of the major public universities within the State of Idaho. Since 1889, the University of Idaho has provided motivated students with a transformative higher education experience that prepares them to solve real-world problems and achieve success in their lives and careers. One of the nation’s land-grant research universities, U of I is a noted national leader in student-centered learning and interdisciplinary research that promotes public service."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2> Experience </h2>
                        <Experience
                            startYear={2018}
                            endYear={2020}
                            jobTitle="Associate Consultant"
                            employerName="Fenway Group"
                            jobDescription="Under supervision of experienced programmers/leadership using Agile SCRUM framework, I helped to build various projects based on client wants and needs. Learned new languages/technologies in short timeframes to meet client goals and build projects per client request."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2> Skills </h2>
                        <Skills
                            skill="Javascript"
                            progress={65}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={65}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={55}
                        />
                        <Skills
                            skill="React"
                            progress={65}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;