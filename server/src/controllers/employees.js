function index(req, res) {
  res.send("Get employees")
}

function store(req, res) {
  res.send("Store employees")
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
