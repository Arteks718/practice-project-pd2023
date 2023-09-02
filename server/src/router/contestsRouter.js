const { Router } = require('express');
const { queryParser} = require('express-query-parser')
const checkToken = require('../middlewares/checkToken');
const contestController = require('../controllers/contestController');
const basicMiddlewares = require('../middlewares/basicMiddlewares');

const contestsRouter = Router();

contestsRouter.get(
  '/byCustomer',
  checkToken.checkToken,
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true
  }),
  contestController.getCustomersContests,
);

contestsRouter.get(
  '/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);

// -------------------------

// router.post(
//   '/dataForContest',
//   checkToken.checkToken,
//   contestController.dataForContest,
// );

// // POST /contests
// router.post(
//   '/pay',
//   checkToken.checkToken,
//   basicMiddlewares.onlyForCustomer,
//   upload.uploadContestFiles,
//   basicMiddlewares.parseBody,
//   validators.validateContestCreation,
//   userController.payment,
// );


// // GET /contests
// // router.post(
// //   '/getAllContests',
// //   checkToken.checkToken,
// //   basicMiddlewares.onlyForCreative,
// //   contestController.getContests,
// // );

// // PATCH /contests
// router.post(
//   '/updateContest',
//   checkToken.checkToken,
//   upload.updateContestFile,
//   contestController.updateContest,
// );

module.exports = contestsRouter;
