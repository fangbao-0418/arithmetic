var urls = ['http://1', 'http://2', 'http://3', 'http://4', 'http://5'];

function _fetch(url) {
    const r = Math.round(Math.random())
    console.log(r, 'rrrr')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            r === 1 ? resolve(url) : reject();
        }, Math.random() * 1000)
    })
}

var requestControl = function(urls, max, callback){
    let i = 0
    const count = urls.length
    const rows = []
    let reqCount = 0
    let successCount = 0
    function loopRequest () {
        if (!urls.length) {
            return
        }
        const url = urls.shift()
        reqCount++
        _fetch(url).then((res) => {
            successCount++
            rows.push(res)
            if (rows.length >= count) {
                callback(rows, successCount, reqCount - successCount)
                return
            }
            loopRequest()
        }, () => {
            urls.push(url)
            loopRequest()
        })
    }
    while (i < max) {
        loopRequest()
        i++
    }
}

requestControl (urls, 3, (rows, successNum, failNum) => {
    console.log(rows, successNum, failNum, 'request end')
})


