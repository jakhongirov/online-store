import './App.scss';

import Header from './Components/header/header';
import BigNavbar from './Components/big-navbar/big-navbar';
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
  const [categories, setCategories] = useState(false)

  // console.log(categories);

  return (
    <>
      <Header setMenu={setMenu} save={save} menu={menu} setCategories={setCategories}/>
      <main className='main'>
        <BigNavbar categories={categories}/>
        <Intro menu={menu} categorie={categories} setCategories={setCategories} />
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
