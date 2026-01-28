import mongoose from "mongoose";

const recipeSchema=new mongoose.Schema({
   
    title:{
        type:String,
        require:true
     },
    ingredients:{
        type:[String],
        require:true
     },
    instructions:{
        type:String,
        require:true
     },
    cookTime:{
        type:Number,
        
    }    

   
},{timestamps:true})

const Recipe=mongoose.model('Recipe',recipeSchema)
export default Recipe