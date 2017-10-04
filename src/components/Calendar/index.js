import React from "react";
import moment from "moment";
import DayPicker, { DateUtils } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";

const DAY_FORMAT = "DD/MM/YYYY";

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

export default class Calendar extends React.Component {
  state = {
    selectedDay: undefined,
    isDisabled: false
  };

  handleDayClick = (selectedDay, modifiers) => {
    this.setState({
      selectedDay: selectedDay,
      isDisabled: modifiers.disabled
    });
  };

  render() {
    const { selectedDay, isDisabled } = this.state;
    const formattedDay = !!selectedDay
      ? moment(selectedDay).format(DAY_FORMAT)
      : "";
    const modifiers = {
      disabled: { daysOfWeek: [0, 6] }
    };

    const locale = "ru";

    const WEEKDAYS_LONG = {
      ru: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
      ]
    };
    const WEEKDAYS_SHORT = { ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"] };
    const MONTHS = {
      ru: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ]
    };

    return (
      <div>
        <p>
          {!selectedDay && "🤔 Type or pick a valid day"}
          {selectedDay && isDisabled && "😡 This day is disabled"}
          {selectedDay && !isDisabled && `😄 You chose ${formattedDay}`}
        </p>
        <span>
          <DayPicker
            firstDayOfWeek={1}
            onDayClick={this.handleDayClick}
            months={MONTHS[locale]}
            weekdaysLong={WEEKDAYS_LONG[locale]}
            weekdaysShort={WEEKDAYS_SHORT[locale]}
            locale={locale}
            modifiers={modifiers}
            fromMonth={new Date(2017, 9)}
            toMonth={new Date(2017, 11)}
            showWeekNumbers
          />
        </span>
      </div>
    );
  }
}
