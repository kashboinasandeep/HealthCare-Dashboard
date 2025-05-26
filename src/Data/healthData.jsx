// Mock health data for the anatomy section
const healthData = {
  anatomyParts: [
    {
      id: 1,
      name: 'Heart',
      status: 'Healthy',
      statusColor: 'green',
      position: { top: '35%', left: '50%' }
    },
    {
      id: 2,
      name: 'Lungs',
      status: 'Needs Attention',
      statusColor: 'red',
      position: { top: '30%', left: '52%' }
    },
    {
      id: 3,
      name: 'Teeth',
      status: 'Checkup Required',
      statusColor: 'yellow',
      position: { top: '15%', left: '50%' }
    },
    {
      id: 4,
      name: 'Bone',
      status: 'Good',
      statusColor: 'green',
      position: { top: '60%', left: '50%' }
    }
  ],
  
  healthStatusCards: [
    {
      id: 1,
      title: 'Lungs',
      date: '23 Oct 2021',
      status: 'Needs Attention',
      statusColor: 'red'
    },
    {
      id: 2,
      title: 'Teeth',
      date: '15 Oct 2021',
      status: 'Checkup Required',
      statusColor: 'yellow'
    },
    {
      id: 3,
      title: 'Bone',
      date: '10 Oct 2021',
      status: 'Good',
      statusColor: 'green'
    }
  ]
};

export default healthData;
