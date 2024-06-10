import logo from './logo.svg';
import myImage from './images/codmpic.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid bg-dark text-white py-5">
        <div className="container text-center">
          <img src={myImage} className="App-logo my-4" alt="logo" /> {}
          <h1 className="display-4">Call of Duty Mobile</h1>
          <p className="lead">
           Selamat datang di hasil editan react saya.
          </p>
          <div className="row my-5">
            <div className="col-md-4">
              <div className="card bg-primary text-white mb-3">
                <div className="card-body">
                  <h5 className="card-title">Apa itu Call of Duty Mobile?</h5>
                  <p className="card-text">Call of Duty Mobile merupakan sebuah aplikasi game yang dapat diunduh di handphone, baik itu Android atau IOS.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-success text-white mb-3">
                <div className="card-body">
                  <h5 className="card-title">Dimana saya bisa mengunduh game tersebut?</h5>
                  <p className="card-text">Call of Duty Mobile tersedia di Playstore dan juga Appstore dan Anda dapat mengunduhnya secara gratis!</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-warning text-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Apa saja mode yang dapat dimainkan?</h5>
                  <p className="card-text">Terdapat beberapa jenis mode game yang dapat dimainkan, seperti Multiplayer, Battleground dan Zombie!</p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="App-link btn btn-light btn-lg"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <footer className="my-3">
            <small>&copy; 2024 Andra Ahmad Fadhil 20220140058.</small>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
