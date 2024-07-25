import styed from 'styled-components';
import {Row} from 'antd'

export const WrapperHeader = styed(Row) `
    background-color: rgb(26, 148, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
`

export const WrapperTextHeader = styed.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
`

export const WrapperHeaderAccout = styed.div`
       display: flex;
       align-items: center;
       color: #fff;
       gap: 10px;
`

export const WrapperTextHeaderSmall = styed.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;

export const WrapperContentPopup = styed.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;