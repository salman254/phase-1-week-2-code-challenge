// Array to store shopping list items
let shoppingList = [];

// DOM elements
const itemInput = document.getElementById("item-input");
const priceInput = document.getElementById("price-input");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const shoppingListContainer = document.getElementById("shopping-list");

// Function to render the shopping list
function renderList() {
    // To clear the current list
    shoppingListContainer.innerHTML = "";
    
    // To loop through the shopping list array and create list items
    shoppingList.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Ksh ${item.price}`;
        
        // To create a button to mark as purchased
        const markButton = document.createElement("button");
        markButton.textContent = "Mark as Purchased";
        markButton.addEventListener("click", () => markPurchased(index)); // To add an event listener for marking
        
        // TO append button and list item to the container
        li.appendChild(markButton);
        shoppingListContainer.appendChild(li);
        
        // To add purchased class if item is marked
        if (item.purchased) {
            li.classList.add("purchased");
            markButton.textContent = "Cancel Purchase"; // Change button text if already purchased
        }
    });
}

// Function to add an item to the shopping list
function addItem() {
    const itemValue = itemInput.value.trim();
    const priceValue = parseFloat(priceInput.value);
    
    if (itemValue && !isNaN(priceValue)) {
        shoppingList.push({ name: itemValue, price: priceValue, purchased: false }); // Add item with purchased status
        renderList(); // Update the displayed list
        itemInput.value = ""; // Clear input field
        priceInput.value = ""; // Clear price input field
    } else {
        alert("Please enter a valid item name and price.");
    }
}

// Function to mark an item as purchased or cancel purchase
function markPurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased; // Toggle purchased status
    renderList(); // Update the displayed list
}

// Function to clear the shopping list
function clearList() {
    shoppingList = []; // To reset the array
    renderList(); // To update the displayed list
}

// To attach event listeners to buttons
addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", clearList);