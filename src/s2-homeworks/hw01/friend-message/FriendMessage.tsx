import React from 'react'
import s from './FriendMessage.module.css'
import avatar from "../avatar.png";

type FriendMessagePropsType = {
    message: {
        id: number
    }
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={avatar}
                    alt={'avatar'}
                />

                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        Ivan
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        Hello, she didn't do anything and rested all the day, how are you?
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                09:01
            </div>
        </div>
    )
}

export default FriendMessage
