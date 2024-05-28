export default function MessageDisplay() {
    return (
        <>
            <div>
                <p>Accuracy</p>
            </div>
            <div className="chat-label">
                <h1>Olá,Jeremias</h1>
                <div className="user">
                    <div>
                        <p>User</p>
                        <p>Message</p>
                    </div>
                </div>
                <div className="system">
                    <div>
                        <p>System</p>
                        <p>Message</p>
                    </div>
                </div>
                <div className="form-chat">
                    <form action="">
                        <input type="text" placeholder="Enter your message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>

        </>
    )
}
