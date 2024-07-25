import styed from "styled-components";
import {Col} from "antd";

export const WrapperProducts = styed.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
`

export const WrapperNavbar = styed(Col)`
    background: #fff; 
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px;
    height: fit-content;
    margin-top: 20px;
    width: 200px;
`