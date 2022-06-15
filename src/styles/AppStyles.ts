// ========== App Styles
// import all modules
import styled from 'styled-components';
import { Colors } from '../themes';

export const Title = styled.h1`
	color: ${Colors.dark};
	font-size: 2.5rem;
`;

export const Hero = styled.div`
	min-height: 100vh;
	background-color: ${Colors.white};
`;

export const Container = styled.div`
	width: 90%;
	margin: 0 auto;
`;
