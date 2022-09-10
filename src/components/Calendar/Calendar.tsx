import React from 'react';
import { DateTime } from 'luxon';
import classes from "./Calendar.module.css";
import classNames from "classnames/bind";
import getLastElement from "shared/lib/getLastElement";
import Date from '../Date';

const cx = classNames.bind(classes);

interface CalendarI {
  isOpen: boolean,
  date: Date,
  setDate: React.Dispatch<React.SetStateAction<Date>>,
}

function Calendar({ isOpen, date, setDate }: CalendarI) {
  if (!isOpen) {
    return null;
  }

  const inputDate = DateTime.fromJSDate(date);
  const start = inputDate.startOf('month').startOf('week');
  const end = inputDate.endOf('month').endOf('week').plus({ 'day': -1 });

  const createMonth = (start: DateTime, end: DateTime) => {
    const dates = [start];
    while (getLastElement(dates) < end) {
      dates.push(getLastElement(dates).plus({ 'day': 1 }))
    }
    return dates;
  }

  const dates = createMonth(start, end);

  return (
    <div className={cx('calendar')}>
      <div className={cx('calendar__control')}>
        Control
      </div>
      <div className={cx('calendar__dates')}>
        {dates.map((date) => (
          <Date
            date={date}
            inputDate={inputDate}
            setDate={setDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;