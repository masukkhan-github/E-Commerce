const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Acb8qSUIJHF7kCXpFQ-_oQaE5f6WNnyqjOqkRrVyRghs1JgGViuDPHbgZs0yFGbP1-pm16Je8DdDuJNS",
  client_secret: "EHf8RCW2ADqigyfPsFKPER9-nrENgaQaW__MK_FnkKEq6dzFApCx5e8QEDZ9iVhH7X_q6SGRbaGQTa5z",
});

module.exports = paypal;
