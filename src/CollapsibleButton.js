import styled from 'styled-components'

const CollapsibleButton = styled.div`
	position: relative;
	width: 50px;
	height: 50px;
	padding: 23px 0px;
	&::after{
    content: '';
    height: 50px;
    right: 0px;
    width: 50px;
    position: absolute;
    background-size: 50px 50px;
		cursor: pointer;
		background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAASklEQVRYR+3TwQkAQAgDQe2/aK8DEeRYhPUvhiFmwJPw/TCAAgpMBGr5qu0NA5wQWFagX58I4AH8AgXwEuIB7IACeAkNoIACXwUeMv0MIZQuUY4AAAAASUVORK5CYII=')
	}
`
export default CollapsibleButton;
