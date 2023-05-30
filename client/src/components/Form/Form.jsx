import React, { useEffect, useState } from 'react';
import { StyledContainer, StyledInput } from './styles';
import { v4 } from 'uuid';
import socket from '../../socket/socket';

const Form = () => {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		socket.on('test', data => {
			console.log(data);
			setMessages(prevMessages => [...prevMessages, data]);
		});
		socket.on('messageToClient', message => console.log(message));
	}, []);
	return (
		<>
			<StyledContainer>
				{messages.map(msg => (
					<div key={v4()}>{msg}</div>
				))}
			</StyledContainer>
			<form onSubmit={e => handleSubmit(e, messages, setMessages)}>
				<label htmlFor='message'>
					<StyledInput type='text' name='message' id='message' />
				</label>
				<input type='submit' />
			</form>
		</>
	);
};

const handleSubmit = (e, messages, setMessages) => {
	e.preventDefault();
	console.log(e.target.message.value);
	setMessages([...messages, e.target.message.value]);
	socket.emit('test2', e.target.message.value);

	e.target.reset();
};

export default Form;
