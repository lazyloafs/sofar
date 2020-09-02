import axios from "axios";

export default {
  // Gets all Coffeeshops
  getCoffeeshops: function() {
    return axios.get("/api/coffeeshops");
  },
  // Gets the Coffeeshop with the given id
  getCoffeeshop: function(id) {
    return axios.get("/api/coffeeshops/" + id);
  },
  // Deletes the Coffeeshop with the given id
  deleteCoffeeshop: function(id) {
    return axios.delete("/api/coffeeshops/" + id);
  },
  // Saves a Coffeeshop to the database
  saveCoffeeshop: function(CoffeeshopData) {
    return axios.post("/api/coffeeshops", CoffeeshopData);
  }
};
