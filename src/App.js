import React, { createRef } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';

export default class DemoApp extends React.Component {
  render() {

    const calendarRef = createRef()

    return (
      <FullCalendar
      ref={calendarRef}
        plugins={[ dayGridPlugin, timeGridPlugin ]}
        initialView="dayGridMonth"
        events="https://fullcalendar.io/demo-events.json?start=2021-03-22&end=2021-08-22"
        customButtons={{
          myTimeDayBtn: {
            text: "timeDay",
            click() {
              
              const calendar = calendarRef.current;

              if (calendar) {
                const calendarApi = calendar.getApi();

                calendarApi.changeView("timeGridDay");
              }
            },
          },
          myTimeWeekBtn: {
            text: "timeWeek",
            click() {

              const calendar = calendarRef.current;

              if (calendar) {
                const calendarApi = calendar.getApi();

                calendarApi.changeView("timeGridWeek");
              }
            }
          },
        }}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn",
        }}
      />
    );
  }
}