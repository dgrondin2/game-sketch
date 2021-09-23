import './styles/css/App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import CardViewer from './components/CardViewer.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <CardViewer />
      <Footer />
    </div>
  );
}

export default App;
