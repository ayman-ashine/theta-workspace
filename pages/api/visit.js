// Visit Counter //

const fs = require('fs')
const fileName = 'visit.json'

export default function handler(req, res) {
    saveCount()
    res.status(200).json({ status: 200 })
}

function saveCount() {
    const date = new Date().toDateString()
    let visit = {}
    visit[date] = 1
    if (fs.existsSync(fileName)) {
        fs.readFile(fileName, (err, data) => {
            if (err) throw err
            visit = JSON.parse(data)
            if(visit[date]) visit[date]++
            else visit[date] = 1
            fs.writeFileSync(fileName, JSON.stringify(visit), function (err) {
                if (err) throw err
            })
        })
    } else {
        fs.writeFileSync(fileName, JSON.stringify(visit), function (err) {
            if (err) throw err
        })
    }
}
