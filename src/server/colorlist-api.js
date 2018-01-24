import { Router } from 'express';
import { v4 } from 'uuid';

const router = Router();

// helper dispather
const serverDispatch = (req, res, action) => {
  req.store.dispatch(action);
  res.status(200).json(action);
};


router.get('/colors', (req, res) => {
  console.log('get request data a:', req.body);

  res.status(200).json(req.store.getState().colors);
});

// POST

router.post('/colors', (req, res) => {
  console.log('posted request data:', req.body);
  serverDispatch(req, res, {
    type: 'ADD_COLOR',
    id: v4(),
    color: req.body.color,
    timestamp: new Date().toString(),
    title: req.body.title,
  });
});
// PUT

router.put('/colors:id', (req, res) => {
  serverDispatch(req, res, {
    type: 'RATE_COLOR',
    id: req.params.id,
    rating: parseInt(req.body.rating, 10),
    // req.body.[param] always returns string that must be converted to string
  });
});

// DELETE

router.delete('/colors:id', (req, res) => {
  serverDispatch(req, res, {
    type: 'DELETE_COLOR',
    id: req.params.id,
  });
});

export default router;
