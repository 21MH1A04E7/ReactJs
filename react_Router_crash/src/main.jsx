import React from 'react';
import ReactDOM from 'react-dom';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import Home from './components/Home/home.jsx';
// import About from './components/About/About.jsx';
import './index.css';
// import Layout from './Layout.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </React.StrictMode>
);
