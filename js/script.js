const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1

let cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5
let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}
//Question 6 not finished

let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New Content</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function showNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

showNames(cats);

//Question 8

function createCats(cats) {
  let list = "";

  for (let i = 0; i < cats.length; i++) {
    list += `<h5>${cats[i].name}</h5><p>${cats[i].age}</p>`;
    console.log(list);
  }
  const htmlFinal = "<div>" + list + "</div>";
  return htmlFinal;
}

const container = document.querySelector(".cat-container");

const newHtml = createCats(cats);

container.innerHTML = newHtml;

createCats(cats);

//Question 8
/*After a lot of attemts i used arrow function.
   I think i understand it. 
  The cat is like a new variable for each of the object in the array, so writing cat.name would be the same as writing cats[i].name.
  Here i have made two functions, and i use the ageValidation function to check if there are any undefined ages in the forEach function.
  I am not sure that i understand it correctly, that is why im have commented it out.

const ageValidation = (age) => {
  if (age === undefined) return "Age unknown";

  return age;
};

const createCats = (cats) => {
  let list = "";

  cats.forEach((cat) => {
    list += "<div>";
    list += `<h5>${cat.name}</h5><p>${ageValidation(cat.age)}</p>`;
    list += "</div>";
  });
  return list;
};
 
const container = document.querySelector(".cat-container");

 const newHtml = createCats(cats);

 container.innerHTML = newHtml;
 */
