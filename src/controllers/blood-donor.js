const express = require('express')
const router = express.Router()
const Donor = require('../models/donor')
const authorization = require('../controllers/user')

router.post('/add', async(req, res)=>{
  try{
    var donor = new Donor({
        first_name:req.body.first_name,
        last_name: req.body.last_name,
        contact:req.body.contact,
        blood_group: req.body.blood_group,
        age: req.body.age,
        address: req.body.address,
        gender: req.body.gender 
      })
     await Donor.create(donor)
      res.status(200).json({message:`User registerd successfully`})
    }catch(err){
     res.status(500).json({message:err.message})
    }
})

router.get('donor/list', async(req, res) =>{
  try{

       var donorlist = await Donor.find({})
       if(donorlist.length){
           return res.status(200).json({message:"Patient list", data:donorlist})
       }
       else{
           return res.status(200).json({message:"Patient list", data:[]})
       }

    }catch(err){
        res.status(500).json({message:err.message})
    }
})

router.delete('/delete/:id', async(req, res) =>{
    try{
        
           if(!req.params.id){
          return res.status(400).json({message:"User id is required"})
           }
            if(req.user.user_type != 'ADMIN')
            {
               return res.status(401).json({message:"Invalid request"})
            }
            var donor = await Donor.findById(req.params.id)
            // if(!(user.is_deleted))
            // {
            //   user.is_deleted = true
            if(donor){
                donor.is_deleted = true
              await user.save()
              res.status(200).json({message:'User deleted successfully'})
            }
            res.status(409).json({message:'User already deleted or not found'})
        }
    catch(err){
            res.status(500).json({message:err.message})
        }
    })

    router.get('/:id', authorization ,async(req, res) => {
        try{
          if(!req.params.id){
              res.status(400).json({message:'Please enter user id'})
          }
          var userdetail = await User.findById(req.params.id)
          if(userdetail){
              res.status(200).json({data: userdetail})
          }
          else{
              res.status(404).json({message:'Data not found'})
          }
        }catch(err){
            res.status(500).json({message: err.message})
        }
    })
    
    router.put('/:id', authorization, async(req,res) =>{
        try{
           if(req.body.password){
               return res.status(400).json({message:"Password can not be changed"})
           }
          var useredit = await User.findById(req.params.id)
          if(useredit){
                useredit.first_name = req.body.first_name
                useredit.last_name = req.body.last_name
                useredit.contact = req.body.contact
                useredit.address = req.body.address
                useredit.gender = req.body.gender
                // useredit.password = req.body.password
              }
           await useredit.save()
           res.status(200).json({message:'user details updated successfully'})
    
        }catch(err){
            res.status(500).json({message:err.message})
        }
    })

    module.exports = router
    