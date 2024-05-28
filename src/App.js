
import './App.scss';
import './assets/Styles/classes.scss';
import './assets/Styles/color.scss';
import {BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import PopularMovie from './components/Popularmovie/PopularMovie';
import NotFound from './components/NotFound/NotFound';
import Naving from './components/Naving/Naving';
import MovieDetails from './components/MovieDetails/MovieDetails';
import TestDetails from './components/Test/TestDetails';
import Store from './store/store/Store';
import Favourite from './components/Favourite/Favourite';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={Store}>
    <Naving/>
      <Routes>
          <Route path="/movielist" element={<PopularMovie/>}/>
          <Route path="/movielist/:id" element={<MovieDetails/>}/>
          <Route path="/test" element={<TestDetails/>}/>
          <Route path="/fav" element={<Favourite/>} />
          <Route path="*" element={<NotFound/>}/> 
       </Routes>
       </Provider>
    </BrowserRouter>
    
      <Outlet/> 
    
    </>
  );
}