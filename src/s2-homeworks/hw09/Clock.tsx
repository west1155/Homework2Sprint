import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<any>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(true)
    const [startBtn, setStartBtn] = useState<boolean>(false);
    const [stopBtn, setStopBtn] = useState<boolean>(true);




    const start = () => {

        const interval = setInterval(() => {
            setDate(new Date());
            setTimerId(interval);
        }, 1000);
        setStartBtn(true)
        setStopBtn(false);
    };

    const stop = () => {
        clearInterval(timerId);
        setStopBtn(true)
        setStartBtn(false);
        setTimerId(null);
    };

    const onMouseEnter = () => {
        setShow(true)

    }
    const onMouseLeave = () => {
        setShow(false);
    }
    const currentTime = new Intl.DateTimeFormat("ru-RU", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }).format(date);
    const stringTime = currentTime  || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

    const currDate = Intl.DateTimeFormat("ru-Ru", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    }).format(date);
    const stringDate = currDate || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)




    const currentDayOfWeek = new Intl.DateTimeFormat("en-EN", {
        weekday: "long",
    }).format(date);
    const stringDay = currentDayOfWeek || <br />;

    const currMonth = new Intl.DateTimeFormat("en-En", {
        month: "long",
    }).format(date);
    const stringMonth = currMonth || <br />;

    return (
        <div className={s.clock}>
            <div
                id={"hw9-watch"}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={"hw9-day"}>{stringDay}</span>,{" "}
                <span id={"hw9-time"}>
            <strong>{stringTime}</strong>
          </span>
            </div>

            <div id={"hw9-more"}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={"hw9-month"}>{stringMonth}</span>,{" "}
                            <span id={"hw9-date"}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={"hw9-button-start"}
                    disabled={startBtn} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={"hw9-button-stop"}
                    disabled={stopBtn} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock
