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

export const fetchApi = async (query, method, body) => {
  const token = process.env.REACT_APP_API_TOKEN;

  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}${query}`, {
      method: method,
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return data.data;

  } catch(err) {
    console.log(err);
  }
};

export const formatDate = (date) => {
  let arrayDate = date.split('-')

  switch(arrayDate[1]) {
    case '01': 
      arrayDate[1] = 'Jan'
      break;
    case '02': 
      arrayDate[1] = 'Feb'
      break;
    case '03': 
      arrayDate[1] = 'Mar'
      break;
    case '04': 
      arrayDate[1] = 'Apr'
      break;
    case '05': 
      arrayDate[1] = 'May'
      break;
    case '06': 
      arrayDate[1] = 'Jun'
      break;
    case '07': 
      arrayDate[1] = 'Jul'
      break;
    case '08': 
      arrayDate[1] = 'Aug'
      break;
    case '09': 
      arrayDate[1] = 'Sep'
      break;
    case '10': 
      arrayDate[1] = 'Oct'
      break;
    case '11': 
      arrayDate[1] = 'Nov'
      break;
    case '12': 
      arrayDate[1] = 'Dec'
      break;
    default: 
      return arrayDate[1]
  }

  let reverse = arrayDate.reverse();
  let newDate = reverse.join(' ')

  return newDate
}

export const FormDate = (date) => {
  let arrayDate = date.split('T')

  return arrayDate[0];
}

export const getDiscount = (price, offer) => {
  const result = parseInt(price - (price * offer / 100));

  return result
}