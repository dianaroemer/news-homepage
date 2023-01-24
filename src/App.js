import logo from './logo.svg';
import './App.scss';
import NewsHomepage from './components/NewsHomepage';

function App() {
  return (
    <main className='App'>
      <div id='page-container'>
        <div id='content-wrap'>
          <h1 className="sr-only">Interactive Rating Component</h1>

          <div>
            <NewsHomepage/>
    
            {/* And the content goes here. */}


          </div>

          <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
          Coded by <a href="https://github.com/dianaroemer">Diana Roemer</a>.
          </footer>


        </div>
      </div>
    </main>


  );
}

export default App;
