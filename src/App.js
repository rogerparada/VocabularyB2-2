import './assets/css/App.css';
import FooterComponent from './components/FooterComponent';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <section className="App-content">
       <Router></Router>
      </section>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
