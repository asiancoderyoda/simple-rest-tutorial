const DetailSchema = require('../models/DetailSchema.js');

//GET all user details
exports.getallDetails = async (req, res, next) => {
    try {
        const details = await DetailSchema.find();
        return res.status(200).json({
            success: true,
            count: details.length,
            data: details
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

//GET one user detail
exports.getoneDetail = async(req, res) => {
    try {
        const user = await DetailSchema.findById(req.params.id)
        
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'User does not exist'
        });
    }
}

//POST user detail
exports.postDetails = async (req, res, next) => {
    const detail = new DetailSchema({
        name: req.body.name,
        email: req.body.email
    })
    try {
        const newDetail = await detail.save()
        res.status(201).json({
            success: true,
            data: newDetail
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message
        });
    }
}

//PUT or PATCH user detail
exports.updateUser = async(req, res) => {
    try {
        const user = await DetailSchema.findById(req.params.id)
        
        if(req.body.name != null) {
            user.name = req.body.name
        }
        if(req.body.email != null) {
            user.email = req.body.email 
        }
        
        const updateuser = await user.save()
        
            return res.status(200).json({
                success: true,
                data: updateuser
            })
        
    } catch (err) {
        return res.status(500).json({message: "Server Error"})
    }
}

//DELETE user detail
exports.deleteUser = async(req, res) => {
    try {
        const user = await DetailSchema.findById(req.params.id)
        
            await user.remove();
            res.status(200).json({
                success: true,
                data: {}
            })
        
    } catch (err) {
        return res.status(500).json({message: "User not found"})
    }
}



