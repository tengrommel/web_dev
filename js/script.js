var database = [
  {
    username: "andrei",
    password: "supersecret"
  }
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cooool!"
  }
]

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if(user===database[0].username &&
      pass === database[0].password) {
    console.log(newsFeed);
  }else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);