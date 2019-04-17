const postfix = input => input.split(' ').reduce((result, token) => 
 isNaN(token)
  ? [ eval(`${result.shift()}${token}${result.shift()}`), ...result ] 
  : [ token, ...result ]
, [])[0];

console.log(postfix("2 2 3 3 / * /"));
