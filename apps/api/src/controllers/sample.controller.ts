import { Request, Response } from 'express';
import { PrismaClient } from '../../prisma/prisma/client';
import multer from 'multer';
import path from 'path';

const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    cb: Function,
  ) {
    cb(null, '../public');
  },
  filename: function (req: Request, file: Express.Multer.File, cb: Function) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
}).single('image');

export const uploadImage = (req: Request, res: Response) => {
  upload(req, res, (err: any) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    res.status(200).json({ message: 'File uploaded successfully' });
  });
};

export const saveEventData = async (req: Request, res: Response) => {
  const {
    eventTitle,
    organizer,
    eventType,
    location,
    dateAndTime,
    price,
    description,
    imgUrl,
  } = req.body;

  try {
    const savedEvent = await prisma.event.create({
      data: {
        eventTitle,
        organizer,
        eventType,
        location,
        dateAndTime: new Date(dateAndTime),
        price,
        description,
        imgUrl: req.file ? req.file.filename : null,
      },
    });
    console.log('Event data saved', savedEvent);
    res.json({ success: true });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ succes: false, error: 'Internal Server Error' });
  }
};
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const event = await prisma.event.findMany();
    res.json({ event });
  } catch (error) {
    console.error('Error saving event data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
