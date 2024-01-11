// switch statment where we check multiple value and we know about them eg
const TEMP = 52;
switch (TEMP) {
    case 50:
            console.log("temp is 50");
        break;
    case 52:
            console.log("temp is 52");
            break; // if we dont use break all the statment works
    default:
            console.log("temp is not defined");
        break;
}

const Joke = 2 > 4 ? "hehehe":"lol";
console.log(Joke);  // LOL i already know about it so i will not mantain its notes