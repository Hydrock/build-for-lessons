import React from 'react';
import './style.css';

const List = props => (
  <ol className='list'>
    {
        props.items.map((item, i) => {
            return (
                <li key={item.id} className='list__item'>
                    <span>{item.text}</span>
                    <button onClick={() => props.del(item.id)}>del</button>
                </li>
            )
        })
    }
  </ol>
);

export default List;