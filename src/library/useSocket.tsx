import { useState } from 'react';
import { useRef, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
	const socketRef: any = useRef();

	useEffect(() => {
		socketRef.current = io('your server');

		// Your server needs to emit a 'connected' event to this socket id
		socketRef.current.on('connected', () => {
			console.log('connected');
		});

		return () => socketRef.current.disconnect();
	}, []);

	const message = (payload: any) => {
		socketRef.current.emit('message', { payload });
	};

	return { message };
};

export default useSocket;
