import MessageDisplay from "../components/chat/MessageDisplay";
import '../assets/css/chat.css'
import ChatDashboard from "../components/chat/ChatDashboard";
import { useEffect } from "react";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
export default function Chat() {
    const navigate = useNavigate()
    useEffect(() => {
        const id = Cookies.get("id")
        if (id == null || id == "") {
            navigate("/login")
        }
    }, [])
    return (
        <div className="message-page">
            <ChatDashboard />
            <MessageDisplay />
        </div>
    )
}
