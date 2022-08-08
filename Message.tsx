import React from 'react';
import s from './Message.module.css';

import alternativeSuperEditableSpan from "../h6/common/c4-SuperEditableSpan/AlternativeSuperEditableSpan";
import {Simulate} from "react-dom/test-utils";

// type NewMessage = {
//     message: MessageType[]
// }

type MessageType = {

    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessageType) {
    return (
        <>
            <div className={s.Avatar}>
                <img src={props.avatar} alt=""/>
            </div>

            <div className={s.Message}>
                <div className={s.MessageBlock}>
                    <span id={s.Name}>{props.name}</span>
                    <p>{props.message}</p>
                    <span>{props.time}</span>
                </div>
            </div>
        </>

    )

            {/*{props.message.map((NewMessageArray: MessageType) => {*/}
            {/*    return (*/}

            {/*        <div key={NewMessageArray.name} className={s.Message}>*/}
            {/*            /!*<div className={s.Avatar}><img src={NewMessageArray.avatar} alt=""/></div>*!/*/}
            {/*            /!*<div className={s.MessageBlock}>*!/*/}
            {/*            /!*    <div className={s.Name}>{NewMessageArray.name}</div>*!/*/}
            {/*            /!*    <div className={s.Message1}>{NewMessageArray.message1}</div>*!/*/}
            {/*            /!*    <div className={s.Time}>{NewMessageArray.time}</div>*!/*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})*/}
            {/*}*/}
}

export default Message
