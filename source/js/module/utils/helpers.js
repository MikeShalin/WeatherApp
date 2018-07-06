export const unixToTime = (unix) => {
  const date = new Date(unix * 1000)
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const addToStorage = (name, param) => {
  localStorage.setItem(name, JSON.stringify(param))
}