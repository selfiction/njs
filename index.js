const fs = require('fs')
const http = require('http')

const PORT = 3000
const HOST = '127.0.0.1'

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    const stream = fs.createReadStream('./index.html')
    stream.pipe(res)
})

let otp_code = Math.floor(Math.random() * 9999) + 1000;

fs.writeFile('./code.txt', parseInt(otp_code).toString(), (err) => {
    if (err){
        console.log('OTP FAILURE')
    }
    console.log('OTP GENERATED')
})
console.log(otp_code)

server.listen(PORT, HOST, () => {
    console.log(`SERVER STARED AT http://${HOST}:${PORT}`)
})

