import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // todo build modal with form to edit/add event
    if (this.props.active) return <div>Hello Modal</div>
    return null
  }
}
