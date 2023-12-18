import express from 'express';
import { data } from '../services/services';
const router = express.Router();

router.get("/", async(req, res) => {
    const dateResponse = await data('data test');    
    res.send(dateResponse)
  });

module.exports = router;