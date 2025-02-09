const db = require("../../../models/index");
const statusCode = require("../../../utils/statusCode");
const logger = require('../../../logger/logger.js')
let {encrypt} = require('../../../middlewares/encryption.middlewares.js')
const QueryTypes = db.QueryTypes;
const sequelize = db.sequelize;
const role = db.roles

const viewRole = async (req, res) => {
    try {
        console.log('1')
      let limit = req.body.page_size ? req.body.page_size : 50;
      let page = req.body.page_number ? req.body.page_number : 1;
      let offset = (page - 1) * limit;
      let showAllRoles = await role.findAll({});
  
      let givenReq = req.body.givenReq ? req.body.givenReq : null;
      if (givenReq) {
        showAllRoles = showAllRoles.filter(
          (roleData) =>
            roleData.roleCode?.toLowerCase().includes(givenReq) ||
            roleData.roleName?.toLowerCase().includes(givenReq)
        );
      }
      let paginatedShowAllRoles = showAllRoles.slice(offset, limit + offset);
      return res.status(statusCode.SUCCESS.code).json({
        message: "Show All roles",
        Role: encrypt(JSON.stringify((paginatedShowAllRoles))),
      });
    } catch (err) {
      logger.error(`An error occurred: ${err.message}`); // Log the error
  
      return res.status(statusCode.INTERNAL_SERVER_ERROR.code).json({
        message: err.message,
      });
    }
  };

  module.exports = {
    viewRole
  }