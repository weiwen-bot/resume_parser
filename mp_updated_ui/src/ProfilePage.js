import React from 'react';
import ProfilePic from '../src/Images/profilepic.png';
import {Form, Col, Button} from 'react-bootstrap';
 
export default class ProfilePage extends React.Component {
 
   render(){
 
       return(
           <div>
 
               <div className="header col-md-10">Profile</div>
               <hr/>
 
                <div className="Profile col-12 row">
 
                   <img src={ProfilePic} class="col-12 col-sm-6 col-md-5 col-lg-6 col-xl-2 py-5" width="10%" height="10%"/>
 
                   <Form className="col-md-6 col-lg-4 col-xl-8">
 
                       <Form.Label className="font-weight-bold tag">General Information</Form.Label>
 
                       <Form.Group className= "row" controlId="exampleForm.ControlSelect1">
                           <Form.Label column xl={2} lg={12} >
                               Salutation
                           </Form.Label>
 
                           <Col xl={4} lg={12} >
                               <Form.Control as="select">
                                   <option>Miss</option>
                                   <option>Ms</option>
                                   <option>Mrs</option>
                                   <option>Mdm</option>
                                   <option>Mr</option>
                                   <option>Prof.</option>
                                   <option>Dr.</option>
                               </Form.Control>
                           </Col>
 
                       </Form.Group>
 
                       <Form.Group className= "row" controlId="formHorizontalEmail">
                           <Form.Label column xl={2} lg={12}>
                               First Name
                           </Form.Label>
 
                           <Col xl={4} lg={12} >
                           <Form.Control type="text" placeholder="First Name" />
                           </Col>
 
                           <Form.Label column xl={2} lg={12} >
                               Last Name
                           </Form.Label>
 
                           <Col xl={4} lg={12} >
                           <Form.Control type="text" placeholder="Last Name" />
                           </Col>
 
                       </Form.Group>
 
                       <Form.Group className= "row" controlId="formHorizontalPassword">
                           <Form.Label column xl={2} lg={12} >
                               Position
                           </Form.Label>
 
                           <Col xl={4} lg={12} >
                               <Form.Control as="select">
                                   <option>Software Engineer</option>
                                   <option>Data Engineer</option>
                                   <option>Data Scientist</option>
                                   <option>Human Resource</option>
                                   <option>IT Sprecialist</option>
                               </Form.Control>
                           </Col>
                       </Form.Group>
 
                       <Form.Label className="font-weight-bold tag">Contact Information</Form.Label>
 
                       <Form.Group className= "row" controlId="formHorizontalEmail">
                           <Form.Label column xl={2} lg={4} >
                               Email
                           </Form.Label>
 
                           <Col xl={4} lg={12} >
                           <Form.Control type="email" placeholder="Email" />
                           </Col>
 
                           <Form.Label column xl={2} lg={12} >
                               Mobile No.
                           </Form.Label>
 
                           <Col xl={4} lg={12} >
                           <Form.Control type="email" placeholder="Mobile Phone" />
                           </Col>
 
                       </Form.Group>
 
                       <Form.Group className= "row">
                           <Col>
                               <Button type="submit" className="border border-dark buttonSave col-md-3 col-sm-3 col-3">Update</Button>
                               <Button type="submit" className="border border-danger buttonCancel col-md-3 col-sm-3 col-3">Cancel</Button>
                           </Col>
                       </Form.Group>
                   </Form>
                </div>
 
                <div className="emailCalendarTag">Calendar Integration</div>
 
                <Form className="emailCalendarSection">
                    <Form.Group className= "row emailCalendarRow" controlId="formHorizontalEmail">
                        <Form.Label column xl={2} lg={4}>
                            Google Calendar
                        </Form.Label>

                        <Form.Label column xl={7} lg={12} className="calendarMutedText">
                            {/* <Form.Control type="email" placeholder="Email" /> */}
                            See your teams availability while scheduling meetings and interviews
                        </Form.Label>

                        <Col xl={3} lg={12} className="mt-1">
                            <Button type="submit" className="border border-dark mr-4" style={{width:'100px'}}>Enable</Button>
                            <Button type="submit" className="border border-danger" style={{width:'100px'}}>Disable</Button>
                        </Col>

                    </Form.Group>
                </Form>

                <Form className="emailCalendarSection">
                    <Form.Group className= "row emailCalendarRow" controlId="formHorizontalEmail">
                        <Form.Label column xl={2} lg={4} >
                            Google Calendar
                        </Form.Label>

                        <Form.Label column xl={7} lg={12} className="calendarMutedText">
                            {/* <Form.Control type="email" placeholder="Email" /> */}
                            See your teams availability while scheduling meetings and interviews
                        </Form.Label>

                        <Col xl={3} lg={12} className="mt-1">
                            <Button type="submit" className="border border-dark mr-4" style={{width:'100px'}}>Enable</Button>
                            <Button type="submit" className="border border-danger" style={{width:'100px'}}>Disable</Button>
                        </Col>

                    </Form.Group>
                </Form>
                
                <div className="emailCalendarTag mt-5">Email Integration</div>

                <Form className="emailCalendarSection">
                    <Form.Group className= "row emailCalendarRow" controlId="formHorizontalEmail">
                        <Form.Label column xl={2} lg={4} >
                            Google Calendar
                        </Form.Label>

                        <Form.Label column xl={7} lg={12} className="calendarMutedText">
                            {/* <Form.Control type="email" placeholder="Email" /> */}
                            Link your email to receive notification
                        </Form.Label>

                        <Col xl={3} lg={12} className="mt-1">
                            <Button type="submit" className="border border-dark mr-4" style={{width:'100px'}}>Enable</Button>
                            <Button type="submit" className="border border-danger" style={{width:'100px'}}>Disable</Button>
                        </Col>

                    </Form.Group>
                </Form>

                <Form className="emailCalendarSection mb-5">
                    <Form.Group className= "row emailCalendarRow" controlId="formHorizontalEmail">
                        <Form.Label column xl={2} lg={4} >
                            Google Calendar
                        </Form.Label>

                        <Form.Label column xl={7} lg={12} className="calendarMutedText">
                            {/* <Form.Control type="email" placeholder="Email" /> */}
                            Link your email to receive notification
                        </Form.Label>

                        {/* <Col xl={4} lg={12} >
                            <Form.Control type="email" placeholder="Mobile Phone" />
                        </Col> */}

                        <Col xl={3} lg={12} className="mt-1">
                            <Button type="submit" className="border border-dark mr-4" style={{width:'100px'}}>Enable</Button>
                            <Button type="submit" className="border border-danger" style={{width:'100px'}}>Disable</Button>
                        </Col>

                    </Form.Group>
                </Form>
 
           </div>       
                  
 
          
       )
   }
}
