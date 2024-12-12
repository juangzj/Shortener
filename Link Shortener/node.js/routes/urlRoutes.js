import express from 'express'; // express import
import { createUrl, deleteUrl, getAllUrls, getUrl } from '../controllers/UrlController.js';

const urlRouter = express.Router();

urlRouter.get('/getUrls', getAllUrls); // get all url´s
urlRouter.post('/createUrl', createUrl);// crete url
urlRouter.get('/getUrl', getUrl)// get url by id
urlRouter.delete('/deleteUrl', deleteUrl) // delete url by id or title



export default urlRouter;