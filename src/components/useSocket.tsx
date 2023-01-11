import { useEffect, useRef } from 'react';
import io, { ManagerOptions, SocketOptions, Socket } from 'socket.io-client';

export const useSocket = (
	uri: string,
	opts?: Partial<ManagerOptions & SocketOptions> | undefined
) => {
	const { current: socket } = useRef(io(uri, opts));

	useEffect(() => {
		return () => {
			if (socket) socket.close();
		};
	}, [socket]);

	return socket;
};
