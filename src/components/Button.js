import PropTypes from "prop-types";
import styled, {css} from "styled-components";

const StyledButtonBase = styled.button`
          border-radius: 4px;
          cursor: pointer;
          border: 1px solid transparent;
          text-align: center;
          ${props => props.size === "small" && css`
            font-size: 16px;
            line-height: 22px;
            min-width: 68px;
            min-height: 40px;
            padding: 8px 16px;
          `}
          ${props => props.size === "medium" && css`
            font-size: 16px;
            line-height: 22px;
            min-width: 76px;
            min-height: 48px;
            padding: 12px 20px;
          `}
          ${props => props.size === "large" && css`
            font-size: 18px;
            line-height: 25px;
            min-width: 81px;
            min-height: 48px;
            padding: 12px 20px;
          `}
    `
;


const StyledPrimaryButton = styled(StyledButtonBase)`
  background: #605DEC;
  color: #FAFAFA;

  :hover {
    background: #1513A0;
  }

  :disabled {
    background: rgba(203, 212, 230, 0.3);
    border: 1px solid #7C8DB0;
    color: #7C8DB0;
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background: #f3f3f3;
  color: #605DEC;
  border: 1px solid #605DEC;

  :hover {
    background: #E9E8FC;
  }

  :disabled {
    background: #f3f3f3;
    color: #7C8DB0;
    border: 1px solid #9aa7c1
  }
`;

const Button = ({color, size, children, disabled, onClick}) => {
    const buttonProps = {
        size,
        children,
        disabled,
        onClick,
    };
    if (color === "primary") {
        return <StyledPrimaryButton {...buttonProps}/>;
    } else {
        return <StyledSecondaryButton {...buttonProps}/>;
    }
};

Button.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.oneOf(["primary", "secondary"]),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

Button.defaultProps = {
    color: "primary",
    size: "medium",
    disabled: false
};


export default Button;