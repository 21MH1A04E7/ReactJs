
import './App.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Layout'
import UseMemoHook from './hooks/UseMemoHook'
import UseCallbackHook from './hooks/UseCallbackHook'
import UseContextHook from './hooks/UseContextHook'
import UseRefHook2 from './hooks/UseRefHook2'
import UseRefHook1 from './hooks/UseRefHook1'
import UseRefHookDom from './hooks/UseRefHookDom'
function App() {
 const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<div>Home page</div>
      },
      {
        path:'/useRef3',
        element:<UseRefHookDom/>
      },
      {
        path:'/useRef2',
        element:<UseRefHook2/>
      },
      {
        path:'/useContext',
        element:<UseContextHook/>
      },
      {
        path:'/useRef1',
        element:<UseRefHook1/>
      },
      {
        path:'/usememo',
        element:<UseMemoHook/>
      },
      {
        path:'/useCallback',
        element:<UseCallbackHook/>
      },
      {
        path:'/about',
        element:<div>About page</div>
      },
      {
        path:'/services',
        element:<div>Services</div>
      },
      {
        path:'/contact',
        element:<div>Contact</div>
      },
      {
        path:'*',
        element:<div>404 Not Found</div>
      }
    ]
  }
 ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
     
  )
}

export default App
