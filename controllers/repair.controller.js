const Repair = require('../models/repairs.models');

exports.findAllRepairs = async (req, res) => { // muestra todas las reparaciones
  try {
    const repairs = await Repair.findAll({
      attributes: ['id', 'date', 'userId'],
      where: {
        status: 'pending',
      },
    });

    return res.status(200).json({
      status: 'success',
      repairs,
    });
  } catch {
    return res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront! 🧨',
    });
  }
};
exports.findOneRepair = async (req, res) => {// muestra una repacion por id solicitado
  try {
    const { repair } = req;

    return res.status(200).json({
      status: 'success',
      repair,
    });
  } catch {
    return res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront! 🧨',
    });
  }
};
exports.createRepair = async (req, res) => { // crea una neva reparaccion
  try {
    const { date, userId,motorNumber,description } = req.body;

    const repair = await Repair.create({ date, userId,motorNumber,description });

    return res.status(201).json({
      status: 'success',
      message: 'Created Repair',
      repair,
    });
  } catch {
    return res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront! 🧨',
    });
  }
};
exports.updateRepair = async (req, res) => { //se encarga de actualizar el status de una reparaccion
  try {
    
    const { repair } = req;
    const { status } = req.body;


    await repair.update({ status });

    return res.status(200).json({
      status: 'success',
    });
  } catch {
    return res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront! 🧨',
    });
  }
};
exports.deleteRepair = async (req, res) => {  //se encarga de eliminar una reparacion
  try {
    const { repair } = req;


    await repair.update({ status: 'cancelled' });

    return res.status(200).json({
      status: 'success',
    });
  } catch {
    return res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront! 🧨',
    });
  }
};
