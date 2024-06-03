import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import LoginForm from './LoginForm';

function App() {
  return (
      <div className="App">
          <Navigation />
          <div className="main-content">
              <LoginForm />
          </div>
      </div>
  );
}


export default App;
