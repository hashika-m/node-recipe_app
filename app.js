import express from 'express'
import recipeRoutes from './routes/recipeRoutes.js'

const app=express()

// middlewares
app.use(express.json())
app.use('/api/recipes',recipeRoutes)

app.get('/',(req,res)=>{
    res.send('Recipe api running')
})

export default app