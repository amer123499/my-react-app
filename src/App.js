import './App.css';

function App() {
  const handleClick = () => {
    window.alert('Hello! Thanks for clicking the button.');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p className="welcome-message">
          This is a simple homepage built with Create React App. Click the
          button below to see an alert.
        </p>
        <button type="button" className="alert-button" onClick={handleClick}>
          Show Alert
        </button>
      </header>
    </div>
  );
}

export default App;
