const express = require ('express');
const router = express.Router();

const {getallDetails, postDetails, getoneDetail,updateUser,deleteUser} = require('../controller/detailController');

router.route('/').get(getallDetails).post(postDetails);
router.route('/:id').get(getoneDetail).patch(updateUser).delete(deleteUser);

module.exports = router;