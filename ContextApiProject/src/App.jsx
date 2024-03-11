import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    <div className='flex  flex-col items-center'>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>    
    </div>
  )
}

export default App
