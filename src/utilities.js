export const dataOrg = (obj) => {
    const objKeys = Object.keys(obj)
    const result = objKeys.map((key) => {
      return obj[key]
    })
    return result
  }

  