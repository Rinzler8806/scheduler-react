import React, { createRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import AddEventModal from './AddEventModal';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    
        const [modalOpen, setModalOpen] = useState(false)
        const calendarRef = createRef()
        const onEventAdded = event => {
          let calendarApi = this.calendarRef.current.getApi()
            calendarApi.addEvent(event);
        }
    
        return (
          <section>
            <button onClick={() => setModalOpen(true)}>Add Event</button>
            
                <FullCalendar
      ref={calendarRef}
      schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
        plugins={[ dayGridPlugin, timeGridPlugin, resourceTimelinePlugin ]}
        initialView="dayGridMonth"
        events="https://fullcalendar.io/demo-events.json?start=2021-03-22&end=2021-08-22"
        resources="https://fullcalendar.io/demo-resources.json?with-nesting&with-colors"
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
          myTimeLineDayBtn: {
            text: "timeLineDay",
            click() {
              
              const calendar = calendarRef.current;

              if (calendar) {
                const calendarApi = calendar.getApi();

                calendarApi.changeView("resourceTimelineDay");
              }
            },
          },
          myTimeLineWeekBtn: {
            text: "timeLineWeek",
            click() {

              const calendar = calendarRef.current;

              if (calendar) {
                const calendarApi = calendar.getApi();

                calendarApi.changeView("resourceTimelineWeek");
              }
            }
          },
        }}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn,myTimeLineDayBtn,myTimeLineWeekBtn",
        }}
      />
      <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
      </section>
    )
};