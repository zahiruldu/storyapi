const Story = require('../models/story.model');


exports.getStories = (req, res) => {

    //res.send({ message: 'Welcome to Node Boilerplate!' });

    Story.find({}).exec((err,result)=>{
    	if (err) {
    		res.status(400).send(err);
    	} else {
    		res.send(result);
    	}
    })
};

exports.addNote = (req, res) => {

	const newStory = new Story(req.body);
	newStory.save((err,result)=>{
		if (err) {
			res.send(err);
		} else {
			res.send(result)
		}
	});
   
};

exports.getStory = (req, res) => {

    

    Story.findOne({_id: req.params.id}).exec((err,result)=>{
    	if (err) {
    		res.status(400).send(err);
    	} else {
    		res.send(result);
    	}
    })
};

module.exports = exports;