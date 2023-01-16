import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
	const socket: any = useRef();

	useEffect(() => {
		socket.current = io('http://localhost:7000');

		socket.current.on('connected', () => {
			console.log('connected');
		});
		return () => socket.current.disconnect();
	}, []);

	const message = (payload: any) => {
		socket.current.emit('message', { payload });
	};

	return { message };
};

export default useSocket;
