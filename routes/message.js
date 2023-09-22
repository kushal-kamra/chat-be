import express from 'express';
import createCompletion from '../api/openApi.js';
var router = express.Router();

/* GET messages */
router.get('/', function(req, res, next) {
  res.send('fetching messages');
});

// POST message
router.post('/', async function(req, res, next){
  const result = await createCompletion(req.body.input);
  res.status(200).json({ result: result});
});

export default router;
