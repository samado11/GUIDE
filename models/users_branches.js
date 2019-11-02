const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Users_branchesSchema = new Schema({

});

const Users_branches = mongoose.model('Users_branches', Users_branchesSchema);

module.exports = Users_branches;
