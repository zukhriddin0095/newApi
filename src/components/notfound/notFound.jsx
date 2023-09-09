
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    return (
      <div>
        <Link to="/" >NotFound</Link>
      </div>
    );
  }
}

export default NotFound