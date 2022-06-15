// ========== Global Styles
// import all modules
import { createGlobalStyle } from 'styled-components';
import { Fonts } from '../themes';
import Rubik from '../fonts/Rubik-Regular.ttf';
import RubikBold from '../fonts/Rubik-Bold.ttf';
import RubikLight from '../fonts/Rubik-Light.ttf';

const GlobalStyles = createGlobalStyle`
	@font-face {
		src: url(${Rubik}) format('truetype');
		font-family: rubik; 
	}
	
	@font-face {
		src: url(${RubikBold}) format('truetype');
		font-family: rubik-bold; 
	}

	@font-face {
		src: url(${RubikLight}) format('truetype');
		font-family: rubik-light; 
	}

	html {
		background-color: white;
		font-size: 16px;
		font-family: ${Fonts.base};
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	h1 {
		font-size: 2.8rem;
	}

	h2 {
		font-size: 2.6rem;
	}

	h3 {
		font-size: 2.4rem;
	}

	h4 {
		font-size: 2.2rem;
	}

	h5 {
		font-size: 2rem;
	}

	h6 {
		font-size: 1.8rem;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance:none;
	}
`;

export default GlobalStyles;
