function findAddress(obj) {
  // Check if the object has all three properties
  if (
    obj.hasOwnProperty("city") &&
    obj.hasOwnProperty("country") &&
    obj.hasOwnProperty("postcode")
  ) {
    return `City: ${obj.city} | Country: ${obj.country} | Postcode: ${obj.postcode}`;
  } else {
    const city = obj.hasOwnProperty("city") ? obj.city : "__";
    const country = obj.hasOwnProperty("country") ? obj.country : "__";
    const postcode = obj.hasOwnProperty("postcode") ? obj.postcode : "__";

    return `City: ${city} | Country: ${country} | Postcode: ${postcode}`;
  }
}

const address1 = { city: "Dhaka", country: "Bangladesh", postcode: "12345" };
console.log(findAddress(address1));

const address2 = { city: "New York", postcode: "67890" };
console.log(findAddress(address2));
