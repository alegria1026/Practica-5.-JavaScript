

// convert comma-separated values into an array
const countries = csv.split(",");

// convert array into delimited string
const countriesString = countries.join(" | ");

// check if these are arrays
console.log(Array.isArray(csv));
console.log(Array.isArray(countries));  

//  sort a simple array 
countries.sort();
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift("Spain", "Brazil");
console.log(countries);

// search for element
console.log("¿Incluye Germany?:", countries.includes("Germany"));

// search for element index
console.log("Índice de Germany:", countries.indexOf("Germany"));

// make a new array by extracting from another array
const newCountries = countries.splice(1, 3);
console.log(newCountries);

console.log('---------------------');

// use a loop to output all cities whose continent=="NA"
for (let c of cities) {
  if (c.continent === "NA") {
    console.log(c.city);
  }
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let g of galleries) {
  if (g.location.country === "USA") {
    console.log(g.name);
  }
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let color of colors) {
  if (color.luminance < 75) {
    console.log(color.name);
  }
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors
for (let color of colors) {
  let sum = 0;
  for (let value of color.rgb) {
    sum += value;
  }
  console.log(`${color.name}: suma RGB = ${sum}`);
}

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */
document.write("<ul>");
for (let g of galleries) {
  document.write(`<li><a href="${g.url}" target="_blank">${g.name}</a></li>`);
}
document.write("</ul>");