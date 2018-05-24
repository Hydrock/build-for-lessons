import React, { Component } from 'react';
import './style.css';

export default class Toggle extends Component {
    constructor() {
      super();
      this.state = {
          show: true
      };
    }
  
    toggleElem = () => {
        this.setState({show: !this.state.show})
    }
   
    render() {
      return (
        <div className='app'>
            <button onClick={this.toggleElem}>toggle</button>
            { this.state.show ? <div className='toggle-elem'></div> : null}
        </div>
      );
    }
  }
