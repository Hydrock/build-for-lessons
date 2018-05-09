import React from 'react';

import { Transition } from 'react-transition-group';

class ExampleTransition extends React.Component {

  constructor() {
      super();
      this.state = {
        show: true,
        entered: false,
      };
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState(state => ({
              show: !state.show,
            }));
          }}
        >
          Toggle
        </button>
            <Transition
                in={show}
                timeout={{
                    enter: 1000,
                    exit: 1000,
                }}
                mountOnEnter={false}
                unmountOnExit={true}
                appear={true}

                enter={true}
                exit={true}
            >
                {/*
                
                Компонент Transition принимает дочерним элементом функцию,
                которая возвращает элемент если атрибут in == true

                Так же дочерняя функция получает параметр status
                
                */}
                {/* {state => {
                    switch (state) {
                    case 'entering':
                        return 'Entering…';
                    case 'entered':
                        return 'Entered!';
                    case 'exiting':
                        return 'Exiting…';
                    case 'exited':
                        return 'Exited!';
                    }
                }} */}

                { status => (
                    <div className={`block fade fade-${status}`}>
                        {status}
                    </div>
                )}
            </Transition>
        </div>
    );
  }
}

export default ExampleTransition;