// import React from 'react';

// // export default class NavBar extends React.Component {
    
// //     render() {
// //         return(
// //             <div>
// //                 <div>HI</div>
// //             </div>
                
// //         )
// //     }
// // }

// export default class Schedule extends React.Component{

//     componentDidMount = () => {
//         this.getEvents();
//       }

//     getEvents(){
//     let that = this;
//     function start() {
//         gapi.client.init({
//         'apiKey': GOOGLE_API_KEY
//         }).then(function() {
//         return gapi.client.request({
//             'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
//         })
//         }).then( (response) => {
//         let events = response.result.items
//         that.setState({
//             events
//         }, ()=>{
//             console.log(that.state.events);
//         })
//         }, function(reason) {
//         console.log(reason);
//         });
//     }
//     gapi.load('client', start)
//     }
    
//     constructor(props) {
//       super(props)
//       this.state = {
//         events: []
//       }

//     }

//     render(){
        
//           {this.state.events.map(function(event){
//             return(

//               <div>{event.summary} {event.start.dateTime} - {event.end.dateTime}</div>
            
//             )
//           });
        
//     }

//   }
// }


import React from 'react'
import Calendar from './components/Calendar'
import Modal from './components/Modal'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft)
library.add(faChevronRight)
export default function Schedule() {
  return (
    <div
      style={{
        height: '80vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div style={{ width: 650 }} className="mt-5 pt-3">
        <Calendar>
          <Modal />
        </Calendar>
      </div>
    </div>
  )
}


