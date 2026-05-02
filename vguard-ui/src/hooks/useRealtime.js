import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function useRealtime() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("event", (data) => {
      setEvents(prev => [data, ...prev].slice(0, 20));
    });

    return () => socket.disconnect();
  }, []);

  return events;
}