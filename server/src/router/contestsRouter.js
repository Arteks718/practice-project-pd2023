const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const contestController = require('../controllers/contestController');

const contestsRouter = Router();

contestsRouter.get(
  '/byCustomer',
  checkToken.checkToken,
  contestController.getCustomersContests,
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

// // GET /users/:id/contests
// router.post('/getCustomersContests');

// // GET /contests/:id
// router.get(
//   '/getContestById',
//   checkToken.checkToken,
//   basicMiddlewares.canGetContest,
//   contestController.getContestById,
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
