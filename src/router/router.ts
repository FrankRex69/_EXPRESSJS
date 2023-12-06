import express from 'express';
import { data } from '../services/services';
const router = express.Router();

router.get("/", data);

module.exports = router;