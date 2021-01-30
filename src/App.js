import BottomNav from './components/BottomNav/BottomNav';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemLists from './components/ItemLists/ItemLists';
import Navbar from './components/Navbar/Navbar';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Carousel />
      <ItemLists />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
