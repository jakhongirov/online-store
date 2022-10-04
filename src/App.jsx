import './App.scss';

import Header from './Components/header/header';
import Intro from './Components/intro/intro';
import Hurry from './Components/hurry/hurry';
import News from './Components/news/news';
import Shops from './Components/shops/shops';
import Recommended from './Components/recommended/recommended';
import Quality from './Components/quality/quality';
import Watched from './Components/watched/watched';
import Footer from './Components/footer/footer';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(false)
  const [save, setSave] = useState(0)

  return (
    <>
      <Header setMenu={setMenu} save={save} menu={menu} />
      <main className='main'>
        <Intro menu={menu} />
        <Hurry setSave={setSave} save={save} />
        <News setSave={setSave} save={save} />
        <Shops />
        <Recommended setSave={setSave} save={save} />
        <Quality />
        <Watched />
      </main>
      <Footer />
    </>
  );
}

export default App;
