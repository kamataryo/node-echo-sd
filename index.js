const { promisify } = require('util')
const { execFile } = require('child_process')
const exec = promisify(execFile)
const BIN = `${__dirname}/${require('./package.json').bin}`

module.exports = (...args) =>
  exec(BIN, args)
    .then(({ stdout }) => stdout)
    .catch(err => {
      throw err
    })
