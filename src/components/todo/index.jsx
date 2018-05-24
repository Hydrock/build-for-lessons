import React, { Component } from 'react';
import List from 'Components/list/';

import './style.css';

export default class ToDo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }
  
    onChange = (event) => {
      this.setState({ term: event.target.value });
    }

    deliteItem = (elementId) => {
        // debugger
        let newArray = [].concat(this.state.items);
        newArray.forEach((element, i) => {
            if (element.id == elementId) {
                newArray.splice(i, 1);
            }
        })

        this.setState({
            term: '',
            items: newArray
        });
    }
  
    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, { id: Math.random(), text: this.state.term}]
      });
    }
  
    render() {
      return (
        <div className='app'>
          <h1>ToDo List</h1>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <List items={this.state.items} del={this.deliteItem}/>
        </div>
      );
    }
  }


// Clear

// import React, { Component } from 'react';
// import List from 'Components/list/';

// import './style.css';

// export default class ToDo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: '',
//       items: []
//     };
//   }

//   onChange = (event) => {
//     this.setState({ term: event.target.value });
//   }

//   deliteItem = (elementId) => {
//       // debugger
//       let newArray = [].concat(this.state.items);
//       newArray.forEach((element, i) => {
//           if (element.id == elementId) {
//               newArray.splice(i, 1);
//           }
//       })

//       this.setState({
//           term: '',
//           items: newArray
//       });
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       term: '',
//       items: [...this.state.items, { id: Math.random(), text: this.state.term}]
//     });
//   }

//   render() {
//     return (
//       <div className='app'>
//         <h1>ToDo List</h1>
//         <form className="App" onSubmit={this.onSubmit}>
//           <input value={this.state.term} onChange={this.onChange} />
//           <button>Submit</button>
//         </form>
//         <List items={this.state.items} del={this.deliteItem}/>
//       </div>
//     );
//   }
// }
