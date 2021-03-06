import styled from 'styled-components';
import Nav from './Nav';
const NavDemo = styled(Nav)`
	direction: rtl;
	overflow-y: auto;
	background-color: #ccc;
	height: 100%;
	line-height: 50px;
	text-align: center;
	ul {
		display:flex;
		flex-direction:${props => props.horizonNav? 'row' : 'column'};
	}
`
export default NavDemo;
