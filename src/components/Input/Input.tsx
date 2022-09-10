import React, {useRef, useState} from 'react';
import classes from "./Input.module.css";
import classNames from "classnames/bind";
import Calendar from "../Calendar";
import useOutsideClick from "shared/lib/useOutsideClick";
import {DateTime} from "luxon";

const cx = classNames.bind(classes);

interface InputI {
  format?: string,
}

function Input({ format = 'DD.MM.YYYY' }: InputI) {
  const dateFormat = format.toLowerCase().replaceAll('m', 'M');
  const ref = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleOutsideClick = () => setCalendarVisible(false);

  useOutsideClick({ ref, callback: handleOutsideClick });

  return (
    <div
      ref={ref}
      onClick={() => setCalendarVisible(true)}
      className={cx('datePicker__label')}
    >
      <input
        value={DateTime.fromJSDate(date).toFormat(dateFormat)}
        className={cx('datePicker__input')}
      />
      <Calendar
        setDate={setDate}
        date={date}
        isOpen={isCalendarVisible}
      />
    </div>
  );
}

export default Input;