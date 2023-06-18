var intervalID = 0

onmessage = (m) => {

    if(m.data) {
        intervalID = setInterval(() => {postMessage(true)}, 1000)
    } else clearInterval(intervalID)

}