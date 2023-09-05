const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const hashPass = require('../middlewares/hashPassMiddle');
const checkToken = require('../middlewares/checkToken');
const validators = require('../middlewares/validators');
const userController = require('../controllers/userController');
const contestController = require('../controllers/contestController');
const chatController = require('../controllers/chatController');
const upload = require('../utils/fileUpload');
const offersRouter = require('./offersRouter');
const contestsRouter = require('./contestsRouter');
const usersRouter = require('./usersRouter');

const router = express.Router();

router.use('/offers', offersRouter);
router.use('/contests', contestsRouter);
router.use('/users', usersRouter);

router.post(
  '/registration',
  validators.validateRegistrationData,
  hashPass,
  userController.registration,
);

router.post('/login', validators.validateLogin, userController.login);

// ------------- CONTESTS ------------------------------------
// GET /contests/data

router.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest,
);

// POST /contests
router.post(
  '/pay',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment,
);

// GET /users/:id/contests
router.post('/getCustomersContests');

// GET /contests/:id
// router.get(
//   '/getContestById',
//   checkToken.checkToken,
//   basicMiddlewares.canGetContest,
//   contestController.getContestById,
// );

// GET /contests
router.post(
  '/getAllContests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests,
);

// PATCH /contests
router.post(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);


// --------------------------

router.post('/getUser', checkToken.checkAuth);

router.post(
  '/updateUser',
  checkToken.checkToken,
  upload.uploadAvatar,
  userController.updateUser,
);

router.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

router.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

router.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);

router.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);

router.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout,
);

// -------------------------------------------------

router.post('/newMessage', checkToken.checkToken, chatController.addMessage);

router.post('/getChat', checkToken.checkToken, chatController.getChat);

router.post('/getPreview', checkToken.checkToken, chatController.getPreview);

router.post('/blackList', checkToken.checkToken, chatController.blackList);

router.post('/favorite', checkToken.checkToken, chatController.favoriteChat);

// -------------------------------------------------

router.post(
  '/createCatalog',
  checkToken.checkToken,
  chatController.createCatalog,
);

router.post(
  '/updateNameCatalog',
  checkToken.checkToken,
  chatController.updateNameCatalog,
);

router.post(
  '/addNewChatToCatalog',
  checkToken.checkToken,
  chatController.addNewChatToCatalog,
);

router.post(
  '/removeChatFromCatalog',
  checkToken.checkToken,
  chatController.removeChatFromCatalog,
);

router.post(
  '/deleteCatalog',
  checkToken.checkToken,
  chatController.deleteCatalog,
);

router.post('/getCatalogs', checkToken.checkToken, chatController.getCatalogs);

module.exports = router;
