 //step 1
var favMovies = ["BatMan", "DarkKnight", "IronMan1", "Thor", "Inception"];
console.log("step 1");
console.log(favMovies[1]);

//step 2
console.log("");
console.log("step 2");
var movies = new Array(5);
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
console.log(movies[0]);

//step 3
console.log("");
console.log("step 3");
var movies = new Array(5);
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
movies.splice(2, 0, "KnivesOut");
console.log(movies.length );

//step 4
console.log("");
console.log("step 4");

var movies = [];
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
delete movies[0];
//movies.shift();
console.log(movies);

 //step 5
 console.log("");
console.log("step 5");

var movies = [];
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
movies[5] = "IronMan2";
movies[6] = "IronMan3";

for(var i = 0; i<movies.length; i++){
     console.log(movies[i]);
}

//step 6
console.log("");
console.log("step 6");
//copying the code from step 5 as mentioned in the requirment
var movies = [];
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
movies[5] = "IronMan2";
movies[6] = "IronMan3";
var index;
for(index in movies){
    window.console.log(movies[index]);
}

//step 7
console.log("");
console.log("step 7");
var movies = [];
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
movies[5] = "IronMan2";
movies[6] = "IronMan3";
movies.sort();
for(index in movies){
    window.console.log(movies[index]);
}

//step 8
console.log("");
console.log("step 8");
var movies = [];
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
movies[5] = "IronMan2";
movies[6] = "IronMan3";

var leastFavMovies = ["Matrix1", "Matrix2","Matrix3"];
console.log("Movies I like:\n");
console.log("");
for( i=0; i<movies.length; i++){
    console.log(movies[i]);
}
console.log("");
console.log("Movies I regret watching:");
console.log("");
for( i=0; i<leastFavMovies.length; i++){
    console.log(leastFavMovies[i]);
}

//step9
console.log("");
console.log("step 9");

var movies = [];
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
movies[5] = "IronMan2";
movies[6] = "IronMan3";

var leastFavMovies = ["Matrix1", "Matrix2","Matrix3"];
movies = movies.concat(leastFavMovies);
console.log(movies.sort().reverse());


//step10
console.log("");
console.log("step 10");
var movies = [];
movies[0] = "BatMan";
movies[1] = "DarkKnight";
movies[2] = "IronMan1";
movies[3] = "Thor";
movies[4] = "Inception";
movies[5] = "IronMan2";
movies[6] = "IronMan3";

var leastFavMovies = ["Matrix1", "Matrix2","Matrix3"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();

console.log(movies[movies.length -1]);
