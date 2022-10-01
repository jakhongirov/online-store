import './App.scss';

import Header from './Components/header/header';
import Hurry from './Components/hurry/hurry';
import News from './Components/news/news';
import Recommended from './Components/recommended/recommended';
import Footer from './Components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Hurry />
        <News />
        <Recommended />
      </main>
      <Footer />
    </>
  );
}

export default App;
