const {knex, bookshelf} = require('./database');


// Queries

//Users

const addNewUser = (newUser) => {
  return User.forge({name: newUser}).save()
}

//Faves

const addNewFave = (fave, user) => {
  return Favorite.forge({user_id: user, show_id: fave}).save()
}

const getMyFaves = (id) => {
  console.log("userid", is);



  let user = User.forge().query({where: {'id': id}})
  return user.fetch({withRelated: ['favoriteShows'], require: true})
  .then ((user)=> {
    return JSON.stringify(user.relations.favoriteShows)
  })
  .catch((err)=> {
    throw err;
  })
}

module.exports = {
  addNewUser,
  addNewFave,
  getMyFaves
}
