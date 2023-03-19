import './App.css';

function Button(props) {
  return (
    <button onClick={props.onClick}>{props.label}</button>
  )
}

function App() {
  function UserRegistred() {
    console.log("User Registred")
  }

  function UserLogged() {
    console.log("User Logged")
  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button label="Sing Up" onClick={UserRegistred} />
      <Button label="Sing In" onClick={UserLogged} />
    </div>
  );
}

export default App;
