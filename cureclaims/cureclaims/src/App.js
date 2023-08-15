import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Router from './router';
function App() {
  return (
    <div className="App bg-red-50">
    <Navbar/>
   <Router/>
   <Footer/>
    </div>
  );
}

export default App;
