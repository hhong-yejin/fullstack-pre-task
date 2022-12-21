const express = require('express');
const router = express.Router();

const asyncWrapper = require('../../context/asyncWrapper');
const { profile_card: ProfileCard } = require('../../models');

router.get('/', asyncWrapper(async (req, res) => {
  const list = await ProfileCard.findAll();

  res.json({
    data: {
      profileList: list,
    },
  });
}));

router.post('/', asyncWrapper(async (req, res) => {
  const {
    name,
  } = req.body;
  if (!name) throw new Error('name is required');

  const result = await ProfileCard.create({
    name,
  });

  res.json({ data: {
      result
    }});
}));

router.put('/update', asyncWrapper(async (req, res) => {
  const {
    id,
    name,
    nickname,
    phoneNumber,
    email,
    birth,
    address,
    gender,
  } = req.body;
  if (!id) throw new Error('id is required');
  if (!name) throw new Error('name is required');

  const result = await ProfileCard.update({
    name,
    nickname,
    phoneNumber,
    email,
    birth,
    address,
    gender,
  }, {
    where: {
      id: id,
    }
  });

  res.json({ data: {
      result
    }});
}));

module.exports = router;
