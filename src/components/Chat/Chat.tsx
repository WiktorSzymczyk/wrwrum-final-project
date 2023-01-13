import * as io from 'socket.io-client';
import useSocket from '../../library/useSocket';
import { useState, useRef, useEffect } from 'react';
const socket = io.connect('http://localhost:7000');
// import ChatRoomPage from './ChatRoomPage';

export default function Chat() {
	// const { message } = useSocket();
	const socketClient = useRef<io.Socket>();

	const [username, setUsername] = useState('');
	const [room, setRoom] = useState('');

	const joinRoom = () => {
		if (username !== '' && room !== '') {
			socket.emit('join_room', room);
		}
	};

	const [message, setMessage] = useState('');
	const [currentMessage, setCurrentMessage] = useState('');
	// const messagesSent: any = [];

	// const [currentMessageSent, setCurrentMessageSent] = useState(['']);
	// const [currentMessageReceived, setCurrentMessageReceived] = useState(['']);

	// setSocket(io.('http://localhost:7000'));
	useEffect(() => {
		socket.on('receive_message', (message) => {
			// setCurrentMessage(message);
		});
	}, [socket]);

	const sendMessage = (e: any) => {
		e.preventDefault();
		// socket.emit('send', message);
		// messagesSent.push(message);
	};

	socket.on('message', (message) => {
		console.log(message);
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
				<h1>{currentMessage}</h1>
				{/* <h1>{currentMessageSent}</h1> */}
				{/* {messagesSent.map((message: any) => {
					<p>{message}</p>;
				})} */}
			</li>
		</form>

		// <div>
		// 	<h1>Join a chat</h1>
		// 	<input
		// 		type='text'
		// 		placeholder='John...'
		// 		onChange={(event: any) => {
		// 			setUsername(event.target.value);
		// 		}}
		// 	/>
		// 	<input
		// 		type='text'
		// 		placeholder='Room ID...'
		// 		onChange={(event: any) => {
		// 			setRoom(event.target.value);
		// 		}}
		// 	/>
		// 	<button>Join A Room</button>

		// 	{/* <ChatRoomPage socket={socket} username={username} room={room}/> */}
		// </div>
	);
}
