const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((arr) => {
    let tutorial = arr.split(" ")
    let result = tutorial.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    return result.join(" ")  
  })
  // for (const tutorial of tutorials) {
  //   let arr = tutorial.split(" ")
  //   let result = arr.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
  //   return result.join(" ")   
  // }

}
// for (const tutorial of tutorials) {
// //   let arr = tutorial.split(" ")
// //   let result = arr.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
// //   // return result.join(" ")   
// //   console.log(result.join(" "))

// // }