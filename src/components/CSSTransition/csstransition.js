import React from 'react';

import { CSSTransition } from 'react-transition-group';

class ExampleCSSTransition extends React.Component {
    constructor () {
        super();
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={7000}
                    classNames="CSSTransition"
                    unmountOnExit
                    // classNames={{
                    //     appear: 'my-appear',
                    //     appearActive: 'my-active-appear',
                    //     enter: 'my-enter',
                    //     enterActive: 'my-active-enter',
                    //     enterDone: 'my-done-enter',
                    //     exit: 'my-exit',
                    //     exitActive: 'my-active-exit',
                    //     exitDone: 'my-done-exit'
                    // }}
                >
                    <div className='CSSTransition-element'>
                        Hello world
                    </div>
                </CSSTransition>

                <button
                    onClick={() => {
                        this.setState({
                            show: !this.state.show
                        })
                    }}
                >
                    toggle element
                </button>
            </div>
        );
    }
}

export default ExampleCSSTransition;

// classNames={{
//     appear: 'my-appear',
//     appearActive: 'my-active-appear',
//     enter: 'my-enter',
//     enterActive: 'my-active-enter',
//     enterDone: 'my-done-enter',
//     exit: 'my-exit',
//     exitActive: 'my-active-exit',
//     exitDone: 'my-done-exit'
// }}