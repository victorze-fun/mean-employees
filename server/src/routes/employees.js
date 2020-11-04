const { Router } = require('express')
const employeesController = require('../controllers/employees')

const router = Router()

router.get('/', employeesController.index)
router.post('/', employeesController.store)
router.get('/:id', employeesController.show)
router.put('/:id', employeesController.update)
router.delete('/:id', employeesController.destroy)

module.exports = router
