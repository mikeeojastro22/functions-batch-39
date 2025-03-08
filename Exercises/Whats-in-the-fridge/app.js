const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = []

//Challenge: Please fill the fridge array with 5 items of your choice. 
fridge.push("butter");
fridge.push("onion");
fridge.push("salad");
fridge.push("chocolate");
fridge.push("egg");

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
let removedItem = buyList.shift();
fridge.unshift(removedItem);

//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    if(fridge.length > 0) {
        const itemFromFridge = fridge.pop();
        buyList.push(itemFromFridge);
        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    if(buyList.length > 0) {
        const itemBought = buyList.pop();
        fridge.unshift(itemBought);
        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge