// ========== App Styles
// import all modules
import styled from 'styled-components';
import SelectComponent from 'react-select';
import { IColProps, IContainerProps, IRowProps } from '../interfaces';
import { Colors, Fonts } from '../themes';

export const Title = styled.h1`
	color: ${Colors.dark};
	font-size: 2rem;
	font-weight: normal;
`;

export const TableTitle = styled.h1`
	color: ${Colors.dark};
	font-size: 1.3rem;
`;

export const Subtitle = styled.h4`
	color: ${Colors.dark};
	font-size: 1.3rem;
	font-family: ${Fonts.light};
	font-weight: normal;
	margin-top: .7rem;
`;

export const TextBold = styled.span`
	font-family: ${Fonts.bold};
`;

export const Hero = styled.div`
	min-height: 100vh;
	background-color: ${Colors.primary};
	padding: 2.5rem 0 3.5rem 0;
`;

export const Container = styled.div<IContainerProps>`
	margin: 0 auto;
	width: ${({ size }) => size}%;
	height: 100%;
`;

export const TableHero = styled.div`
	margin-top: 2rem;
	padding: 1.5rem 0;
	background-color: rgba(243, 113, 112, 0.3);
	border-radius: 8px;
`;

export const Row = styled.div<IRowProps>`
	display: flex;
	width: 100%;
	height: 100%;

	${(props) => {
    if (props.spaceBetween) {
      return `
				justify-content: space-between;
			`;
    }

    return '';
  }}

	${(props) => {
    if (props.alignCenter) {
      return `
				align-items: center;
			`;
    }

    return '';
  }}

	${(props) => {
    if (props.marginTop > 0) {
      return `
				margin-top: ${props.marginTop}rem;
			`;
    }

    return '';
  }}
`;

export const Col = styled.div<IColProps>`
	display: flex;

	${(props) => {
    if (props.flexEnd) {
      return `
				&:last-child {
					justify-content: flex-end;
				}
			`;
    }

    return '';
  }}

	${(props) => {
    if (props.width > 0) {
      return `
				width: ${props.width}%;
			`;
    }

    return `
			flex: ${props.flex};
		`;
  }}
`;

export const SearchField = styled.input`
	padding-left: .7rem;
	outline: none;
	border: none;
	border-radius: 4px;
	font-size: .9rem;
	height: 2.4rem;
	width: 100%;
`;

export const Select = styled(SelectComponent)`
	width: 100%;
`;

export const Table = styled.table`
	width: 100%;
	background-color: transparent;
	border-collapse: collapse;
`;

export const Thead = styled.thead`
	background-color: ${Colors.gray};
`;

export const TableHead = styled.th`
	text-align: center;
	padding: 1rem 0;
	font-weight: ${Fonts.bold};
	font-size: 1rem;
`;

export const TableRow = styled.tr`

`;

export const TableBody = styled.tbody`
	background-color: ${Colors.white};
`;

export const TableData = styled.td`
	text-align: center;
	padding: .8rem 0;
	font-weight: ${Fonts.base};
	font-size: .9rem;
`;
