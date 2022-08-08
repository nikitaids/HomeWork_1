import React from "react";

type TypeButton = {
    BtnName: string;
    callBack: () => void;
}

export const Button = (props: TypeButton) => {
    const OnClickHandler = () => {
        props.callBack();
    }
    return (
        <button onClick={OnClickHandler}>{props.BtnName}</button>
    )
}




