/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UserController = () => import('#controllers/user_controller')

router.post('/register', [UserController, 'store'])
router.post('/login', [UserController, 'login'])
