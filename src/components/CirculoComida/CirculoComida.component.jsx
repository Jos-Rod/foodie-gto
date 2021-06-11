import React from 'react';
import { CirculoComidaStyled, ImageCircleSyled } from './CirculoComida.styling';

export const CirculoComida = ({ title, img }) => {
    return (
        <>
            <CirculoComidaStyled>
                <ImageCircleSyled img={img} ></ImageCircleSyled>
                <div style={{ textAlign: 'center' }}>
                    <p>{title}</p>
                </div>
            </CirculoComidaStyled>
        </>
    );
}

export default CirculoComida;