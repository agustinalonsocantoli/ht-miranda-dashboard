export const getTitle = (path) => {
    let title = 'Dashboard'

    switch(path) {
      case '/bookings':
        title = 'Bookings'
      break;
      case '/rooms':
        title = 'Rooms'
      break;
      case '/users':
        title = 'Users'
      break;
      case '/contact':
        title = 'Contact'
      break;
      default:
        return title = 'Dashboard'
    }

    return title
}