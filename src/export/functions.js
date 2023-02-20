export const getTitle = (path) => {
    let title = 'Dashboard'
    const newPath = path.split('/')

    switch(newPath[1]) {
      // case '':
      //   title = 'Dashboard'
      // break;
      case 'bookings':
        title = 'Bookings'
      break;
      case 'rooms':
        title = 'Rooms'
      break;
      case 'users':
        title = 'Users'
      break;
      case 'contact':
        title = 'Contact'
      break;
      default:
        return title = 'Dashboard'
    }

    return title
}

export const getData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 200)
  })
}

// export const fetchBookings = async () => {
//   try {
//     const response = await fetch();
//     const data = await response.json();

//     return data

//   } catch(err) {
//     console.log(err);
//   }
// };

// export const fetchReview = async () => {
//   try {
//     const response = await fetch();
//     const data = await response.json();

//     return data

//   } catch(err) {
//     console.log(err);
//   }
// };

// export const fetchRooms = async () => {
//   try {
//     const response = await fetch();
//     const data = await response.json();

//     return data

//   } catch(err) {
//     console.log(err);
//   }
// };

// export const fetchUsers = async () => {
//   try {
//     const response = await fetch();
//     const data = await response.json();

//     return data

//   } catch(err) {
//     console.log(err);
//   }
// };