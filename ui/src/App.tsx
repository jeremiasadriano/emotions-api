import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'
const router = createBrowserRouter([
  {
    element: <Login />,
    path: '/login',
    errorElement: 'Error loading component'
  },
  {
    element: <SignUp />,
    path: '/register'
  }, {
    element: <Chat />,
    path: '/'
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
