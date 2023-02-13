const { Router } = require('express');
const {
  findAllUsers,
  findOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controllers');
const { finderId } = require('../middlewares/user.middleware');

const router = Router();

router.get('/', findAllUsers);

router.get('/:id',finderId, findOneUser);

router.post('/', createUser);

router.patch('/:id',finderId, updateUser);

router.delete('/:id',finderId, deleteUser);

module.exports = {
  userRouter: router,
};
