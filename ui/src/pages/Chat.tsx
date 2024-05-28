import MessageDisplay from "../components/chat/MessageDisplay";
import '../assets/css/chat.css'
import ChatDashboard from "../components/chat/ChatDashboard";
export default function Chat() {
    return (
        <div className="message-page">
            <ChatDashboard />
            <MessageDisplay />
        </div>
    )
}
