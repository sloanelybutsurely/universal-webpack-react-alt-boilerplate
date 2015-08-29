const FIXTURES = {
  1: {
    text: 'Start template',
    completed: true
  },
  2: {
    text: 'Add alt stores and such',
    completed: false
  },
  3: {
    text: 'Bootstrap data from the server render',
    completed: false
  }
}

const api = {
  getTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(FIXTURES), 100)
    })
  }
}

export default api
