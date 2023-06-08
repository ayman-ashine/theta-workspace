class _AppArchiveManager {

    constructor() {

        this.localData = {
            dataName: 'USER_ARCHIVE',
            dataInitialValue: {
                archiveFrames: [],
                archiveWorkspaces: [],
            },
            loaded: false
        }
        this.appArchive = null

    }

    archiveFrame = (dataFrame) => {

        this.appArchive.archiveFrames.push(dataFrame)
        this.save()

    }

    archiveWorkspace = (dataWorkspace) => {

        this.appArchive.archiveWorkspaces.push(dataWorkspace)
        this.save()

    }

    save() {

        localStorage.setItem(this.localData.dataName, JSON.stringify(this.appArchive))

    }

    load() {

        if(localStorage.getItem(this.localData.dataName)){
            this.appArchive = JSON.parse(localStorage.getItem(this.localData.dataName))
        } else {
            localStorage.setItem(this.localData.dataName, JSON.stringify(this.localData.dataInitialValue))
            this.appArchive = this.localData.dataInitialValue
        }

    }

    getArchive() {

        return appArchive

    }

}

export const AppArchiveManager = new _AppArchiveManager()