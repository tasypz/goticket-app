import express from 'express';

import {
  getAllEvents,
  saveEventData,
  uploadImage,
} from '../controllers/sample.controller';

const router = express.Router();

router.post('/upload', uploadImage);
router.post('/save-event-data', saveEventData);
router.get('/get-events', getAllEvents);

export default router;
