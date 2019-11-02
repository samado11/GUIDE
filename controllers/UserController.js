var express = require('express');


const User = require('../models/User');

let userController = {
signup:function (req,res,next){
    try {
  
        const { name_ar,name_en,section,department,country,phone,branch_number,city_number,user_name, email, password, confirm_password } = req.body;
  
        // Simple validation
        if(!user_name || !email || !password) {
          return res.status(400).json({ msg: 'Please enter all fields' });
        }
        if(confirm_password != password) {
          return res.status(400).json({ msg: "passwords doesn't match" });
        }
  
        // Check for existing user
        User.findOne({ email })
          .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists' });
            const type = 'shop';
            const newUser = new User({
              name_ar,
              name_en,
              section,
              department,
              country,
              phone,
              branch_number,
              city_number,
              user_name,
              email,
              password,
              type,
            });
  
            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) next(err);
                newUser.password = hash;
                newUser.save()
                  .then(user => {
                    console.log('user ',user);
                    jwt.sign(
                      { id: user.id },
  
                      config.get('jwtSecret'),
                      { expiresIn: 3600 },
                      (err, token) => {
                        if(err) next(error);
                        res.json({
                          token,
                          user: {
                            id: user.id,
                            user_name: user.user_name,
                            email: user.email
                          }
                        });
                      }
                    )
                  }).catch(err => console.log('Error',err))
  
              })
            })
            console.log();
          }).catch(err => console.log('Error',err))
  console.log();
    } catch (e) {
      next(e)
    }
  },

  login : function (req,res,next){
    const { email, password } = req.body;
  
    // Simple validation
    if(!email || !password) {
      return res.status(200).json({ msg: 'Please enter all fields' });
    }
  
    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if(!user) return res.status(200).json({ msg: 'User Does not exist' });
  
        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(200).json({ msg: 'Invalid credentials' });
  
            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if(err) throw err;
                res.json({
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                });
              }
            )
          })
      })
  },

  showunified : function (req,res){
    const { id } = req.body;
    User.findOne({ _id :id})
    .then(user =>{
      res.json({
        user:{
          unified_number : user.unified_number
        }
      })
    })

},

updateunified : function (req,res,next){
    try {
     const { id,number } = req.body;
     User.findOneAndUpdate({ _id :id},{$set: {unified_number:number}},{new:true})
     .then(user =>{
       res.json({
         user:{
           unified_number : user.unified_number
         }
       })
     }).catch();
    } catch (error) {
      next(err)
    }
 
 },

  showtimes : function (req,res){
    const { id  } = req.body;
    User.findOne({ _id :id })
    .then(user =>{
      res.json({
        user:{
          name : user.times
        }
      })
    }).catch(err => console.log('Error',err))

},

updatetimes : async function (req,res){
    try {
        const { id,value } = req.body;
    let u = await User.findByIdAndUpdate(id,{times: value});
    res.send(u.times)
    } catch (error) {
        console.log(err);
    }
    
},

showsocial : function (req,res){
    const { id , name } = req.body;
    User.findOne({ _id :id })
    .then(user =>{
      res.json({
        user:{
          name : user.social_media[name]
        }
      })
    }).catch(err => console.log('Error',err))

},

updatesocial : function (req,res){
    const { id,key,value } = req.body;
    v1 = "social_media."
    v2 = key 
    v1 += v2
    console.log(v1)
    let query = {}
    query.$set = {}
    query.$set[v1]=value
    User.findOneAndUpdate({ _id :id},query,{new:true})
    .then(user =>{
      res.json({
        user:{
          name : user.social_media
        }
      })
    }).catch();
},

bulk : async function (req,res){
  const { id } = req.body;
  try {
    console.log('fileee ',req.files)
    for (let index = 0; index < req.files.length; index++) {
      let u = await User.update({ _id: id }, { $push: { images: req.files[index].path } });
        
    }
    res.send(u);
     

  }catch(err) {
    res.send("error");
  }
},

showabout : function (req,res){
  const { id } = req.body;
  User.findOne({ _id :id})
  .then(user =>{
    res.json({
      user:{
        arabic_about : user.about_ar,
        english_about : user.about_en
      }
    })
  })

},

updateabout : function (req,res){
  const { id,about_ar,about_en } = req.body;
  User.findOneAndUpdate({ _id :id},{$set: {aboutus_ar:about_ar,aboutus_en:about_en}},{new:true})
  .then(user =>{
    res.json({
      user:{
        about_ar : user.aboutus_ar,
        about_en : user.aboutus_en
      }
    })
  }).catch();

}
}
module.exports  = userController

