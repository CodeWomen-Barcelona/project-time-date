// new Date() gives you an entire date and time: 2021-07-04T08:29:17.851Z
const date = new Date()
console.log(date.toDateString());

// date.getFullYear() gets you the current year
const year = date.getFullYear()
console.log(year);


// date.getMonth() gets the INDEX of the current month, and indexing starts at 0
// so you have to add 1
const month = date.getMonth() + 1
console.log(month);

// The option { month: 'long' } will return the full month name. You have to use the function
//  toLocaleString to extract the month as a string, and then use the 'long' method to get
//  the full name. The options are: {weekday: 'long', day: 'numeric', year: 'numeric', month: 'long'}
const monthFullName = date.toLocaleString('default', { month: 'long' });
console.log(monthFullName);

// Instead of 'default' you can use a timezone or country code with date.toLocaleString

// Read more: 
// https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString