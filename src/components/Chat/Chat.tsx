import * as io from 'socket.io-client';
import { useState, useRef, useEffect } from 'react';
const socket = io.connect('http://localhost:7000');

export default function Chat() {
	const socketClient = useRef<io.Socket>();
	const [message, setMessage] = useState('');

	// setSocket(io.('http://localhost:7000'));
	useEffect(() => {
		socket.on('receive_message', (message) => {
			alert(message);
		});
	}, [socket]);

	const sendMessage = (e: any) => {
		e.preventDefault();
		socket.emit('send', message);
	};

	socket.on('message', (message) => {
		console.log(message); // world
	});

	// socket.on('connectsocket.emit("hello", "world");', () => {
	// 	console.log(socket.id);
	// });

	return (
		<form className='text-white'>
			<input
				placeholder='msg'
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={sendMessage}>SEND</button>
			<li>
				<p></p>
			</li>
		</form>
	);
}
