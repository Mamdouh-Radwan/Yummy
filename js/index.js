// DOM vars
let navLinks = document.querySelectorAll(".nav-links");
let homeMealsDisplay = $(".home-meals");
let mealsArr=[];
let pages = document.querySelectorAll(".page");
let navLists = document.querySelectorAll(".nav-list a");
let allCategories = document.querySelector(".all-categories");
let allArea = document.querySelector(".all-area");
let allIngrediants = document.querySelector(".all-ingred");
let searchedMeals = document.querySelector(".searched-meals");

let userName = document.getElementById("userName");
let userEmail = document.getElementById("userMail");
let userPhone = document.getElementById("userPhone");
let userAge = document.getElementById("age");
let userPass = document.getElementById("userPass");
let userRePass = document.getElementById("userRePass");
let inputsArr = [userName, userEmail, userPhone, userAge, userPass, userRePass];
let submitBtn = document.querySelector(".form-button");
// *******************************************

// validation functions

function validations() {
  inputsArr.forEach((e) => {
    e.addEventListener("input", (e) => {
      switch (e.target.getAttribute("id")) {
        case "userName":
          userName.addEventListener("input", (e) => {
            let errorMsgEle = e.target.nextElementSibling;
            errorMsgEle.classList.remove("d-none");
            userName.classList.add('is-invalid')
            userName.classList.remove('is-valid')
            if(userNameValidation() === true){
                errorMsgEle.classList.add("d-none")
                userName.classList.remove('is-invalid')
                userName.classList.add('is-valid')
            };
          });
          break;
        case "userMail":
          userEmail.addEventListener("input", (e) => {
            let errorMsgEle = e.target.nextElementSibling;
            errorMsgEle.classList.remove("d-none");
            userEmail.classList.add('is-invalid')
            userEmail.classList.remove('is-valid')
            if(userEmailValidation() === true){
                errorMsgEle.classList.add("d-none")
                userEmail.classList.remove('is-invalid')
                userEmail.classList.add('is-valid')
            };
          });
          break;
        case "userPhone":
          userPhone.addEventListener("input", (e) => {
            let errorMsgEle = e.target.nextElementSibling;
            errorMsgEle.classList.remove("d-none");
            userPhone.classList.add('is-invalid')
            userPhone.classList.remove('is-valid')
            if(userPhoneValidation() === true){
                errorMsgEle.classList.add("d-none")
                userPhone.classList.remove('is-invalid')
                userPhone.classList.add('is-valid')
            };
          });
          break;
        case "age":
          userAge.addEventListener("input", (e) => {
            let errorMsgEle = e.target.nextElementSibling;
            errorMsgEle.classList.remove("d-none");
            userAge.classList.add('is-invalid')
            userAge.classList.remove('is-valid')
            if(userAgeValidation() === true){
                errorMsgEle.classList.add("d-none")
                userAge.classList.remove('is-invalid')
                userAge.classList.add('is-valid')
            };
          });
          break;
        case "userPass":
          userPass.addEventListener("input", (e) => {
            let errorMsgEle = e.target.nextElementSibling;
            errorMsgEle.classList.remove("d-none");
            userPass.classList.add('is-invalid')
            userPass.classList.remove('is-valid')
            if(userPassValidation() === true){
                errorMsgEle.classList.add("d-none")
                userPass.classList.remove('is-invalid')
                userPass.classList.add('is-valid')
            };
          });
          break;
        case "userRePass":
          userRePass.addEventListener("input", (e) => {
            let errorMsgEle = e.target.nextElementSibling;
            errorMsgEle.classList.remove("d-none");
            userRePass.classList.add('is-invalid')
            userRePass.classList.remove('is-valid')
            if(userRePassValidation() === true){
                errorMsgEle.classList.add("d-none")
                userRePass.classList.remove('is-invalid')
                userRePass.classList.add('is-valid')
            };
          });
          break;

        default:
          break;
      }
    });
  });
}

function userNameValidation() {
  let userNameRe = /^[a-zA-Z]+$/;
  return userNameRe.test(userName.value);
}
function userEmailValidation() {
  let userEmailRe = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  return userEmailRe.test(userEmail.value);
}
function userPhoneValidation() {
  let userPhoneRe = /^\+?\d{11,}$/;

  return userPhoneRe.test(userPhone.value);
}
function userAgeValidation() {
  let userAgeRe = /^(?!0)\d{2,3}$/;

  return userAgeRe.test(userAge.value);
}
function userPassValidation() {
  let userPassRe = /^.{8,}/;

  return userPassRe.test(userPass.value);
}
function userRePassValidation() {
  return userRePass.value === userPass.value;
}
// ********************************************

// loading page
$(document).ready(() => {
  
    $(".loaderPage").fadeOut(1000, () => {
      $("body").css({ overflow: "auto" });
    });
  
});
//   *****************************************

// setting navbar closed
// $(".nav-bar").animate({ left: -$(".nav-bar").outerWidth() });
$(".nav-bar-close-open .open-close .fa-close").hide();
$(".nav-list").animate({ top: "300px" });
// *******************************************

// opening navbar behaviour
$(".nav-bar-close-open .open-close .fa-bars").click((e) => {
  $(".nav-bar").animate({ left: "0" }, 1000, () => {
    $(".nav-list:nth-child(1)").animate({ top: "0" }, 200);
    $(".nav-list:nth-child(2)").animate({ top: "0" }, 500);
    $(".nav-list:nth-child(3)").animate({ top: "0" }, 800);
    $(".nav-list:nth-child(4)").animate({ top: "0" }, 1100);
    $(".nav-list:nth-child(5)").animate({ top: "0" }, 1400);
  });
  $(e.target).hide();
  $(".nav-bar-close-open .open-close .fa-close").show();
});
// *******************************************

// closing navbar behaviour
$(".nav-bar-close-open .open-close .fa-close").click((e) => {
  $(".nav-list").animate({ top: "300px" }, 1000);
  $(".nav-bar").animate({ left: -$(".nav-bar").outerWidth() }, 1000);
  $(e.target).hide();
  $(".nav-bar-close-open .open-close .fa-bars").show();
});
$(".link").click(() => {
  $(".nav-list").animate({ top: "300px" }, 1000);
});
// *******************************************

// navbar list
$(".nav-list").on("click", (e) => {
  $(".nav-bar").animate({ left: -$(".nav-bar").outerWidth() }, 1000);
  $(".nav-bar-close-open .open-close .fa-close").toggle();
  $(".nav-bar-close-open .open-close .fa-bars").toggle();

  switch ($(e.target).html()) {
    case "Search":
      // display Search tab
      displayTap(e);
      // get and display searched meals by name
      document
        .getElementById("search-by-name")
        .addEventListener("input", async (e) => {
          let response = await searchApi(e.target.value);
          document.querySelector(".searched-meals").innerHTML = "";
          displayFoundedMealsSearch(response,searchedMeals);

          Array.from(document.querySelectorAll(".searched-meal-cont")).forEach(
            (e) => {
              e.addEventListener("click", async (e) => {
                let response = await getHomeMeals(
                  e.currentTarget.children[0].children[0].innerHTML
                );
                displayDetails(response[0],searchedMeals);
              });
            }
          );
        });

      document
        .getElementById("search-by-fName")
        .addEventListener("input", async (e) => {
          // panning user from writting more than one letter
          if (e.target.value.length > 1) {
            e.target.value = e.target.value.charAt(0);
          }

          let response = await searchApiFL(e.target.value);
          document.querySelector(".searched-meals").innerHTML = "";
          displayFoundedMealsSearch(response,searchedMeals);

          Array.from(document.querySelectorAll(".searched-meal-cont")).forEach(
            (e) => {
              e.addEventListener("click", async (e) => {
                let response = await getHomeMeals(
                  e.currentTarget.children[0].children[0].innerHTML
                );
                displayDetails(response[0],searchedMeals);
              });
            }
          );
        });

      break;
    case "Categories":
      // display category tab
      displayTap(e);
      // get and display categories
      (async () => {
        let response = await searchCatApi();
        displayCategories(response);
        // iterate over all categories and display the selected category meals
        Array.from(document.querySelectorAll(".category-cont")).forEach((e) => {
          e.addEventListener("click", async (e) => {
            let response = await searchCatMeals(
              e.currentTarget.children[0].children[0].innerHTML
            );
            displayMeals(response,allCategories);
            // loop on all meals of same category if meal clicked fetch it and display its details
            Array.from(document.querySelectorAll(".category-cont")).forEach(
              (e) => {
                e.addEventListener("click", async (e) => {
                  let response = await getHomeMeals(
                    e.currentTarget.children[0].children[0].innerHTML
                  );
                  displayDetails(response[0],allCategories);
                });
              }
            );
          });
        });
      })();

      break;
    case "Area":
      displayTap(e);

      (async () => {
        let response = await searchAreaApi();
        dispalyAreas(response);
        // iterate over all areas and display selected area meals
        Array.from(document.querySelectorAll(".area-cont")).forEach((e) => {
          e.addEventListener("click", async (e) => {
            // get meals in selected area
            let response = await searchAreaMeals(
              e.currentTarget.children[1].innerHTML
            );
            // display all meals in this area
            displayMeals(response,allCategories);
            Array.from(document.querySelectorAll(".area-cont")).forEach((e) => {
              e.addEventListener("click", async (e) => {
                let response = await getHomeMeals(
                  e.currentTarget.children[0].children[0].innerHTML
                );
                displayDetails(response[0],allArea);
              });
            });
          });
        });
      })();

      break;
    case "Ingrediants":
      displayTap(e);
      (async () => {
        let response = await searchIngrediantApi();
        dispalyIngrediants(response);

        Array.from(document.querySelectorAll(".ingrediant-cont")).forEach(
          (e) => {
            e.addEventListener("click", async (e) => {
              let response = await searchIngrediantmeals(
                e.currentTarget.children[1].innerHTML
              );
              displayMeals(response,allCategories);
              Array.from(document.querySelectorAll(".ingrediant-cont")).forEach(
                (e) => {
                  e.addEventListener("click", async (e) => {
                    let response = await getHomeMeals(
                      e.currentTarget.children[0].children[0].innerHTML
                    );
                    displayDetails(response[0],allIngrediants);
                  });
                }
              );
            });
          }
        );
      })();
      break;
    case "Contact Us":
      displayTap(e);
      validations();

      inputsArr.forEach((e) => {
        e.addEventListener("input", () => {
          userNameValidation() &&
          userEmailValidation() &&
          userPhoneValidation() &&
          userAgeValidation() &&
          userPassValidation() &&
          userRePassValidation()
            ? submitBtn.removeAttribute("disabled")
            : submitBtn.setAttribute("disabled", "true");
        });
      });

      break;

    default:
      break;
  }
});
// *******************************************

// display site opening meals
displayHomeMeals();
// *******************************************

// getting home page meals
async function getHomeMeals(mealName='') {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  response = await response.json();
  response = response.meals;
  return response;
}
// *******************************************

// displaying home page meals
async function displayHomeMeals() {
  mealsArr = await getHomeMeals();
  let cartona = "";
  for (let i = 0; i < mealsArr.length; i++) {
    cartona += ` <div class="col-md-4 col-lg-3">
        <div class="image-container rounded-3 overflow-hidden position-relative">
            <img class="w-100" src=${mealsArr[i].strMealThumb} alt="meal">
            <div class="overlay position-absolute w-100 h-100  d-flex align-items-center ps-2"><h2>${mealsArr[i].strMeal}</h2></div>
        </div>
     </div>`;
  }
  homeMealsDisplay.children().html(`${cartona}`);
  let meal = document.querySelectorAll(".image-container");

  meal.forEach((e) => {
    e.addEventListener("click", (e) => {
      diplaySelectedMeal(
        e.currentTarget.children[1].children[0].innerHTML,
        e.currentTarget.children[0].getAttribute("src")
      );
    });
  });
}
// *******************************************

// Display meal details
function diplaySelectedMeal(targetName, src) {
  $(".loaderPage").show();
  let area;
  let instructions;
  let category;
  let tags;
  let source;
  let youtube;
  let ingrediantArr = [];
  let measurmentArr = [];
  // loop on mealsArr with targetname to get info about this selected meal

  for (const [i, eachMeal] of mealsArr.entries()) {
    if (targetName === eachMeal.strMeal) {
      instructions = eachMeal.strInstructions;
      area = eachMeal.strArea;
      category = eachMeal.strCategory;
      tags = eachMeal.strTags;
      source = eachMeal.strSource;
      youtube = eachMeal.strYoutube;
      for (let i = 0; i < 20; i++) {
        if (eachMeal[`strIngredient${i + 1}`] === "") {
          break;
        }

        ingrediantArr.push(eachMeal[`strIngredient${i + 1}`]);

        measurmentArr.push(eachMeal[`strMeasure${i + 1}`]);
      }
    }
  }

  let mealDetails =$(".meal-details");
  mealDetails.removeClass("d-none");
  homeMealsDisplay.addClass("d-none");
  mealDetails.children().html(` 
    <div class="col-12 col-md-5 text-white">
    <div class="selectedImage">
    <img class="w-100 rounded-3" src=${src}>
    </div>
    <h3>${targetName}</h3>
    </div>
    <div class="col-12 col-md-7 text-white">
    <h3>Instructions</h3>
    <p>${instructions}</p>
    <h4>Area:${area}</h4>
    <h5>Category:${category}</h5>
    <h5>Recipes :</h5>
    <div class="recips p-2">
    <ul class="d-flex flex-wrap justify-content-start align-items-center list-unstyled">${ingrediantArr
      .map((e, index) => {
        return `<li class="bg-info px-2 py-1 my-3 ms-2 rounded-4 text-center">${measurmentArr[index]}${e}</li>`;
      })
      .join("")}
    </ul>
    </div>
    
    <p>tags:</p>
    <p>${
      tags
        ? tags
            .split(",")
            .map((e) => {
              return `<p class="fit-content rounded-2 bg-danger-subtle px-2 py-1 ms-2 text-black">${e}</p>`;
            })
            .join(" ")
        : ""
    }</p>
    <div class="d-flex justify-content-start flex-wrap flex-sm-nowrap">
    <button class="btn btn-primary ms-2 my-2"><a class="text-decoration-none text-white" href=${source} target="_blank">source</a></button>
    <button class="btn btn-danger ms-2 my-2"><a class="text-decoration-none text-white" href=${youtube} target="_blank">youtube</a></button>
    </div>
    </div>
    `);
  $(".loaderPage").fadeOut(1000);
}
// *******************************************



function displayTap(e) {
    $(".loaderPage").show();
  pages.forEach((e) => {
    e.classList.add("d-none");
  });
  document
    .getElementById(e.target.getAttribute("-page-id"))
    .classList.remove("d-none");
    $(".loaderPage").fadeOut(1000);
}


// search tab
async function searchApi(name) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  response = await response.json();
  return response;
}
async function searchApiFL(letter) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );

  response = await response.json();
  return response;
}
function displayFoundedMealsSearch(response,displayE) {
    $(".loaderPage").show();
  let cartona = "";
  response.meals.forEach((e) => {
    cartona += `
  <div class="col-md-4 col-lg-3">
        <div class="searched-meal-cont overflow-hidden position-relative rounded-3">
            <div class="overlay position-absolute d-flex align-items-center justify-content-center">
            <h3 class="text-black">${e.strMeal}</h3>
            </div>
            <img class="w-100" src=${e.strMealThumb}>
        </div>
    </div>
  
  `;
  });
  displayE.innerHTML =cartona
  $(".loaderPage").fadeOut(1000);
}

// *******************************************

// category tab
async function searchCatApi() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();
  return response;
}
function displayCategories(response) {
    $(".loaderPage").show();
  let cartona = "";
  response.categories.forEach((e) => {
    cartona+= `
<div class="col-md-4 col-lg-3">
<div class="category-cont position-relative overflow-hidden rounded-3">
<div class="overlay py-3">
<h3 class="text-black mb-2">${e.strCategory}</h3>
<p class="desc text-black text-center">${e.strCategoryDescription}</p>
</div>
<img class="w-100 h-100" src=${e.strCategoryThumb}>
</div>
</div>
`;
  });
  allCategories.innerHTML = cartona;
  $(".loaderPage").fadeOut(1000);
}
async function searchCatMeals(catName) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`
  );
  response = await response.json();
  return response;
}
// **********************************

// area tab
async function searchAreaApi() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  response = await response.json();
  console.log(response.meals);
  return response.meals;
}
function dispalyAreas(response) {
    $(".loaderPage").show();
 let cartona = "";
  response.forEach((e) => {
    cartona += `
<div class="col-md-4 col-lg-3 flex-column">
<div class="area-cont">
<div class="area-image text-center">
<i class="fa-solid fa-house-laptop fa-2x"></i>
</div>
<h3 class="text-center">${e.strArea}</h3>
</div>
</div>
`;
  });
  allArea.innerHTML = cartona
  $(".loaderPage").fadeOut(1000);
}
async function searchAreaMeals(areaName) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
  );
  response = await response.json();
  console.log(response);
  return response;
}
// **********************************

// ingrediants tab
async function searchIngrediantApi() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = await response.json();
  console.log(response.meals);
  return response.meals;
}
function dispalyIngrediants(response) {
    $(".loaderPage").show();
  let cartona = "";
  for (let i = 0; i < 20; i++) {
    cartona += `
        <div class="col-md-4 col-lg-3 flex-column">
        <div class="ingrediant-cont">
        <div class="ingrediant-image text-center">
        <i class="fa-solid fa-drumstick-bite fa-2x"></i>
        </div>
        <h4 class="text-center">${response[i].strIngredient}</h4>
        <P style="overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;" class="text-center">${response[i].strDescription}</P>
        </div>
        </div>
        `;
  }
  allIngrediants.innerHTML = cartona;
  $(".loaderPage").fadeOut(1000);
}
async function searchIngrediantmeals(ingrediantName) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediantName}`
  );
  response = await response.json();
  console.log(response);
  return response;
}
// ************************************

// display meals
function displayMeals(response,displayE) {
  $(".loaderPage").show();
let cartona = "";
for (let i = 0; i < response.meals.length; i++) {
  if (i === 20) {
    break;
  }

  cartona += `
<div class="col-md-4 col-lg-3">
<div class="category-cont position-relative overflow-hidden rounded-3">
<div class="overlay">
<h3 class="text-black mb-2">${response.meals[i].strMeal}</h3>
</div>
<img class="w-100 h-100" src=${response.meals[i].strMealThumb}>
</div>
</div>
`;
}
displayE.innerHTML = cartona;
$(".loaderPage").fadeOut(1000);
}
// display meal details
function displayDetails(response,displayE) {
  $(".loaderPage").show();
let src = response.strMealThumb;
let targetName = response.strMeal;
let instructions = response.strInstructions;
let area = response.strArea;
let category = response.strCategory;
let ingrediantArr = [];
let measurmentArr = [];
let tags = response.strTags;
let source = response.strSource;
let youtube = response.strYoutube;

// adding all ingrediants in an array
for (let i = 0; i < 20; i++) {
  if (response[`strIngredient${i + 1}`] === "") {
    break;
  }
  ingrediantArr.push(response[`strIngredient${i + 1}`]);
}
for (let i = 0; i < 20; i++) {
  if (response[`strMeasure${i + 1}`] === "") {
    break;
  }
  measurmentArr.push(response[`strMeasure${i + 1}`]);
}

displayE.innerHTML = `
  <div class="col-12 col-md-5 text-white">
      <div class="selectedImage">
      <img class="w-100 rounded-3" src=${src}>
      </div>
      <h3>${targetName}</h3>
      </div>
      <div class="col-12 col-md-7 text-white">
      <h3>Instructions</h3>
      <p>${instructions}</p>
      <h4>Area:${area}</h4>
      <h5>Category:${category}</h5>
      <h5>Recipes :</h5>
      <div class="recips p-2 ">
      <ul class="d-flex flex-wrap justify-content-start align-items-center list-unstyled">${ingrediantArr
        .map((e, index) => {
          return `<li class="bg-info p-2 my-3 mx-2 rounded-4 text-center">${measurmentArr[index]}${e}</li>`;
        })
        .join("")}
      </ul>
      </div>
      <p>tags:</p>
      <p>
      ${
          tags
            ? tags
                .split(",")
                .map((e) => {
                  return `<p class="fit-content rounded-2 bg-danger-subtle px-2 py-1 ms-2 text-black">${e}</p>`;
                })
                .join(" ")
            : ""
        }
      </p>
      <div class="d-flex justify-content-start flex-wrap flex-sm-nowrap">
      <button class="btn btn-primary ms-2 my-2"><a class="text-decoration-none text-white" href=${source} target="_blank">source</a></button>
      <button class="btn btn-danger ms-2 my-2"><a class="text-decoration-none text-white" href=${youtube} target="_blank">youtube</a></button>
      </div>
      </div>
  
  `;
  $(".loaderPage").fadeOut(1000);
}