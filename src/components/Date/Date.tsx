import React from 'react';
import { DateTime } from "luxon";
import classes from "./Date.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

interface DateI {
  date: DateTime,
  inputDate: DateTime,
  setDate: React.Dispatch<React.SetStateAction<Date>>,
}

function Date({ date, setDate, inputDate }: DateI) {

  const handleChangeDate = (pickedDate: DateTime) => {
    setDate(pickedDate.toJSDate());
  }

  return (
    <div
      onClick={() => handleChangeDate(date)}
      className={cx('calendar__date', {
        calendar__date_active: +inputDate === +date,
        calendar__date_otherMonth: inputDate.month !== date.month,
      })}
    >
      {date.day}
    </div>
  );
}

export default Date;