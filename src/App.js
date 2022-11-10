import { AppHeader } from './cmps/AppHeader';
import { TopNav } from './cmps/TopNav';
import { Home } from './pages/Home';
import './scss/global.scss';

function App() {
  return (
    <section className="app">
      <AppHeader className='grid-item'></AppHeader>
        <TopNav className='grid-item'></TopNav>
        <Home className='grid-item'></Home>
    </section>
  );
}

export default App;
