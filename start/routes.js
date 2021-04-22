'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Public Users
Route.group(() => {
  Route.get('/', "PublicUserController.index")
  Route.get('/:id', "PublicUserController.findById")
  Route.post('/', "PublicUserController.create")
}).prefix('/PublicUser')

// Establishments
Route.group(() => {
  Route.get('/', "EstablishmentController.index")
  Route.get('/:id', "EstablishmentController.findById")
  Route.post('/', "EstablishmentController.create")
}).prefix('/Establishments')

// Houses
Route.group(() => {
  Route.get('/', "HouseController.index")
  Route.get('/:id', "HouseController.findById")
  Route.post('/', "HouseController.create")
}).prefix('/houses')
