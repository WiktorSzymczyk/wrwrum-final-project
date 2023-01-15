import * as io from 'socket.io-client';
import { useState, useEffect } from 'react';
const socket = io.connect('http://localhost:7000');

export default function ChatScreen() {
	// const socketClient = useRef<io.Socket>();
	const [message, setMessage] = useState('');
	const [messageReceived, setMessageReceived] = useState([]);

	useEffect(() => {
		const hanndleMessage = (state: any) => {
			setMessageReceived((prevState): any => [...prevState, state]);
			console.log('messageReceived');
		};
		socket.on('receive_message', hanndleMessage);

		return () => {
			socket.off('receive_message', hanndleMessage);
		};
	}, [socket]);

	const sendMessage = () => {
		// socket.emit('send', message);
		// setMessageReceived((prevState): any => [...prevState, message]);
		if (message !== '') {
			// const messageData: any = {
			// 	// room: room,
			// 	// author: username,
			// 	message: message,
			// 	time:
			// 		new Date(Date.now()).getHours() +
			// 		':' +
			// 		new Date(Date.now()).getMinutes(),
			// };

			socket.emit('send', message);
			setMessageReceived((list): any => [...list, message]);
			setMessage('');
		}
	};

	return (
		<div className='text-white flex justify-center flex-col h-[]'>
			<ol className='bg-[#222222]'>
				{messageReceived.map((e) => (
					<li>{e}</li>
				))}
			</ol>

			{/* <form
				className='bg-[#414040]'
				onSubmit={sendMessage}
			> */}
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
			{/* </form> */}
		</div>
	);
}
