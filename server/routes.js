const express = require('express'),
  router = express.Router();

router.get('/api/hello', (req, res, next) => {
  res.json('Mario World');
});

export default router;
