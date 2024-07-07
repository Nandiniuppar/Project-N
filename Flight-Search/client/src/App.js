import './App.css';
import TopNav from './component/TopNav';
import Approutes from './Approutes';


function App() {
  return (
    <div className="App">
      <header>
      <div style = {{minHeight: "10vh", width :'100%', backgroundcolor: 'rgb(25 118 210 / 55%)'}}></div>
      <TopNav/>
      </header>
      <main>
        <div className='main-body'>
        <h1>Welcome to my Booking Site!</h1>
      
          <Approutes/>

        </div>
      </main>
     <footer>
     <div style = {{minHeight: "10vh", width : '100%', backgroundColor : 'rgb(25 118 210 / 55%)'}}></div>
     </footer>
    </div>
  );
}

export default App;
