const controller = require('../controllers/story.controller');

module.exports = app => {
    app.prefix('/stories', (story) => {
        story.route('/').get(controller.getStories);
        story.route('/').post(controller.addNote);
        story.route('/:id').get(controller.getStory);
        story.route('/:id').delete(controller.delete);
    });
};