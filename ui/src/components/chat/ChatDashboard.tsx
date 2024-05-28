import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function ChatDashboard() {
    const navigate = useNavigate()
    function logout() {
        Cookies.remove("id")
        navigate("/login")
    }
    return (
        <>
            <div className="dash">
                <div>
                    <h1>Classifição</h1>
                    <h1>Regressão</h1>
                </div>
                <div className="dash-btn">
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    )
}
