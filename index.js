const express = require('express')
const app = express()
const notifier = require('node-notifier');
const path = require('path');
const fs = require('fs')



app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.render('index')
})

let otpcode = Math.floor(Math.random() * 9999) + 1000
console.log(otpcode)
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

app.post('/otp-code', (req, res) =>{

    let otp_code = req.body.otp_code
    console.log(otp_code)
    if(otpcode == otp_code){
        notifier.notify(
            {
              title: 'OTP-CODE',
              message: 'OTP ACCESS GRANTED',},
            function (err, response, metadata) {}
          );
          notifier.on('click', function (notifierObject, options, event) {
            // Triggers if `wait: true` and user clicks notification
          });
          
          notifier.on('timeout', function (notifierObject, options) {
            // Triggers if `wait: true` and notification closes
          })}
    else{
        notifier.notify(
            {
              title: 'OTP-CODE',
              message: 'OTP ACCESS DENIED',},
            function (err, response, metadata) {}
          );
          notifier.on('click', function (notifierObject, options, event) {
            // Triggers if `wait: true` and user clicks notification
          });
          
          notifier.on('timeout', function (notifierObject, options) {
            // Triggers if `wait: true` and notification closes
          });
    }
    fs.writeFileSync('code.txt', `${year}`+ `-`+`${month}`+ `-` + `${date}\nOTP-CODE: ${otpcode}\nSUBMITTED CODE: ${otp_code}\n\n`)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT http://localhost:${PORT}`)
})



