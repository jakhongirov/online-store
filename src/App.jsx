import './App.scss';

import Header from './Components/header/header';
import Hurry from './Components/hurry/hurry';
import Footer from './Components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Hurry />
      </main>
      <Footer />
    </>
  );
}

export default App;
