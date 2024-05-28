import { useEffect, useState } from "react"
import { useAxios } from "../../hooks/useAxios"
import Cookies from 'js-cookie'

export default function MessageDisplay() {
    const [name, setName] = useState("")
    async function message() {
        const id = Cookies.get("id")
        await useAxios.get(`/username/${id}`)
            .then((data) => data.data)
            .then((data) => setName(data.username))
    }
    useEffect(() => {
        message()
    }, [])
    return (
        <>
            <div>
                <p>Accuracy</p>
            </div>
            <div className="chat-label">
                <h1>Olá, {name}</h1>
                <div className="user">
                    <div>
                        <p>You</p>
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
