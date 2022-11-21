import { AppHeader } from './cmps/AppHeader';
import { TopNav } from './cmps/TopNav';
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from 'react-router-dom';
import './scss/global.scss';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { YourLibrary } from './pages/YourLibrary';

const router = createBrowserRouter(
    createRoutesFromElements
      (
      <Route>
      <Route path="/yonify" element={<Home/>}></Route>
       <Route path='/search' element={<Search/>}></Route>
      <Route path='/yourlibrary' element={<YourLibrary/>}></Route>
      <Route path='/yourlibrary' element={<YourLibrary/>}></Route>
      </Route>
      )
  );

function App() {
  return (
    <section className="app">
      <AppHeader></AppHeader>
        <TopNav></TopNav>
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;
