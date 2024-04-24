import express from 'express'
const app = express()


app.get('/TheBlog/Page1', (req,res) => {
    res.send('working')
})

const path = 'http://localhost:5173/TheBlog/Page1'
app.listen(path)