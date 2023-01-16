import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
const NEW_CHAT_MESSAGE_EVENT = 'NEW_CHAT_MESSAGE_EVENT';
const SOCKET_SERVER_URL = 'http://localhost:4000';
const useChat = (roomId: any) => {
	const [messages, setMessages] = useState([]);
	const socketRef: any = useRef();
	useEffect(() => {
		socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
			query: { roomId },
		});
		socketRef.current.on('connect', () => {
			console.log(socketRef.current.id);
		});
		socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
			const incomingMessage = {
				...message,
				ownedByCurrentUser: message.senderId === socketRef.current.id,
			};
			setMessages((messages): any => [...messages, incomingMessage]);
		});
		return () => {
			socketRef.current.disconnect();
		};
	}, [roomId]);
	const sendMessage = (messageBody: any) => {
		if (!socketRef.current) return;
		socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
			body: messageBody,
			senderId: socketRef.current.id,
		});
	};
	return {
		messages,
		sendMessage,
	};
};
export default useChat;
