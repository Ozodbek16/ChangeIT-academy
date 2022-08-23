const express = require('express');
const router = express.Router();
const crud = require('../../controllers/admin/crud');
const upload = require('../../middleware/admin/upload');

router.get('/', crud.index)

// techs
router.get('/techs', crud.techs.getAll)
router.post('/techs/addNew', upload.single('img'), crud.techs.addNew);
router.get('/techs/delete/:id', crud.techs.deleteOne);

// reviews
router.get('/reviews', crud.reviews.getAll);
router.post('/reviews/addNew', upload.single('img'), crud.reviews.addNew);
router.get('/reviews/delete/:id', crud.reviews.deleteOne);

// courses
router.get('/courses', crud.courses.getAll);
router.post('/courses/addNew', upload.fields([{ name: 'bg', maxCount: 1 }, { name: 'img', maxCount: 1 }, { name: 'learns_img' }]), crud.courses.addNew);
router.get('/courses/delete/:id', crud.courses.deleteOne);

// lessons
router.get('/lessons', crud.lessons.getAll);
router.post('/lessons/addNew', crud.lessons.addNew);
router.get('/lessons/delete/:id', crud.lessons.deleteOne);

module.exports = router;