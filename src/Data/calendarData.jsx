// Mock calendar and appointment data
const calendarData = {
  month: 'October 2021',
  days: [
    { day: 1, appointments: [] },
    { day: 2, appointments: [] },
    { day: 3, appointments: [] },
    { day: 4, appointments: [] },
    { day: 5, appointments: [] },
    { day: 6, appointments: [] },
    { day: 7, appointments: [] },
    { day: 8, appointments: [] },
    { day: 9, appointments: [] },
    { day: 10, appointments: [] },
    { day: 11, appointments: [] },
    { day: 12, appointments: [] },
    { day: 13, appointments: [] },
    { day: 14, appointments: [{ time: '09:00', type: 'Dentist' }] },
    { day: 15, appointments: [] },
    { day: 16, appointments: [{ time: '11:00', type: 'Physiotherapy' }] },
    { day: 17, appointments: [] },
    { day: 18, appointments: [] },
    { day: 19, appointments: [] },
    { day: 20, appointments: [] },
    { day: 21, appointments: [{ time: '13:00', type: 'Cardiologist' }] },
    { day: 22, appointments: [] },
    { day: 23, appointments: [] },
    { day: 24, appointments: [] },
    { day: 25, appointments: [] },
    { day: 26, appointments: [] },
    { day: 27, appointments: [] },
    { day: 28, appointments: [{ time: '15:00', type: 'Ophthalmologist' }] },
    { day: 29, appointments: [] },
    { day: 30, appointments: [] },
    { day: 31, appointments: [] }
  ],
  
  upcomingAppointments: [
    {
      id: 1,
      title: 'Dentist Appointment ',
      doctor: 'Dr. surajKumar',
      time: '09:00 AM',
      date: 'Thursday, Oct 14, 2021',
      day: 'Thursday'
    },
    {
      id: 2,
      title: 'Nephologist Appointment',
      doctor: 'Dr. kishoreKumar',
      time: '11:00 AM',
      date: 'Saturday, Oct 16, 2021',
      day: 'Saturday'
    }
  ]
};

export default calendarData;
