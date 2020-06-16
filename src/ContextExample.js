import React, { Component } from 'react';

// Overall structure:
// <MyContext.Provider value={someValue}>
//     <Family>
//         <Person>
//             <MyContext.Consumer>
//                 {(context) => (
//                     <div>{context.someValue}</div>
//                 )}
//             </MyContext.Consumer>
//         </Person>
//     </Family>
// </MyContext.Provider>

const MyContext = React.createContext(); // new context

class ContextExample extends Component {
  render() {
    return (
      <MyContext.Provider value={{age: 34, name: 'Pete', theme: 'dark'}}>
        <div>
          <p>I am the app</p>
          <Family />
        </div>
      </MyContext.Provider>
    );
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <div>
              <p>Age: {context.age}</p>
              <p>Name: {context.name}</p>
              <p>Theme: {context.theme}</p>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

export default ContextExample;
