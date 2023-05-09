// Save and Load user data localy

export function LocalLoadData() {
    
    return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []

}

export function LocalSaveData(data) {

    localStorage.setItem('data', JSON.stringify(data))

}