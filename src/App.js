import './App.css';
import Header from './Components/Header/Index'
import Footer from './Components/Footer/Index'
import DataFetch from './Components/Main/DataFetch';

function App() {
  return (
    <div className="App">
      <Header />
      <DataFetch />
      <Footer />     
      
    </div>
  );
}

export default App;
