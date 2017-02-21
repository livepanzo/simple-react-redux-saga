const PROXY_PASS = {
  '/api': {
    target: 'localhost:8080',
    secure: false,
  },
  '/adm': {
    target: 'localhost:8081',
    secure: false,
  },
  '/cli': {
    target: 'localhost:8084',
    secure: false,
  },
  '/emails': {
    target: 'localhost:8086',
    secure: false,
  },
}

module.exports = PROXY_PASS
