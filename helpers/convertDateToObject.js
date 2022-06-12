export const convertDateToObject = (input) => {
    const date = new Date(input)
    
    let object = {
      day: date.getUTCDate(),
      month: date.getUTCMonth() + 1,
      year: date.getFullYear(),
      date: `${String(date.getUTCDate()).padStart(2, '0')}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`,
      hour: date.getHours(),
      minutes: date.getMinutes(),
      time: `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    }
    
    return object
}