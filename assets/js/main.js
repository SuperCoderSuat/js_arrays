/*********************************
 *      JS Arrays Level-1_1
 ********************************/
console.log("%c JS Arrays Level-1_1", "color: green");

const person = ["Suat", "Ucar", "SuperCode"];
const friends = ["Foo", "Bar", "Cookie"];
const perfavoriteFoodson = ["Dönerteller", "Lahmacun", "Burger"];

console.log(person);
console.log(friends);
console.log(perfavoriteFoodson);

/*********************************
 *      JS Arrays Level-1_2
 ********************************/
console.log("%c JS Arrays Level-1_2", "color: green");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(perfavoriteFoodson[0]);
console.log(perfavoriteFoodson[1]);
console.log(perfavoriteFoodson[2]);

/*********************************
 *      JS Arrays Level-1_3
 ********************************/
console.log("%c JS Arrays Level-1_3", "color: green");

console.log(person.length);
console.log(friends.length);
console.log(perfavoriteFoodson.length);

/*********************************
 *      JS Arrays Level-1_4
 ********************************/
console.log("%c JS Arrays Level-1_4", "color: green");

console.log(person);
console.log(person.push("Onizuka Sensei", "Japan"));

console.log(friends);
console.log(friends.push("Marsupilami", "CatDog"));

console.log(perfavoriteFoodson);
console.log(perfavoriteFoodson.push("Mantı", "Sigara böreği"));

console.clear();

/*********************************
 *      JS Arrays Level-1_5
 ********************************/
console.log("%c JS Arrays Level-1_5", "color: green");

console.log(person);
console.log(person.pop());

console.log(friends);
console.log(friends.pop());

console.log(perfavoriteFoodson);
console.log(perfavoriteFoodson.pop());

/*********************************
 *      JS Arrays Level-1_6
 ********************************/
console.log("%c JS Arrays Level-1_6", "color: green");

console.log(person);
console.log(person.shift());

console.log(friends);
console.log(friends.shift());

console.log(perfavoriteFoodson);
console.log(perfavoriteFoodson.shift());

/*********************************
 *      JS Arrays Level-1_7
 ********************************/
console.log("%c JS Arrays Level-1_7", "color: green");

console.log(person);
console.log(person.unshift("Curmit", "Oggy"));

console.log(friends);
console.log(friends.unshift("Spongebob", "Homer"));

console.log(perfavoriteFoodson);
console.log(perfavoriteFoodson.unshift("Sucuk", "Dürum-Döner"));

/*********************************
 *      JS Arrays Level-1_9
 ********************************/
console.log("%c JS Arrays Level-1_9", "color: green");

const num = [23, 54, 75];
console.log(num);

num.push(11, 32, 42, 5, 71);
console.log(num);

num.unshift(1, 3, 7, 8, 14)
console.log(num);

num.pop();
num.pop();
console.log(num);

num.shift();
num.shift();
console.log(num);

/*********************************
 *      JS Arrays Level-1_8
 ********************************/
console.log("%c JS Arrays Level-1_8", "color: green");

const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const geradeZahlen = zahlen.filter((elt) => {

    if (elt % 2 == 0) {
        return true;
    } else {
        return false;
    }

});

console.log(geradeZahlen);

const ungeradeZahlen = zahlen.filter((elt) => {

    if (elt % 2 !== 0) {
        return true;
    } else {
        return false;
    }

});

console.log(ungeradeZahlen);

/*********************************
 *      JS Arrays Level-1_8
 ********************************/
console.log("%c JS Arrays Level-1_8", "color: green");

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

const dinge = woerter.filter((elt) => {
    if (elt.length <= 6) {
        return true;
    } else {
        return false;
    }
})

console.log(dinge);

/*********************************
 *      JS Arrays Level-1_8
 ********************************/
console.log("%c JS Arrays Level-1_8", "color: green");

const zahlen2 = [12, 25, 7, 18, 30, 5];

const zahlenFilter = zahlen2.filter((elt) => {
    if (elt < 20) {
        return true;
    } else {
        return false;
    }
});

console.log(zahlenFilter);

// function malZwei(zahlenFilter) {
//     return zahlenFilter * 2;
// }

const malZwei = (zahlenFilter) => {
    return zahlenFilter * 2;
}

console.log(zahlenFilter.map(malZwei));

console.clear();
/*********************************
 *      JS Arrays Level-1_8
 ********************************/
console.log("%c JS Arrays Level-1_8", "color: green");

const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];

const myHeros = heroArr.filter((elt) => {
    if (elt != null) {
        return elt;
    } else {
        return false;
    }
});

console.log(myHeros);

