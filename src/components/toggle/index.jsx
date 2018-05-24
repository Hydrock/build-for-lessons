// import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import './style.scss';

// export default class Toggle extends Component {
//   constructor() {
//     super();
//     this.state = {
//         show: false
//     };
//   }

//   toggleElem = () => {
//       this.setState({show: !this.state.show})
//   }
  
//   render() {
//     return (
//       <div className='app'>
//         <button onClick={this.toggleElem}>toggle</button>
//         <CSSTransition
//           in={this.state.show}
//           timeout={1000}
//           classNames="animate"
//           unmountOnExit={true}
//         >
//           <div className={`toggle-elem`}>
//               animated element
//           </div>
//         </CSSTransition>
//       </div>
//     );
//   }
// }

// Transition

// import React, { Component } from 'react';
// import Transition from 'react-transition-group/Transition';
// import './style.scss';

// export default class Toggle extends Component {
//   constructor() {
//     super();
//     this.state = {
//         show: true
//     };
//   }

//   toggleElem = () => {
//       this.setState({show: !this.state.show})
//   }
  
//   render() {
//     return (
//       <div className='app'>
//         <button onClick={this.toggleElem}>toggle</button>
//         <Transition
//           in={this.state.show}
//           timeout={1000}
//           // mountOnEnter={true}
//           // unmountOnExit={true}
//           appear={true}
//           // onExited={() => {}}
//         >
//           {
//             (transitionState) => {
//               return (
//                   <div className={`toggle-elem toggle-elem_${transitionState}`}>
//                     {transitionState}
//                   </div>
//               )
//             }
//           }
//         </Transition>
//       </div>
//     );
//   }
// }

// Clear

// import React, { Component } from 'react';
// import './style.css';

// export default class Toggle extends Component {
//   constructor() {
//     super();
//     this.state = {
//         show: true
//     };
//   }

//   toggleElem = () => {
//       this.setState({show: !this.state.show})
//   }
  
//   render() {
//     return (
//       <div className='app'>
//           <button onClick={this.toggleElem}>toggle</button>
//           { this.state.show ? <div className='toggle-elem'></div> : null}
//       </div>
//     );
//   }
// }
