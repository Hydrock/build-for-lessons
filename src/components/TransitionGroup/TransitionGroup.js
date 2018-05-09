import React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

class ExampleTransitionGroup extends React.Component {
    constructor () {
        super();
        this.state = {
            show: false,
            items: [
                { id: 1, text: 'Buy eggs' },
                { id: 2, text: 'Pay bills' },
                { id: 3, text: 'Invite friends over' },
                { id: 4, text: 'Fix the TV' },
            ],
        }
    }

    render() {
        return (
            <div>

                <button
                    onClick={() => {
                        this.setState({
                            show: !this.state.show
                        })
                    }}
                >
                    toggle element
                </button>
                <div>
                    <TransitionGroup className="todo-list">
                        {this.state.items.map(({ id, text }) => (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames="fade"
                            >
                                <div>
                                    {text}
                                    <button
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(
                                                    item => item.id !== id
                                                ),
                                            }));
                                        }}
                                    >
                                        remove item
                                    </button>
                                </div> 
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <button
                    type="button"
                    onClick={() => {
                        const text = prompt('Enter some text');
                        if (text) {
                            this.setState(state => ({
                                items: [
                                    ...state.items,
                                    { id: Math.random(0, 1000), text },
                                ],
                            }));
                        }
                    }}
                >
                    Add Item
                </button>
            </div>
        );
    }
}

export default ExampleTransitionGroup;
