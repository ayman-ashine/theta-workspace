var intervalID = 0

onmessage = (m) => {

    if(m.data) clock()
    else clearInterval(intervalID)

}

function clock() {

    intervalID = setInterval(() => {
        postMessage(); console.log('clock')
    }, 1000)

}