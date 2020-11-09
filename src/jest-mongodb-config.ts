module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '3.6.20',
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    },
    autoStart: false
  },
  mongodbMemoryServer: {
    version: 'latest'
  }
}
