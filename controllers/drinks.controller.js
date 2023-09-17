const Drink = require("../models/Drink.model")

module.exports.drinksController = {

    getDrinks: (req, res) => {
        Drink.find()
          .then((data) => res.json(data))
          .catch((error) => res.json(error));
      },
    
      getAvailableDrinks: (req, res) => {
        Drink.find({available: true }, "price")
          .then((drinks) => res.json(drinks))
          .catch(() => res.json({ "error":"Ошибка при получении списка напитков в наличии" }));
      },
    
      getDrinkById: (req, res) => {
        Drink.findById(req.params.id)
          .then((drinks) => res.json(drinks))
          .catch(() => res.json({ "error":"Ошибка при получении информации о напитке" }));
      },

      addDrinks: (req, res) => {
        Drink.create({
            name, price, available, caffeine, volume, description
        })
          .then((drinks) => res.json(drinks))
          .catch(() => res.json({ "error":"Ошибка при добавлении нового напитка" }));
      },

      deleteDrinks: (req, res) => {
        Drink.findByIdAndRemove(req.params.id)
          .then((drinks) => res.json(drinks))
          .catch(() => res.json({ "error":"Ошибка при удалении напитка" }));
      },

      patchDrinks: (req, res) => {
        Drink.patch(req.params.id)
          .then((drinks) => res.json(drinks))
          .catch(() => res.json({ "error":"Ошибка при получении списка напитков" }));
      },

}