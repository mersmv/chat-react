import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 700px;
	height: 500px;
	border: solid 1px black;
	display: flex;
	flex-direction: column;
	padding: 50px;
	gap: 15px;
	justify-content: start;
	margin-left: 5px;
	border-radius: 10px;
`;

const StyledInput = styled.input`
	width: 200px;
	height: 30px;
	margin-left: 50px;
	margin-top: 10px;
	border: solid 1px black;
	border-radius: 50px;
`;

export { StyledContainer, StyledInput };
