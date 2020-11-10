import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput'
import UserOUtput from './UserOutput/UserOutput'


const App = props => {

    const [usernameState, setUsernameState] = useState({
      userName: 'SuperMax'
    });

  const usernameChangeHandler = (event) => {
    setUsernameState({
      userName: event.target.value
    }
    )
   }

  return (
    <div className="App">
      <UserInput changed={usernameChangeHandler}></UserInput>
      <UserOUtput userName={usernameState.userName} ></UserOUtput>
      <UserOUtput userName={usernameState.userName}></UserOUtput>
      <UserOUtput userName="Ana"></UserOUtput>
    </div>
  )
}
// class App extends Component {
//   state = {
//     userName: 'SuperMax'
//   }

//   usernameChangeHandler = (event) => {
//     this.setState({
//       userName: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <UserInput changed={this.usernameChangeHandler}></UserInput>
//         <UserOUtput userName={this.state.userName}></UserOUtput>
//         <UserOUtput userName={this.state.userName}></UserOUtput>
//         <UserOUtput userName="Ana"></UserOUtput>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = (newName) => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     this.setState( {
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     } )
//   }

//   nameChangedHandler = (event) => {
//     this.setState( {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: event.target.value, age: 29 },
//         { name: 'Stephanie', age: 26 }
//       ]
//     } )
//   }

//   render () {
//     const style = {
//       backGroundColor: "white",
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px'
//     }
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button
//          style={style}
//          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
//         <Person 
//           name={this.state.persons[0].name} 
//           age={this.state.persons[0].age} />
//         <Person 
//           name={this.state.persons[1].name} 
//           age={this.state.persons[1].age}
//           click={this.switchNameHandler.bind(this, 'Max!')}
//           changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
//         <Person 
//           name={this.state.persons[2].name} 
//           age={this.state.persons[2].age} />
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }


// const App = props =>{

//   const [personState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: "28" },
//       { name: "Manu", age: "29" },
//       { name: "Stephanie", age: "26" }
//     ],
//     otherState: ''
//   });

//   const switchNameHandler = () => { 
//     setPersonsState({
//       persons: [
//         { name: "Adam", age: "28" },
//         { name: "Juliani", age: "29" },
//         { name: "Stephanie", age: "26" }
//       ]
//     }
//     )
//   }
//     return (
//       <div className="App">
//         <h1>Hi, I am React App</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
//     );
//     //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I \'am a React App!!!!'))


// }




export default App;
