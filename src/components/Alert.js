import styled, {css} from "styled-components";
import PropTypes from "prop-types";
import {ReactComponent as CloseIcon} from "../assets/icons/close.svg";

const AlertWrapper = styled.div`
  position: relative;
  width: 100%;
  ${props => props.color === "primary" && css`
    background: #605DEC;
    color: #F6F6FE;
  `}
  ${props => props.color === "error" && css`
    background: #EB5757;
    color: #FAFAFA;
  `}
  ${props => props.color === "warning" && css`
    background: #FFD12F;
    color: #1513A0;
  `}
`;

const StyledAlertBase = styled.div`
  height: 64px;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledButtonBase = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  background: transparent;
  cursor: pointer;
  border: none;
  top: 50%;
  transform: translate(0, -50%);
  left: 95%;
  margin: 0 20px;
`;

const Alert = ({children, color, onClose}) => {
    return (
        <AlertWrapper color={color}>
            <StyledAlertBase>{children}</StyledAlertBase>
            <StyledButtonBase onClick={onClose}><CloseIcon/></StyledButtonBase>
        </AlertWrapper>
    );
};

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
    onClose: PropTypes.func.isRequired
};

export default Alert;