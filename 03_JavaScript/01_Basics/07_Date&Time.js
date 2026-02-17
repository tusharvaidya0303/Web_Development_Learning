const myDate = new Date();
console.log(myDate); // output : current date and time in ISO format (e.g., 2024-06-01T12:34:56.789Z) ;
//  creates a new Date object representing the current date and time.

console.log(myDate.toString()); // output : current date and time in a readable string format
//  (e.g., Sat Jun 01 2024 12:34:56 GMT+0530 (India Standard Time)) ;

console.log(myDate.toLocaleDateString()); // output : current date in locale-specific format (e.g., 06/01/2024) ;
console.log(myDate.toLocaleTimeString()); // output : current time in locale-specific format (e.g., 12:34:56 PM) ;

console.log(myDate.getFullYear()); // output : current year (e.g., 2024) ;
console.log(myDate.getMonth()); // output : current month (0-11, where 0 is January and 11 is December) (e.g., 5 for June) ;
console.log(myDate.getDate()); // output : current day of the month (1-31) (e.g., 1 for June 1st) ;

console.log(myDate.getHours()); // output : current hour (0-23) (e.g., 12 for 12 PM) ;
console.log(myDate.getMinutes()); // output : current minute (0-59) (e.g., 34) ;
console.log(myDate.getSeconds()); // output : current second (0-59) (e.g., 56) ;

console.log(myDate.getTime()); // output : number of milliseconds since January 1, 1970 (e.g., 1712133296789) ;
// returns the number of milliseconds since the Unix epoch (January 1, 1970).

console.log(myDate.getDay()); // output : current day of the week (0-6, where 0 is Sunday and 6 is Saturday) (e.g., 6 for Saturday) ;
console.log(myDate.getTimezoneOffset()); // output : difference in minutes between UTC and local time (e.g., -330 for IST) ;
// returns the time zone offset in minutes from UTC for the current locale.

let createdDate = new Date(2025, 0, 1); // Note: month is 0-indexed (0 = January, 5 = June)
console.log(createdDate); // output : 2025-01-01T00:00:00.000Z ;
// creates a new Date object representing January 1, 2025.

let createdDate2 = new Date(2025, 5, 15, 5,20); // Note: month is 0-indexed (0 = January, 5 = June)
console.log(createdDate2); // output : 2025-06-15T05:20:00.000Z ;
// creates a new Date object representing June 15, 2025 at 5:20 AM.

const specificDate = new Date('2024-12-25');
console.log(specificDate); // output : 2024-12-25T00:00:00.000Z ;
// creates a new Date object representing December 25, 2024.

console.log(createdDate2.getTime()); // output : 1736902800000 ;
//  returns the number of milliseconds since January 1, 1970 for the createdDate2 object.

let myTimestamp = Date.now();
console.log(Math.floor(myTimestamp / 1000)); // output : current timestamp in seconds (e.g., 1712133296) ;
// returns the number of milliseconds since January 1, 1970, and divides it by 1000 to get seconds.

new Date().toLocaleString('default', {
    weekday: 'long',
    timeZone: 'UTC' 

    }); // output : current date and time in UTC (e.g., 2024-06-01T07:04:56.789Z) ;
// returns the current date and time in UTC by specifying the timeZone option in toLocaleString method.