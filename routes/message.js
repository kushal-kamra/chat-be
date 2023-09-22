import express from 'express';
import createCompletion from '../api/openApi.js';
var router = express.Router();

/* GET messages */
router.get('/', function(req, res, next) {
  res.send('fetching messages');
});

// POST message
router.post('/', async function(req, res, next){
  return await createCompletion(req, res);
});

export default router;
