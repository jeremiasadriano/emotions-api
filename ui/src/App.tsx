import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'
import LoginForm from './pages/Login'
const router = createBrowserRouter([
  {
    element: <LoginForm />,
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
