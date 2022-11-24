/// [asyncFunc]

function asyncFunc(func) {
  const randomTime = Math.random() * 3000
  setTimeout(() => {
    func()
  }, randomTime)
}

module.exports = { asyncFunc }
