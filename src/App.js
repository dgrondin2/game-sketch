import './styles/css/App.css';
import './styles/css/theme.css';
import Header from './components/Header.js';
import Project from './components/Project.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Project />
      </main>
    </div>
  );
}

export default App;
