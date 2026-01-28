import Recipe from "../models/Recipe.js";

// CREATE :createRecipe
export const createRecipe =async(req,res)=>{
    try{
       const recipe=await Recipe.create(req.body)
       res.status(201)
       res.json(recipe)
    }catch(err){
       res.status(404)
       res.json({message:err.message});
    }
    
}

// READ ALL:getAllRecipes

export const getAllRecipes= async(req,res)=>{
    try{
        const recipes=await Recipe.find()
        res.status(200)
        res.json(recipes)
    }catch(err){
       res.status(404)
       res.json({message:err.message})
    }
}

// READ ONE: getRecipeById

export const getRecipeById=async(req,res)=>{
    try{
       const recipe=await Recipe.findById(req.params.id)
       if(!Recipe){
         res.status(404)
         res.json({message:'Recipe not found'})
       }else{
        res.status(200)
        res.json(recipe)
       }
    }catch(err){
       res.status(404)
       res.json({message:'Invalid id'|| err.message})
    }
}

// UPDATE:updateRecipe

export const updateRecipe=async(req,res)=>{
    try{
       const recipe=await Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true})
       if(!recipe){
         res.status(404)
         res.json({message:'Recipe not found so no updation'})
       }else{
        res.status(200)
        res.json(recipe)
       }
    }catch(err){
       res.status(404)
       res.json({message:err.message})
    }
}

// DELETE:deleteRecipe

export const deleteRecipe=async(req,res)=>{
    try{
      const recipe=await Recipe.findByIdAndDelete(req.params.id)
      if(!recipe){
        res.status(404)
        res.json({message:'Recipe not found'})
      }else{
        res.status(200)
        res.json({message:'Recipe deleted successfully'})
      }
    }catch(err){
       res.status(404)
       res.json({message:err.message})
    }
}