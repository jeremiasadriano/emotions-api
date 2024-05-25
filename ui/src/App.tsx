import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
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
