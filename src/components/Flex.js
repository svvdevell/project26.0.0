import styled from "styled-components";

const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: ${props => props.direction || "column"};
`;
const Flex = (props) => {
    return <StyledFlex {...props}/>;
};

export default Flex;