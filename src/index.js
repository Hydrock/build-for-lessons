var React = require('react');
var ReactDOM = require('react-dom');

// components
import ExampleTransition from './components/transition/transition.js';
import ExampleCSSTransition from './components/CSSTransition/csstransition.js';
import ExampleTransitionGroup from './components/TransitionGroup/TransitionGroup.js';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

ReactDOM.render(
    <MyComponent>
        <ExampleTransitionGroup/>
    </MyComponent>,
    document.getElementById('app')
);
