import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';


const OrderOptionDate = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker selected={date} onChange={date => setDate(date)} />
  );
};

export default OrderOptionDate;