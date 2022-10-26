const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../context/asyncWrapper');
const { profile_card: ProfileCard } = require('../../models');

router.get('/', asyncWrapper(async (req, res) => {
  const list = await ProfileCard.findAll();

  res.json({
    list,
  });
}));

router.post('/', asyncWrapper(async (req, res) => {
  const {
    name,
    nickname,
    phoneNumber,
    email,
    birth,
    address,
    gender,
  } = req.body;
  const result = await ProfileCard.create({
    name,
    nickname,
    phoneNumber,
    email,
    birth,
    address,
    gender,
  });

  res.json({ data: {
      result
    }});
}));

module.exports = router;
