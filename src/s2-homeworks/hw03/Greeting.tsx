import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {Button} from "@mui/material";

type GreetingPropsType = {
    name: string
    setNameCallback: any
    addUser: () => void
    onBlur: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
    lastUserName?: string
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    }
) => {
    return (
            <div id={'hw3-form'} className={s.greetingForm}>
                <span id={'hw3-users-total'} className={s.totalUser}>total users: {totalUsers}</span>
                <div className={s.inputAndButtonContainer}>
                    <input
                        id={'hw3-input'}
                        value={name}
                           onChange={setNameCallback}
                           className={error ? s.errorInput : s.input}
                           onBlur={onBlur}
                           onKeyDown={onEnter}

                    />
                    <Button
                        id={'hw3-button'}
                        style={{marginLeft: '12px'}}
                        variant="contained"
                        className={s.button}
                        disabled={error.trim() !== '' || name.trim() === ''}
                        onClick={addUser}>
                        add
                    </Button>
                </div>
                {error.trim() !== '' ? <span id={'hw3-error'} className={s.error}>{error}</span> :
                    totalUsers > 0 && <span id={'hw3-last-user'} className={s.name}>Привет: {lastUserName}</span>}
            </div>
    )
}

export default Greeting
