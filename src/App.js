//package
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from './components/Navbar';

//pages
import LoginPage from './pages/loginPage';

//utils
import './utils/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <main>
          <LoginPage />
        </main>
      </div>
    </div>
  );
}

export default App;
