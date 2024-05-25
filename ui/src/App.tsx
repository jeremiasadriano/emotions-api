import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/Register/SignUp'
const router = createBrowserRouter([
  {
    element: <Login />,
    path: '/login',
    errorElement: 'Error loading component'
  },
  {
    element: <SignUp />,
    path: '/register'
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
