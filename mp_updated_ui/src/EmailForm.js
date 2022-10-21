import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";



export default class EmailForm extends Component {

  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'AIDA Tech', email: '', email1: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    return (
      <div>
   
        <button type="button" class="d-flex btn emailButton" data-toggle="modal" data-target="#exampleModalCenter">
          <FontAwesomeIcon icon={faEnvelope} className="iconsSize mr-1 mt-1"/>  
          <div className="pt-0 mt-0">Email</div>
        </button>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Email</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                  <form className="test-mailing EmailLayou">
                    <div>

                      
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChange1}
                        placeholder="Enter recipient's email"
                        required
                        value={this.state.email}
                        style={{ width: '100%', height: '40px' }}
                      />    
                      <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChange2}
                        placeholder="Enter cc email"
                        required
                        value={this.state.email1}
                        style={{ width: '100%', height: '40px' }}
                      />          
                      <textarea
                      id="test-mailing"
                      name="test-mailing"
                      onChange={this.handleChange}
                      placeholder="Email content here"
                      required
                      value={this.state.feedback}
                      style={{ width: '100%', height: '150px' }}
                    />
                    </div>
                    <Button type="reset" className="border border-dark btn btn--submit mt-2" onClick={this.handleSubmit} data-dismiss="modal">Send</Button> 
                  </form>
                  {/* <div>Hi</div> */}
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value })
  }
  handleChange1(event) {
    this.setState({ email: event.target.value })
  }
  handleChange2(event) {
    this.setState({ email1: event.target.value })
  }

    handleSubmit (event) {
    const templateId = 'template_rQFBbsGV';
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email, reply_cc: this.state.email1})
    event.preventDefault();
    this.clearForm();
  }

  clearForm() {
    this.setState({
      feedback: "",
      email: "",
      email1: "",
    })
  }


  sendFeedback (templateId, variables) {
    window.emailjs.send(  
      'email', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

}


