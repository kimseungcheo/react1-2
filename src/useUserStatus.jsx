import { useState, useEffect } from "react";


export default function useUserStatus (userId) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }
        ServerAPI.subscribeUserStatus(userId, handleStatusChange)
        return () => {
            ServerAPI.subscribeUserStatus(userId, handleStatusChange)
        }
    })
    return isOnline;
}