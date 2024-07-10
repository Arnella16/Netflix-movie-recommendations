// App.js
import React from 'react';
import Home from './components/home';
import Search from './components/search';
import Login from './components/login';
import Register from './components/register';
import { EmailProvider } from './components/email-context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main-page';
import MovieDetail from './components/MovieDetail';

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path:'/main',
    element:<Main></Main>
  },
  {
    path:'/detail',
    element:<MovieDetail></MovieDetail>
  }
]);

const App = () => {
  return (
    <EmailProvider>
      <RouterProvider router={browserRouter} />
    </EmailProvider>
  );
}

export default App;
