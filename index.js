const express = require('express')
const app = express()
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('index')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT http://localhost:${PORT}`)
})



