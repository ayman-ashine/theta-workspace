// Save and Load user local data //

const DATA_NAME = 'user'

export function LocalLoadData() {
    
    return localStorage.getItem(DATA_NAME) ? JSON.parse(localStorage.getItem(DATA_NAME)) : []

}

export function LocalSaveData(_data) {

    localStorage.setItem(DATA_NAME, JSON.stringify(_data))

}