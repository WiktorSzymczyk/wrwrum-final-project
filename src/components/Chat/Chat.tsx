import * as io from 'socket.io-client';
import { useState, useEffect } from 'react';
import '../../assets/styles/share/mediumButton.scss';
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
export default function Chat(props: {
	fakeUser: string;
	colorMe: any;
	colorOther: any;
}) {
	const fakeUser = props.fakeUser;
	const colorMe = props.colorMe;
	const colorOther = props.colorOther;
	// const socketClient = useRef<io.Socket>();
	// const [fakeUser, setFakeUser] = useState(props.fakeUser);
	const [message, setMessage] = useState('');
	const [messageReceived, setMessageReceived] = useState([]);
	// const [username, setUsername] = useState('you');
	// const [usernameUser, setUsernameUser] = useState(false);

	useEffect(() => {
		const mess = messageReceived.length - 1;
		console.log(mess);
	}, [messageReceived]);

	useEffect(() => {
		// const user: any = window.prompt('Username: ');
		// setUsername(user);
		// setUsernameUser(true);
		const handleMessage = (message: any) => {
			setMessageReceived((prevState): any => [...prevState, message]);
			console.log('messageReceived');
		};
		socket.on('receive_message', handleMessage);

		return () => {
			socket.off('receive_message', handleMessage);
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
				{
					message,
					userName: fakeUser,
					timestamp: generateTime,
					colorMe: colorMe,
					colorOther: colorOther,
				},
			]);
			setMessage('');
		}
	};

	// const styles = {
	// 	bg: { backgroundColor: color },
	// };

	return (
		<div className='h-full w-[50vw] bg-[#222222]'>
			{/* <input
				className='text-[#222222] p-2 rounded-sm'
				value={fakeUser}
				placeholder='username'
				onChange={(e) => setFakeUser(e.target.value)}
			/> */}
			<ol className='grid grid-cols-1 content-center overflow-y-scroll min-h-[60%] max-h-[60%]'>
				{messageReceived.map(
					(e: any) =>
						e.userName === fakeUser ? (
							<div className='text-white'>
								<li className='float-left flex space-x-2 p-2'>
									<p style={{ color: colorMe }}>{e.userName}: </p>
									<p>{e.message}</p>
									<p>
										{' '}
										<small>{e.timestamp}</small>
									</p>
								</li>
							</div>
						) : (
							<div className='text-white'>
								<li className='float-left flex space-x-2 p-2'>
									<p style={{ color: colorOther }}>{e.userName}: </p>
									<p>{e.message}</p>
									<p>
										{' '}
										<small>{e.timestamp}</small>
									</p>
								</li>
							</div>
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
				className='mt-2'
				onSubmit={sendMessage}
			>
				<input
					className='text-[#222222] p-[5px] mr-5 w-[20vw] medium-button'
					placeholder='msg'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className='bg-gray-200 medium-button absolute fixed sticky bottom-0'>
					SEND
				</button>
			</form>
		</div>
	);
}
