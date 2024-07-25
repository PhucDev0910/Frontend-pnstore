import styed from "styled-components";
import {Input} from "antd";


export const WrapperInputStyle = styed(Input)`
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    &:focus {
        background-color: rgb(232,240,254);
    }
`