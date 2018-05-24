import React from 'react';
import './style.css';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const List = props => (
  <ol className='list'>
    <TransitionGroup>
        {
            props.items.map((item, i) => {
                return (
                    <CSSTransition
                        key={item.id}
                        timeout={1000}
                        classNames="fade"
                    >
                        <li key={item.id} className='list__item'>
                            <span>{item.text}</span>
                            <button onClick={() => props.del(item.id)}>del</button>
                        </li>
                    </CSSTransition>
                )
            })
        }
    </TransitionGroup>
  </ol>
);

export default List;







// clear 

// import React from 'react';
// import './style.css';

// const List = props => (
//   <ol className='list'>
//     {
//         props.items.map((item, i) => {
//             return (
//                 <li key={item.id} className='list__item'>
//                     <span>{item.text}</span>
//                     <button onClick={() => props.del(item.id)}>del</button>
//                 </li>
//             )
//         })
//     }
//   </ol>
// );

// export default List;