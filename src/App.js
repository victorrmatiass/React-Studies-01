import './App.css';

function Button({ label, onClick, className='button--primary'}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>{label}</button>
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
      <Button label="Sing Up" onClick={UserRegistred} className='button--primary' />
      <Button label="Sing In" onClick={UserLogged} className='button--secondary' />
    </div>
  );
}

export default App;
