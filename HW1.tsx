import React, {useState} from 'react'
import Message from "./Message";
import {Button} from "./Button";
import s from './Message.module.css';

let messageData =
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Nikita',
        message: 'some text',
        time: '22:00',
    }


function HW1() {
    // const button1Foo = (subscriber: string) => {
    //     console.log(subscriber)
    // }
    //
    // const [value, SetValue] = useState('');
    //
    // const SendMessage = () =>{
    //     messageData.push.apply(messageData2);
    //     console.log(messageData)
    // }
    return (
        <div className={s.Messages}>
            <hr/>
            homeworks 1
            {/*<Message message={messageData}/>*/}
            {/*    <input type="text" value={value} onChange={e => SetValue(e.target.value)}/>*/}
            {/*    <button onClick={SendMessage}>Send Message</button>*/}
            {/*<Button BtnName={'Send'} callBack={() => button1Foo('Nikita')} />*/}


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
