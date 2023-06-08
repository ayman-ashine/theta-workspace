var intervalID = 0

onmessage = (m) => {

    if(m.data) {
        intervalID = setInterval(() => {postMessage(true); console.log('clock')}, 1000)
    } else clearInterval(intervalID)

}