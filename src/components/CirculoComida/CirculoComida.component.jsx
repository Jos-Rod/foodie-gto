import React from 'react';
import { CirculoComidaStyled, ImageCircleSyled } from './CirculoComida.styling';
import { useHistory } from 'react-router-dom'


export const CirculoComida = ({ title, img, linkTo, actionToChangeURL }) => {

    const history = useHistory();
    function clickedLink() {

        console.log("clicked");
        history.push(linkTo);
        actionToChangeURL();
    }

    return (
        <>
            <CirculoComidaStyled onClick={() => clickedLink()}>
                <ImageCircleSyled img={img} ></ImageCircleSyled>
                <div style={{ textAlign: 'center' }}>
                    <p>{title}</p>
                </div>
            </CirculoComidaStyled>
        </>
    );
}

export default CirculoComida;