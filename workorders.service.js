export class WorkordersService {
  workorders = [
    {
      id: 1,
      buildingNmb: 1,
      apartmentNmb: 1,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Anastazija Veselinovic',
      status: 'sent'
    },
    {
      id: 2,
      buildingNmb: 2,
      apartmentNmb: 1,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Stefan Djordjevic',
      status: 'pending'
    },
    {
      id: 3,
      buildingNmb: 1,
      apartmentNmb: 2,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Anastazija Veselinovic',
      status: 'sent'
    },
    {
      id: 4,
      buildingNmb: 8,
      apartmentNmb: 1,
      selectDate: new Date(),
      completeDate: new Date(),
      sendDate: new Date(),
      user: 'Stefan Djordjevic',
      status: 'sent'
    }
  ];

  getAllWorkorders() {
    return this.workorders;
  }
}
