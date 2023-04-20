const ul = require("./UserLogic");

const UserController = (app) => {
  // Add
  app.post("/user", (req, res) => {
    console.log(req.body);
    const { ad, soyad, yas } = req.body;
    console.log(ad, soyad, yas);
    const added = ul.Add({ ad, soyad, yas });
    res.send(added);
  });

  // Get
  app.get("/user/:id", (req, res) => {
    const user = ul.Get(req.params.id);
    res.send(user);
  });

  // GetAll
  app.get("/user", (req, res) => {
    const users = ul.GetAll();
    res.send(users);
  });

  // Update
  app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const { ad, soyad, yas } = req.body;
    const updated = ul.Update(id, ad, soyad, yas);
    res.send(updated);
  });

  // Remove
  app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    const deleted = ul.Remove(id);
    res.send(deleted);
  });
};

module.exports = UserController;
