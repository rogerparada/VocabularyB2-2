import './assets/css/App.css';
import './assets/css/index.css';
import FooterComponent from './components/FooterComponent';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
     
      <div className='container mx-auto text-left'>
      <section className="App-content">
       <Router></Router>
      </section>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
