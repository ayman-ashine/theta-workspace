// Visit Counter //

const fs = require('fs')
const fileName = 'visit.json'

export default function handler(req, res) {
    if (req.query.path === 'admin') getCount(req, res)
    else saveCount(req, res)
}

function getCount(req, res) {
    fs.readFile(fileName, (err, data) => {
        if (err) throw err
        res.status(200).json(data ? JSON.parse(data) : {})
    })
}

function saveCount(req, res) {
    const date = new Date().toDateString()
    let visit = {}
    visit[date] = 1
    if (fs.existsSync(fileName)) {
        fs.readFile(fileName, (err, data) => {
            if (err) throw err
            visit = JSON.parse(data)
            if (visit[date]) visit[date]++
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
    res.status(200).json({ status: 200 })
}
