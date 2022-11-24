/// [asyncFunc]

function asyncFunc(func) {
  const randomTime = Math.random() * 3000
  setTimeout(() => {
    func()
    console.log(randomTime)
  }, randomTime)
}

module.exports = { asyncFunc }
