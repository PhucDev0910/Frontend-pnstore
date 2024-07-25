import React from 'react'
import {Button} from 'antd'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import {
    SearchOutlined
} from '@ant-design/icons';

const ButtonInputSearch = (props) => {
    // tái sử dụng ở nhiều nơi
    const {
        size, placeholder,
        textButton, bordered,
        backgroundColorInput = '#fff',
        backgroundColorButton = '#fff',
        colorButton = 'rgb(13,92,182)'
    } = props
    return (
        <div style={{display: 'flex', backgroundColor: '#fff'}}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{backgroundColor: backgroundColorInput}}
                {...props}
                />
            <ButtonComponent
                size={size}
                bordered={bordered}
                styleButton={{backgroundColor: backgroundColorButton, border: !bordered && 'none'}}
                textButton={textButton}
                styleTextButton={{color: colorButton}}
                icon={<SearchOutlined style={{color: colorButton}}/>}
            ><span>{textButton}</span></ButtonComponent>
        </div>
    )
}
export default ButtonInputSearch
