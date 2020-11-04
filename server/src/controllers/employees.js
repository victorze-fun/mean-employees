const Employee = require('../models/Employee')

async function index(req, res) {
  const employees = await Employee.find()
  res.json(employees)
}

async function store(req, res) {
  const employee = new Employee(req.body)
  await employee.save()
  res.send({message: 'Employee created'})
}

async function show(req, res) {
  const employee = await Employee.findById(req.params.id)
  res.json(employee)
}

async function update(req, res) {
  await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.json({status: 'Employee updated'})
}

async function destroy(req, res) {
  await Employee.findByIdAndDelete(req.params.id)
  res.json({status: 'Employee deleted'})
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}
