const Employee = require('../models/Employee')

async function index(req, res) {
  const employees = await Employee.find()
  res.json(employees)
}

function store(req, res) {
  console.log(req.body)
  res.send('store employee')
}

function show(req, res) {

}

function update(req, res) {

}

function destroy(req, res) {

}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}
