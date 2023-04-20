/*

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

*/

const Users = {
  DB: [], // {id: "", ad:"", soyad: "", yas: ""}

  Add(data) {
    const suan = new Date().getTime();
    const rnd = ~~(Math.random() * 9999 + 1000);
    data.id = suan + "" + rnd;
    this.DB.push(data);
    return data;
  },

  Get(id) {
    return this.DB.find((u) => u.id == id);
  },

  GetAll() {
    return this.DB;
  },

  Update(id, ad, soyad, yas) {
    this.Get(id).ad = ad;
    this.Get(id).soyad = soyad;
    this.Get(id).yas = yas;
  },

  Remove(id) {
    this.DB = this.DB.filter((u) => u.id != id);
  },
};

module.exports = Users;
