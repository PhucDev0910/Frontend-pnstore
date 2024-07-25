import styed from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
export const WrapperTypeProduct = styed.div`
    display: flex;
    font-size: 15px;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`
export const WrapperProducts = styed.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`

export const WrapperButtonMore = styed(ButtonComponent)`
  &:hover {
    color: #fff;
    background: #9255fd;
    span {
      color: #fff;
    }
  }
  width: 100%;
  color: #9255fd;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointers")};
`;