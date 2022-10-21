import React from 'react'
import PDFViewer from 'mgr-pdf-viewer-react'
import {Modal} from 'react-bootstrap'
 
const bodyStyle = {
    width: '650px'
}

const buttonStyle = {
    backgroundColor: 'transparent',
    textAlign: 'center',
    // position: 'absolute',
    // right: '0',
    bottom: '0',
    fontSize: '15px'

}

function ExamplePDFViewer() {

        return (
            <div>
                <button type="button" data-toggle="modal" data-target="#exampleModalCenter" className="border border-dark px-4 py-1"  style={buttonStyle}>View Resume</button>
                {/* <div className="p-5"> */}
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                        <div class="modal-content" style={bodyStyle}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle" className="text-dark ml-1">Candidate's Resume</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <PDFViewer className="col-md-6" document={{
                                    url: 'http://localhost:8080/consent_forms.pdf'
                                }}/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div> 
                </div>
            // </div>
    )}
export default ExamplePDFViewer;