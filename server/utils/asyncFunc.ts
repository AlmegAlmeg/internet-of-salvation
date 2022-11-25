export function asyncFunc(func: Function): void {
  const randomTime = Math.random() * 3000
  setTimeout(() => {
    func()
  }, randomTime)
}
