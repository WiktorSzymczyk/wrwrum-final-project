import * as io from 'socket.io-client';
import { useState, useEffect } from 'react';
const socket = io.connect('http://localhost:7000');

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// }

// interface Props {
// 	user: User;
// }

// export default function Chat({ user }: Props) {
export default function Chat() {
	// const socketClient = useRef<io.Socket>();
	const [fakeUser, setFakeUser] = useState('');
	const [message, setMessage] = useState('');
	const [messageReceived, setMessageReceived] = useState([]);
	// const [username, setUsername] = useState('you');
	// const [usernameUser, setUsernameUser] = useState(false);

	useEffect(() => {
		// const user: any = window.prompt('Username: ');
		// setUsername(user);
		// setUsernameUser(true);
		const hanndleMessage = (fuck: any) => {
			setMessageReceived((prevState): any => [...prevState, fuck]);
			console.log('messageReceived');
		};
		socket.on('receive_message', hanndleMessage);

		return () => {
			socket.off('receive_message', hanndleMessage);
		};
	}, [socket]);

	const sendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		const generateTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
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

			socket.emit('send', message, fakeUser, generateTime);
			setMessageReceived((list): any => [
				...list,
				{ message, userName: fakeUser, timestamp: generateTime },
			]);
			setMessage('');
		}
	};

	return (
		<div className='text-white'>
			<input
				className='text-[#222222]'
				value={fakeUser}
				onChange={(e) => setFakeUser(e.target.value)}
			/>
			<ol className='bg-[#222222] pt-2'>
				{messageReceived.map(
					(e: any) =>
						e.userName === fakeUser ? (
							<li className='bg-[#444444]'>
								{e.userName}: {e.message} <small>{e.timestamp}</small>
							</li>
						) : (
							<li className='bg-[#777777]'>
								{e.userName}: {e.message} <small>{e.timestamp}</small>
							</li>
						)
					// <p>
					// 	{usernameUser ? (
					// 		<li className='bg-[#444444]'>{fakeUser}: {e}</li>
					// 	) : (
					// 		<li className='bg-[#777777]'></li>
					// 	)}
					// </p>
				)}
			</ol>

			<form
				className='bg-[#414040]'
				onSubmit={sendMessage}
			>
				<input
					className='text-[#222222] border-[#00FF59] border-2 p-1 w-[20vw] bg-gray-200'
					placeholder='msg'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className='p-2'>SEND</button>
			</form>
		</div>
	);
}
