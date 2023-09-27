import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        console.log("login")
        dispatch(login({userData}));
      }else{
        console.log("logout")
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400' >
        <div className='w-full block' >
          <Header />
            <main>
              TODO: {/* <Outlet /> */}
            </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
