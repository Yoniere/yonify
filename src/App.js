import { AppHeader } from './cmps/AppHeader';
import { TopNav } from './cmps/TopNav';
import { Home } from './pages/Home';
import './scss/global.scss';

function App() {
  return (
    <section className="app">
      <AppHeader className='grid-item grid-item-1'></AppHeader>
        <TopNav className='grid-item grid-item-2'></TopNav>
        <Home className='grid-item grid-item-3'></Home>
    </section>

  );
}

export default App;
