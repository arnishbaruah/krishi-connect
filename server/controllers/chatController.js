// controllers/chatController.js
const Message = require('../model/Message');

exports.getMessages = (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) {
      console.error('Error fetching messages from the database');
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(messages);
    }
  });
};

exports.saveMessage = (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Message text is required' });
  }

  const newMessage = new Message({ text });
  newMessage.save((err, savedMessage) => {
    if (err) {
      console.error('Error saving message to the database');
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json(savedMessage);
    }
  });
};
