import express, { Router, Request, Response } from 'express';
import { getNotes, getSingleNote } from '../controllers/notesControllers';
const router: Router = express.Router();

router.route('/').get(getNotes);
router.route('/:id').get(getSingleNote);

export default router;
