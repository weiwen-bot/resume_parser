import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
// import { getRelevantEvents } from '@fullcalendar/core'
import 'babel-polyfill'
import Modal from '../Modal'
import fetch from 'node-fetch'

const URL =
// 'https://www.googleapis.com/calendar/v3/calendars/tioveinna@gmail.com/events'
// 'https://calendar.google.com/calendar/embed?src=tioveinna%40gmail.com&ctz=Asia%2FSingapore'
//  'https://www.googleapis.com/calendar/v3/calendars/tioveinna@gmail.com/events?key=AIzaSyDNkzaJxCMPA8f9M7AzxGiFoExtqRGVvfY&date=2020-01-01'
  // 'AIzaSyDNkzaJxCMPA8f9M7AzxGiFoExtqRGVvfY'
// 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
'https://calendar-events.netlify.com/.netlify/functions/calendar-events?date=2019-04-01&maxEvents=100' 
// 'https://mystifying-mahavira-7ad7a0.netlify.com/.netlify/functions/calendar-events'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      events: [{ title: '', start: '', end: '', description: '' }]
    }
  }

  async componentDidMount() {
    fetch(URL, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        let events = json.events.map((event, i) => {
          let { id, start, end, summary, description } = event
          return {
            id: id,
            title: summary,
            start: start,
            end: end,
            description: description
          }
        })
        // eslint-disable-next-line no-console
        // console.log(events)
        this.setState({ events })
      })
      // eslint-disable-next-line no-console
      .catch(err => {
        console.log(
          'error:',
          err,
          'calendar data is probably formatted incorrectly'
        )
      })
  }
  render() {
    return (
      <>
        <FullCalendar 
          defaultView="dayGridMonth"
          defaultDate="2019-04-01"
          eventClick={this.handleEventClick}
          plugins={[dayGridPlugin, interactionPlugin]}
          events={[...this.state.events]}
          dateClick={this.handleDateClick}
        />
        <Modal active={this.state.modal} />
      </>
    )
  }
  handleEventClick = info => {
    // to-do instantiate form modal
    // eslint-disable-next-line no-console
    console.log(
      info.event.id,
      info.event.title,
      info.event.start,
      info.event.end,
      info.event.extendedProps.description
    ) // extendedProps.note)
  }
  handleDateClick = info => {
    // to-do instantiate form modal
    // eslint-disable-next-line no-console
    console.log(info.dateStr)
  }
}
/*
{[
          { title: 'event 1', date: '2019-04-01', backgroundColor: 'rgba(0,0,0,.25)', borderColor: 'orange', textColor: 'red', extendedProps: {note: 'hello'} },
          { title: 'event 2', date: '2019-04-02' },
        ]}
*/
