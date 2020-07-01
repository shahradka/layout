import styled from 'styled-components';

const HeaderContainer = styled.div`
	display:flex;
	flex-direction: ${props => props.hasNav? 'row;' : 'column;'};
	min-height:53px;
`
export default HeaderContainer;
