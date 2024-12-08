# phase-1-week-2-code-challenge

**Overview of the Code Challenge.**

Objective - Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.

Requirements - Array, DOM manipulation, Event handling 

**SOLUTION**

1. I created a repository and cloned it to my files. Three files will be used for the code challenge - HTML file, CSS file and JavaScript file.

2. In the HTML file, 
- The head section has the tittle of the page and link to the CSS file that does styling.
- Body section has heading, Input fields, Buttons and List Container.

The heading displays the tittle of the page.

The input fields allow users to enter an item name and its price in(Ksh).

The Buttons allow user to add items to the shopping list and also allows clearing them.

The List container has the ul that displays the added items.

3. in the CSS file,
- I did the Body styling, Heading styling, Input and Button styling and a purchased class

Body Styling sets a default font family for readability.

Heading Styling it aligns the content to the Center.

Input and Button Styling: Adds margins around input fields and buttons for better spacing.

Purchased Class: Defines styles that apply to items marked as purchased, including strikethrough text and a light green background.

4. In the JavaScript file,

- Array shoppingList is initialized as an empty array that will hold objects representing each shopping item.


- DOM Element Selection: Uses document.getElementById to select input fields and buttons from the HTML.

- Render List Function:

Clears any existing items in the displayed list.

Loops through shoppingList and creates <li> elements with each item's name and price.

Creates a "Mark as Purchased" button for each item that toggles its purchase status when clicked.

Updates styles based on whether an item is marked as purchased.


- Add Item Function 

Retrieves values from input fields, validates them, and adds new items to shoppingList.

Calls renderList() to update the display after adding an item.


- Mark Purchased Function:
Toggles an item's purchase status when its corresponding button is clicked and updates the display.


- Clear List Function:
Resets shoppingList to an empty array when "Clear List" is clicked, removing all items from display.


- Event Listeners:
Attaches click event listeners to "Add Item" and "Clear List" buttons to trigger their respective functions.



























