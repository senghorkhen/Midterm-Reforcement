
/**
* @variable {addButtonClick, filterButtonClick, addInput, filterInput, listElement}
* @description declare variable for use with any function below
*/
const addButtonClick = document.querySelector('#btn-add');
const filterButtonClick = document.querySelector('#btn-filter');
const addInput = document.querySelector('#add');
const filterInput = document.querySelector('#filter');
const listElement = document.querySelector('ul');

/**
 * @Noted you can add your code more with addEventListener with button or anything...
 */
addButtonClick.addEventListener('click', () => {
  setActive(addButtonClick);
  clearActive(filterButtonClick);
  setVisible(addInput,true);
  setVisible(filterInput,false);
  randomImage();
});

filterButtonClick.addEventListener('click', () => {
  setActive(filterButtonClick);
  clearActive(addButtonClick);
  setVisible(filterInput,true);
  setVisible(addInput,false);
  randomImage();
  filterList();
});
/**
 * @function setActive
 * @param {*} element 
 * @description this function use for set active color to element
 */
//code here...
function setActive(element) {
  element.classList.add('active');
  element.classList.add('active');
}

 /**
  * @function clearActive
  * @param {*} element 
  * @description this function use for clear active color on element
  */
 // code here...
 function clearActive(element) {
   element.classList.remove('active');
   element.classList.remove('active');
 }

/**
 * @function setVisible
 * @param {*} element 
 * @param {*} visible boolean
 * @description this function use to hide or show element
 */
// code here...
function setVisible(element,visible){
  visible ? element.style.display = "block" : element.style.display = "none";
}

/**
 * @function addItem
 * @param {*} item 
 * @description this function use to add new item to the list when keyup event happen on "Enter" key
 */
// code here...

function addItem(item) {
  const outputHtml = `
    <li><i class="material-icons"> radio_button_checked</i>${item}</li>
  `;
  listElement.insertAdjacentHTML("beforeend", outputHtml);
};
  document.addEventListener('keyup', event => {
    const inputValue = addInput.value;
    if(event.key === "Enter") {
      if(inputValue != "") {
        addItem(inputValue);
        clearInput();
        limitItem();
        firstCharNotNumber();
      }
    }
  });

/**
 * @function clearInput
 * @description this function use to clear text from add input
 */
// code here...
function clearInput(){
  addInput.value = "";
}

/**
 * @function filterList
 * @description this function use to filter list information when keyup event happen
 */

// code here...
function filterList() {
  const FILTER_NOT_FOUND = -1;
  const items = document.querySelectorAll("li");
  const filter = filterInput.value.toUpperCase();
  let textsItem;
  for(let i = 0; i < items.length; i++) {
    textsItem = items[i].textContent || items[i].innerText;
    let isMatchFilter = textsItem.toUpperCase().indexOf(filter) > FILTER_NOT_FOUND;
    if(isMatchFilter) {
      items[i].style.display = "block";
    }else {
      items[i].style.display = "none";
    }
  }
};
document.addEventListener('keyup', filterList);

/**
 * @array : imageBackground
 */
const imageBackground = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
/**
 * @function randomImage
 * @description this function use to random the color when we click on add button or filter button and change the background of body
 */
// code here...
function randomImage() {
  let indexImages = Math.floor(Math.random() * imageBackground.length);
  document.body.style.background ="url(images/" + imageBackground[indexImages] + ")";
}

 /**
  * @function limitItem
  * @description this function use to check if item is 10 it will will be stop to allow the user to add more item 
  * and confirm to the use with message "Sorry !! you cannot add item more than 10"
  */
// code here ...
function limitItem() {
  const items = document.querySelectorAll("li");
  if(items.length > 10) {
    alert("Sorry !! you cannot add item more than 10");
  }
}

/**
 * @function firstCharNotNumber
 * @param {*} text
 * @description this function use to check the first number is not a number
 * @hint you need to use : isNaN to check is not number 
 */
// code here...
function firstCharNotNumber(text) {
  if(isNaN(text)){
    // alert("You cannot enter number first");
  }else {

  }
}