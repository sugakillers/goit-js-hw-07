const categoriesList = document.querySelector("#categories");

const listEl = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);



listEl.forEach((item) => {

    item.style.width = "360px"
    item.style.margin = "0 auto 16px auto";

const categoryTitle = item.querySelector("h2").textContent;
const categoryElements = item.querySelectorAll("li").length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);


});


