
import { RouterProvider,createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/About'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github,{githubInfoLoader} from './components/Github/Github'
import './App.css'
function App() {

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },{
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   },
// ]);

//nd way

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:id' element={<User/>} />
      <Route path='/github' loader={githubInfoLoader} element={<Github/>}/>
    </Route>
  )
) 
  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
