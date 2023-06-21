class cAppDate {

    constructor() {}

    getDays(y, m) {

        const date = new Date(y, m, 0)
        return date.getDate()

    }

    getCurrentDate() {

        const date = new Date()
        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDay()
        }

    }

    getDaysName() {

        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        
    }

}

const appDate = new cAppDate()
export { appDate }