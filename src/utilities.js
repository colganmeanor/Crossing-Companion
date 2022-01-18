const nameCleaner = (string) => {
  const separatedWords = string.toLowerCase().split(' ');
   for (let i = 0; i < separatedWords.length; i++) {
      separatedWords[i] = separatedWords[i].charAt(0).toUpperCase() +
      separatedWords[i].substring(1);
   }
   return separatedWords.join(' ');
}

export const dataOrg = (obj) => {
    const objKeys = Object.keys(obj)
    const result = objKeys.map((key) => {
      return obj[key]
    }).map((obj) => {
      return {caught: false, displayName: nameCleaner(obj.name['name-EUen']), ...obj}
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
