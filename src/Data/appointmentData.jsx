// Mock appointment data for upcoming schedule
const appointmentData = {
  upcomingSchedule: [
    {
      id: 1,
      day: 'Thursday',
      appointments: [
        {
          id: 101,
          title: 'Health checkup complete',
          time: '09:00 AM',
          icon: 'checkup'
        },
        {
          id: 102,
          title: 'Dentist',
          time: '11:30 AM',
          icon: 'dental'
        }
      ]
    },
    {
      id: 2,
      day: 'Saturday',
      appointments: [
        {
          id: 201,
          title: 'Ophthalmologist',
          time: '10:00 AM',
          icon: 'eye'
        },
        {
          id: 202,
          title: 'Cardiologist',
          time: '02:30 PM',
          icon: 'heart'
        },
        {
          id: 203,
          title: 'Neurologist',
          time: '04:00 PM',
          icon: 'brain'
        }
      ]
    }
  ],
  
  activityData: {
    weeklyAppointments: 3,
    activityChart: [
      { day: 'Mon', value: 20 },
      { day: 'Tue', value: 40 },
      { day: 'Wed', value: 30 },
      { day: 'Thu', value: 70 },
      { day: 'Fri', value: 50 },
      { day: 'Sat', value: 80 },
      { day: 'Sun', value: 20 }
    ]
  }
};

export default appointmentData;
