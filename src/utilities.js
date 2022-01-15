export const dataOrg = (obj) => {
    const objKeys = Object.keys(obj)
    const result = objKeys.map((key) => {
      return obj[key]
    })
    return result
  }

  export const findCurrentCritters = (arr, time, hemi) => {
    const result = arr.filter((critter) => {
        return critter.availability[`month-array-${hemi}`].includes(time.getMonth() + 1)
    }).filter((critter) => {
        return critter.availability['time-array'].includes(time.getHours())
    })
    return result
}
  