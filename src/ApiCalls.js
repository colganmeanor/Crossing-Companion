const apiCalls = {
    loadFish: () => {
        return fetch('https://acnhapi.com/v1/fish/')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    loadSeaCreatures: () => {
        return fetch('https://acnhapi.com/v1/sea/')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    loadBugs: () => {
        return fetch('https://acnhapi.com/v1/bugs/')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },
}

export default apiCalls