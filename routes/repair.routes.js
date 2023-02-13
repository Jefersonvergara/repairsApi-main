const { Router } = require('express');
const {
  findAllRepairs,
  findOneRepair,
  createRepair,
  updateRepair,
  deleteRepair,
} = require('../controllers/repair.controller');
const { validateStatus } = require('../middlewares/repair.middleware');

const router = Router();

router.get('/', findAllRepairs,);

router.get('/:id',validateStatus, findOneRepair);

router.post('/', createRepair);

router.patch('/:id',validateStatus, updateRepair);

router.delete('/:id',validateStatus, deleteRepair);

module.exports = {
  repairRouter: router,
};
