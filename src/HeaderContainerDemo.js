import styled from 'styled-components';
import HeaderContainer from './HeaderContainer';

const HeaderContainerDemo = styled(HeaderContainer)`
    background-color: #ccc;
    border: 1px solid #999;
    line-height: ${props => props.hasNav? '10px' : '53px'};
		text-align: center;
		flex-direction: ${props => props.hasNav? 'column' : 'row'};
`
export default HeaderContainerDemo;
