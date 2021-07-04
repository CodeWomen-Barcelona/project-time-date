// new Date() gives you an entire date and time: 2021-07-04T08:29:17.851Z
const date = new Date()
console.log(date.toDateString());

const year = date.getFullYear()
console.log(year);


// date.getMonth() gets the month index, and indexing starts at 0 so you have to add 1
const month = date.getMonth() + 1
console.log(month);

// The option { month: 'long' } will return the full month name. You have to use the function
//  toLocaleString to extract the month as a string, and then use the 'long' method to get
//  the full name
const monthFullName = date.toLocaleString('default', { month: 'long' });
console.log(monthFullName);


// Read more: https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/