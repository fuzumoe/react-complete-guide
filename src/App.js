import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOUtput from "./UserOutput/UserOutput";
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
      userInput: ''
    }
  
    inputChangedHandler = ( event ) => {
      this.setState( { userInput: event.target.value } );
    }
  
    deleteCharHandler = ( index ) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userInput: updatedText});
    }
  
    render () {
      const charList = this.state.userInput.split('').map((ch, index) => {
        return <Char 
          character={ch} 
          key={index}
          clicked={() => this.deleteCharHandler(index)} />;
      });
  
      return (
        <div className="App">
       
          <input
            type="text"
            onChange={this.inputChangedHandler}
            value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}
        </div>
      );
    }
  }
  
// class App extends Component {
//     state = {
//       persons: [
//         { id: "asdfasdfas", name: 'Max', age: 28 },
//         { id: "asd232233fasdfas", name: 'Manu', age: 29 },
//         { id: "asdfas222dfas", name: 'Stephanie', age: 26 }
//       ],
//       otherState: 'some other value',
//       showPersons: false
//     }
  
//     // switchNameHandler = ( newName ) => {
//     //   // console.log('Was clicked!');
//     //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     //   this.setState( {
//     //     persons: [
//     //       { name: newName, age: 28 },
//     //       { name: 'Manu', age: 29 },
//     //       { name: 'Stephanie', age: 27 }
//     //     ]
//     //   } )
//     // }
  
//     deletePersonHandler = (event, personIndex) =>{
//         // const persons = this.state.persons.slice();
//         const persons = [...this.state.persons]
//         persons.splice(personIndex,1);
//         this.setState({persons:persons});
//     }
//     nameChangedHandler = ( event , id) => {

//       const personIndex = this.state.persons.findIndex(person => {
//          return person.id === id;
//       })

//       const person = {...this.state.persons[personIndex]}

//     //   const person = Object.assign({}, this.state.persons[personIndex])
//       person.name = event.target.value;

//       const persons =  [...this.state.persons]
//       persons[personIndex] = person
//       this.setState({persons: persons})
//     }
  
//     togglePersonsHandler = () => {
//       const doesShow = this.state.showPersons;
//       this.setState( { showPersons: !doesShow } );
//     }
  
//     render () {
//       const style = {
//         backgroundColor: 'white',
//         font: 'inherit',
//         border: '1px solid blue',
//         padding: '8px',
//         cursor: 'pointer'
//       };

//       let persons =  this.state.showPersons === false ? null: (
//         <div>

//             { this.state.persons.map((person, index) =>{
//                 return  <Person 
//                             key={person.id} 
//                             click={(event) => this.deletePersonHandler()} 
//                             name={person.name} 
//                             age={person.age} 
//                             changed={(event) => this.nameChangedHandler(event, person.id)}
//                         />
//             })}
//           {/* <Person
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age} />
//           <Person
//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}
//             click={this.switchNameHandler.bind( this, 'Max!' )}
//             changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
//           <Person
//             name={this.state.persons[2].name}
//             age={this.state.persons[2].age} /> */}
//         </div>
//       );
  
//     //   if ( this.state.showPersons ) {
//     //     persons = (
//     //       <div>
    
//     // { this.state.persons.map(person =>{
//     //     return  <Person name={person.name} age={person.age} />
//     // })}
//     // //         <Person
//     // //           name={this.state.persons[0].name}
//     // //           age={this.state.persons[0].age} />
//     // //         <Person
//     // //           name={this.state.persons[1].name}
//     // //           age={this.state.persons[1].age}
//     // //           click={this.switchNameHandler.bind( this, 'Max!' )}
//     // //           changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
//     // //         <Person
//     // //           name={this.state.persons[2].name}
//     // //           age={this.state.persons[2].age} />
//     // //       </div>
//     //     );
//     //   }
  
//       return (
//         <div className="App">
//           <h1>Hi, I'm a React App</h1>
//           <p>This is really working!</p>
//           <button
//             style={style}
//             onClick={this.togglePersonsHandler}>Toggle Persons</button>
//           {persons}
//         </div>
//       );
//       // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//     }
//   }
  
  
// const App = props => {

//     const [usernameState, setUsernameState] = useState({
//       userName: 'SuperMax'
//     });

//   const usernameChangeHandler = (event) => {
//     setUsernameState({
//       userName: event.target.value
//     }
//     )
//    }

//   return (
//     <div className="App">
//       <UserInput changed={usernameChangeHandler}></UserInput>
//       <UserOUtput userName={usernameState.userName} ></UserOUtput>
//       <UserOUtput userName={usernameState.userName}></UserOUtput>
//       <UserOUtput userName="Ana"></UserOUtput>
//     </div>
//   )
// }
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

// const App = props =>{

//   const [personState, setPersonsState] = useState({
//     persons: [
//       {name: "Max", age: "28" },
//       {name: "Manu", age: "29" },
//       {name: "Stephanie", age: "26" }
//     ],
//     otherState: ''
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: "Adam", age: "28" },
//         {name: "Juliani", age: "29" },
//         {name: "Stephanie", age: "26" }
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