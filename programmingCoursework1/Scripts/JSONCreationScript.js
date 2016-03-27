

//create blog item objects//
var blogItem = {};
blogItem.title = "Panda";
blogItem.text = "The giant panda is a conservation reliant endangered species. A 2007 report shows 239 pandas living in captivity inside China and another 27 outside the country. Giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds.";
blogItem.image = "http://s.hswstatic.com/gif/panda-sleep-2.jpg";


blogItem.similarArticles = [];
blogItem.similarArticles[0] = {};
blogItem.similarArticles[0].url = "chinapandas.html";
blogItem.similarArticles[0].label = "China Pandas";
blogItem.similarArticles[1] = {};
blogItem.similarArticles[1].url = "bamboo.html";
blogItem.similarArticles[1].label = "Bamboo";
blogItem.similarArticles[2] = {};
blogItem.similarArticles[2].url = "endangeredspecies.html";
blogItem.similarArticles[2].label = "Endangered Species";

var blogItem2 = {};
blogItem2.title = "Tiger";
blogItem2.text = "The tiger (Panthera tigris) is the largest cat species, reaching a total body length of up to 3.38 m (11.1 ft) over curves and exceptionally weighing up to 388.7 kg (857 lb) in the wild. Its most recognisable feature is a pattern of dark vertical stripes.";
blogItem2.image = "http://www.rainforest-alliance.org/sites/default/files/species/tiger_Brian_McKay.jpg";

blogItem2.similarArticles = []; // //create an array containing the 3 url link //
blogItem2.similarArticles[0] = {}; // The array contains the link url's as 3 objects //
blogItem2.similarArticles[0].url = "indianTigers.html";
blogItem2.similarArticles[0].label = "Indian Tigers";
blogItem2.similarArticles[1] = {};
blogItem2.similarArticles[1].url = "TigerFood.html";
blogItem2.similarArticles[1].label = "Food";
blogItem2.similarArticles[2] = {};
blogItem2.similarArticles[2].url = "endangeredlions.html";
blogItem2.similarArticles[2].label = "Endangered Lions";

var blogItem3 = {};
blogItem3.title = "Shark";
blogItem3.text = "The great white shark (Carcharodon carcharias), also known as the great white, white pointer, white shark, or white death, is a species of large lamniform shark which can be found in the coastal surface waters of all the major oceans.";
blogItem3.image = "http://3.bp.blogspot.com/-hyYrpZWawec/T71fpKSFIgI/AAAAAAAAGHA/nCRAKYPDKXk/s1600/great-white-shark_1200x900.jpg";

blogItem3.similarArticles = []; // //create an array containing the 3 url link //
blogItem3.similarArticles[0] = {}; // The array contains the link url's as 3 objects //
blogItem3.similarArticles[0].url = "GreatWhite.html";
blogItem3.similarArticles[0].label = "Great White";
blogItem3.similarArticles[1] = {};
blogItem3.similarArticles[1].url = "SharkFood.html";
blogItem3.similarArticles[1].label = "Shark Food";
blogItem3.similarArticles[2] = {};
blogItem3.similarArticles[2].url = "GreatWhitePoaching.html";
blogItem3.similarArticles[2].label = "Endangered Sharks";

// insert each blog item object into the array called blogItems //
var blogItems = new Array(blogItem, blogItem2, blogItem3);
console.log(blogItems); // to check the contents of the array in the console //

// use the JSON stringify method on the blogItems array and put it in a variable.  Print the variable to the console to get the serialised array.
var serialisedtext = JSON.stringify(blogItems);
console.log(serialisedtext);