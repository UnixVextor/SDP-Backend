import express from 'express';
import * as attractionController from '../controllers/attractionController';

export const attractionRouter = express.Router();

attractionRouter.get ('/Nature',attractionController.getNature);
attractionRouter.get ('/History',attractionController.getHistory);
attractionRouter.get ('/Activity',attractionController.getActivity);
attractionRouter.get ('/Cafe',attractionController.getCafe);
attractionRouter.get ('/Others',attractionController.getOthers);
 