const availableTimesByDate = {
    '2023-09-18': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00'],
    '2023-09-19': ['11:00', '12:00', '13:00', '14:00', '16:00', '17:00', '19:00'],
    '2023-09-20': ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    '2023-09-21': ['10:00', '13:00', '14:00', '15:00', '16:00', '18:00'],
    '2023-09-22': ['10:00', '11:00', '12:00', '14:00', '16:00', '18:00', '19:00'],
    '2023-09-23': ['11:00', '12:00', '13:00', '15:00', '16:00', '17:00'],
    '2023-09-24': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '18:00'],
    '2023-09-25': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-09-26': ['12:00', '13:00', '14:00', '16:00', '17:00', '18:00'],
    '2023-09-27': ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-09-28': ['10:00', '12:00', '13:00', '15:00', '16:00', '17:00'],
    '2023-09-29': ['11:00', '13:00', '14:00', '16:00', '17:00', '18:00'],
    '2023-09-30': ['10:00', '11:00', '12:00', '13:00', '14:00', '16:00'],
    '2023-10-01': ['12:00', '13:00', '15:00', '16:00', '18:00', '19:00'],
    '2023-10-02': ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2023-10-03': ['11:00', '13:00', '14:00', '15:00', '17:00', '19:00'],
    '2023-10-04': ['10:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-10-05': ['11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
    '2023-10-06': ['10:00', '12:00', '13:00', '15:00', '17:00', '19:00'],
    '2023-10-07': ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-10-08': ['10:00', '12:00', '14:00', '16:00', '17:00', '18:00'],
    '2023-10-09': ['11:00', '13:00', '15:00', '16:00', '17:00', '18:00'],
    '2023-10-10': ['10:00', '12:00', '14:00', '15:00', '17:00', '19:00'],
    '2023-10-11': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00'],
    '2023-10-12': ['12:00', '13:00', '15:00', '16:00', '17:00', '18:00'],
    '2023-10-13': ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-10-14': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00'],
    '2023-10-15': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-10-16': ['12:00', '13:00', '14:00', '16:00', '17:00', '18:00'],
    '2023-10-17': ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-10-18': ['10:00', '12:00', '13:00', '15:00', '16:00', '17:00'],
    '2023-10-19': ['11:00', '13:00', '14:00', '16:00', '17:00', '18:00'],
    '2023-10-20': ['10:00', '11:00', '12:00', '13:00', '14:00', '16:00'],
    '2023-10-21': ['12:00', '13:00', '15:00', '16:00', '18:00', '19:00'],
    '2023-10-22': ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2023-10-23': ['11:00', '13:00', '14:00', '15:00', '17:00', '19:00'],
    '2023-10-24': ['10:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-10-25': ['11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
    '2023-10-26': ['10:00', '12:00', '13:00', '15:00', '17:00', '19:00'],
    '2023-10-27': ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    '2023-10-28': ['10:00', '12:00', '14:00', '16:00', '17:00', '18:00'],
    '2023-10-29': ['11:00', '13:00', '15:00', '16:00', '17:00', '18:00'],
    '2023-10-30': ['10:00', '12:00', '14:00', '15:00', '17:00', '19:00'],
    '2023-10-31': ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '18:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date]);
            }
            else{
                resolve(['No available times for selected date.']);
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export {fetchAPI,submitAPI}