const Techs = require('../../model/Crud/Techs');
const Reviews = require('../../model/Crud/Reviews');
const Courses = require('../../model/Crud/Courses')
const Lessons = require('../../model/Crud/Lessons');
const toDelete = require('../../utils/toDelete');

module.exports = {
    index: async (req, res) => {
        res.render('admin/crud/index', {
            layout: 'admin',
            admin: req.session.admin
        })
    },
    techs: {
        getAll: async (req, res) => {
            const techs = await Techs.find();

            res.render('admin/crud/techs', {
                layout: 'admin',
                techs
            })
        },
        addNew: async (req, res) => {
            if (!req.file) {
                res.redirect('/admin/crud/techs');
                return;
            }

            req.body.img = req.file.filename
            const tech = new Techs(req.body);

            try {
                await tech.save();
            } catch (error) {
                console.log(error);
            }

            res.redirect('/admin/crud/techs');
        },
        deleteOne: async (req, res) => {
            try {
                const tech = await Techs.findByIdAndDelete(req.params.id);
                toDelete(tech.img).then(() => console.log(`File deleted: ${tech.img}`)).catch(() => console.log(`Error file not deleted: ${tech.img}`))
            } catch (error) {
                console.log(error);
            }
            res.redirect('/admin/crud/techs');
        }
    },
    reviews: {
        getAll: async (req, res) => {
            const reviews = await Reviews.find();

            res.render('admin/crud/reviews', {
                layout: 'admin',
                reviews
            })
        },
        addNew: async (req, res) => {
            if (!req.file) {
                res.redirect('/admin/crud/reviews');
                return;
            }

            req.body.img = req.file.filename
            const review = new Reviews(req.body);

            try {
                await review.save();
            } catch (error) {
                console.log(error);
            }

            res.redirect('/admin/crud/reviews');
        },
        deleteOne: async (req, res) => {
            try {
                const review = await Reviews.findByIdAndDelete(req.params.id);
                toDelete(review.img).then(() => console.log(`File deleted: ${review.img}`)).catch(() => console.log(`Error file not deleted: ${review.img}`))
            } catch (error) {
                console.log(error);
            }
            res.redirect('/admin/crud/reviews');
        }
    },
    courses: {
        getAll: async (req, res) => {
            const courses = await Courses.find();

            res.render('admin/crud/courses/courses', {
                layout: 'admin',
                courses
            })
        },
        addNew: async (req, res) => {
            if (!req.files || !req.files.bg || !req.files.img || !req.files.learns_img) {
                res.redirect('/admin/crud/courses');
                return;
            }

            req.body.bg = req.files.bg[0].filename;
            req.body.img = req.files.img[0].filename;
            req.body.learns_img = []

            req.files.learns_img.forEach(item => {
                req.body.learns_img.push(item.filename);
            });

            const course = new Courses(req.body);

            try {
                await course.save();
            } catch (error) {
                res.json(error);
                return
            }

            res.redirect('/admin/crud/courses');
        },
        deleteOne: async (req, res) => {
            try {
                const course = await Courses.findByIdAndDelete(req.params.id);
                function deleteImg(img) {
                    toDelete(img).then(() => console.log(`File deleted: ${img}`)).catch(() => console.log(`Error file not deleted: ${img}`))
                }

                deleteImg(course.img);
                deleteImg(course.bg);

                course.learns_img.forEach((img) => {
                    deleteImg(img);
                })
            } catch (error) {
                console.log(error);
            }
            res.redirect('/admin/crud/courses');
        }
    },
    lessons: {
        getAll: async (req, res) => {
            const lessons = await Lessons.find();

            res.render('admin/crud/lessons', {
                layout: 'admin',
                lessons
            });
        },
        addNew: async (req, res) => {
            const lesson = new Lessons(req.body);

            try {
                await lesson.save();
            } catch (error) {
                console.log(error);
            }

            res.redirect('/admin/crud/lessons');
        },
        deleteOne: async (req, res) => {
            try {
                const lesson = await Lessons.findByIdAndDelete(req.params.id);
            } catch (error) {
                console.log(error)
            }
            res.redirect('/admin/crud/lessons');
        }
    }
}