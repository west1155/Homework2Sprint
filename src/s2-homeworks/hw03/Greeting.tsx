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
    const inputClass = error ? s.errorInput : s.input
    return (
        <div className={s.greetingForm}>
            <span className={s.totalUser}>total users: {totalUsers}</span>
            <div className={s.inputAndButtonContainer}>
                <input value={name}
                       onChange={setNameCallback}
                       className={error? s.errorInput : s.input}
                       onBlur={onBlur}
                       onKeyDown={onEnter}

                />
                <Button
                    style={{ marginLeft: '12px' }}
                    variant="contained"
                    className={s.button}
                    disabled={error.trim() !== '' || name.trim() === ''}
                    onClick={addUser}>
                    add
                </Button>
            </div>
            {error.trim() !== '' ? <span className={s.error}>{error}</span> :
                totalUsers > 0 && <span className={s.name}>Привет: {lastUserName}</span>}
        </div>
    )
}

export default Greeting
