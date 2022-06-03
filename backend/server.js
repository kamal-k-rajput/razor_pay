const app = require("./app");
const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_2fC6v21MCncPRX",
  key_secret: "oJgxVZM8wmC7BLnFnfvKf9e7",
});

app.listen(5500, () => {
  console.log(`listning on the port 5500`);
});

var options = {
  amount: 50000, // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11",
};
instance.orders.create(options, function (err, order) {
  console.log(order);
});
