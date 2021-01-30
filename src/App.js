import BottomNav from './components/BottomNav/BottomNav';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemLists from './components/ItemLists/ItemLists';
import Layout from './components/Layout/Layout';
import Sidecart from './components/Sidecart/Sidecart';
import Navbar from './components/Navbar/Navbar';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Carousel />
      <Layout>
        <Categories/>
        <ItemLists />
        <Sidecart />
      </Layout>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
