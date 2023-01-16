import * as io from 'socket.io-client';
import { useState, useEffect } from 'react';
const socket = io.connect('http://localhost:7000');

export default function ChatScreen() {
	return (
		<div>
			<input
				placeholder='Room Number'
				className='text-black'
			/>
			<input
				placeholder='Username'
				className='text-black'
			/>
			<button className='text-white'>Join</button>
		</div>
	);
}
