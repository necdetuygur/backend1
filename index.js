const uc = require("./UserController");
const ul = require("./UserLogic");

console.log("Ekle");
const added = ul.Add({ ad: "Ahmet", soyad: "Yılmaz", yas: "25" });
console.log("Eklendi");

console.log("ID'si", added.id);

console.log("Data", ul.Get(added.id));
console.log("Tüm Data", ul.GetAll());

console.log("Güncelle");
ul.Update(added.id, "Mehmet", "Can", "26");
console.log("Güncellendi");

console.log(ul.Get(added.id));

console.log("Sil");
ul.Remove(added.id);
console.log("Silindi");

console.log("Tüm Data", ul.GetAll());
