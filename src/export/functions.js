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
  const token = localStorage.getItem('token').replace(/["]/g, "");

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

export const fetchLogin = async (query, body) => {

  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}${query}`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return localStorage.setItem('token', JSON.stringify(data.token));
    
  } catch(err) {
    console.log(err);
  }
};

export const FormDate = (date) => {
  let arrayDate = date.split('T')

  return arrayDate[0];
}

export const getDiscount = (price, offer) => {
  const result = parseInt(price - (price * offer / 100));

  return result
}