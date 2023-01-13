import * as io from 'socket.io-client';
import { useState, useRef, useEffect } from 'react';
const socket = io.connect('http://localhost:7000');

export default function Chat() {
	const socketClient = useRef<io.Socket>();
	const [message, setMessage] = useState('');
	const [messageReceived, setMessageReceived] = useState('');

	// let messages: any = [];
	// setSocket(io.('http://localhost:7000'));
	useEffect(() => {
		socket.on('receive_message', (message) => {
			setMessageReceived(message);
			// messages.push(message);
		});
	}, [socket]);

	const sendMessage = (e: any) => {
		e.preventDefault();
		socket.emit('send', message);
	};

	socket.on('message', (message) => {
		// console.log(message);
	});

	// socket.on('connectsocket.emit("hello", "world");', () => {
	// 	console.log(socket.id);
	// });

	return (
		<div className='text-white'>
			<p>{messageReceived}</p>
			{/* <p>{messages}</p> */}
			<form className='bg-[#414040]'>
				<input
					className='text-[#222222] border-[#00FF59] border-2 p-1 w-[20vw] bg-gray-200'
					placeholder='msg'
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					onClick={sendMessage}
					className='p-2'
				>
					SEND
				</button>
			</form>
		</div>
	);
}
