# **Meal Tracker**
#### Brendan Grubb, 3/31/2017


&nbsp;
## Description
**Meal Tracker** is a Javascript application that demonstrates my ability to build a project using the Angular framework. The user of **Meal Tracker** is able to log information about the foods they eat in a day. This data, such as descriptions and calorie counts, can be used to maintain a healthy and regular diet.


&nbsp;
## Setup/Installation Requirements
##### _To view and use this application:_
* It is necessary to download and install the following programs to use this application
  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [Bower](https://bower.io/)
  * [Typescript](https://www.npmjs.com/package/typescript)
  * [Angular2 CLI](https://github.com/angular/angular-cli)
* Go to my [Github repository](https://github.com/Brendangrubb/meal-tracker)
* Download the zip file via the green button and unzip the file
* Open Terminal and navigate to **_meal-tracker-master_** project folder
* Type the following commands in Terminal:
  * npm install
  * bower install
  * ng serve
* Visit [http://localhost:4200](http://localhost:4200)
* The application will be ready to use!


&nbsp;
## Planning

#### Basic UI
* The user can add a food item to the meal tracker, including it's name, calorie count and a detailed description or notes about the item. They can also see a list of all the foods they have logged that day and edit or delete individual listings after they have been added. The user is able to filter which foods are viewed based on high or low calorie count.

#### MVP Checklist
  * **Initial Files**
    * create project using cli
    * add and link repository
    * write README
    * install extra dependencies  (bootstrap --add to angular-cli.json & restart server)
    * basic page layout, minimal styling to make staring at this project for 8 hours a little more pleasant
      * add header component

  * **Create Model and List Foods**
    * generate and populate food.model (name, category, calories, description)
    * add seed data to root component export class
    * generate and link food-list component
      * import model to food-list component
      * add food-list element on root template, pass array of food objects
      * add Input to food-list component import, then @Input foodList array through export class
      * add ngFor loop to food-list template
    * organize food object values and add edit/delete buttons

  * **C(r)UD**
    * add delete functionality to food-list component
      * add target event to delete button
      * write deleteFood method that sends object index with emitter
      * add Output and EventEmitter to food-list component import, then @Output deleteFoodSender
      * catch deleteFoodSender at food-list element on root template
      * write deleteFood method that removes target object from array on root component

    * generate and link food-edit component
      * turn on form
        * add form to food-edit component template w/ ngIf(editFood)
        * add food-edit element on root template
        * add target event to edit button on food-list component template
        * write startEditFood method that sends object index with emitter
        * @Output editFoodSender
        * catch editFoodSender at food-list element on root template
        * set editFood to null in root component export class
        * write startEditFood method that sets editFood to target object (opens for for target object)
      * turn off form
        * add Input, Output and EventEmitter to food-edit import
        * add target event to done editing button on food-edit component template
        * write endEditFood method
        * @Output endEditFoodSender
        * catch endEditFoodSender at food-list element on root template
        * write endEditFood method that sets editFood to null
      * add two way data binding to edit form inputs

    * generate and link save food component
      * add new food button to food-save component with target event
      * add form to food-save component with ngIf(saveFood)
      * add ngIf to button that opens form
      * set form to false, button to true
      * add method that sets form to true and button to false
      * import food.model to food-save component
      * add method to food-save component to gather inputs and create new object, send object with emitter, flip form & button boolians
      * add Output to food-save component import
      * @Output saveFoodSender
      * catch saveFoodSender at food-list element on root template
      * write saveFood method that pushes the new food object to foodList array

  * **Pipe**
    * generate calorie filter pipe
    * import food.model, set pure to false in decorator
    * write transform method with if to filter foods with calorie count higher than 500
    * add pipe to ngFor loop on food-list
    * add selectbox with options for all or high calorie
    * add onChange method

#### Style
  * change icon
  * choose global font
  * set media page sizes
  * layout (forms, columns)
  * color scheme
  * fix header to top

#### Refactor
  * try to break site
  * check dryness of code
  * delete console.logs
  * check spacing
  * doublecheck README for setup instructions and other information
  * if (extra time) {
    * switch meal type to radio button
    * form validation (new and edit)
    * attempt to link firebase
    * different calorie displays
      * total daily calories countdown (warning/danger bg-col when low?)
      * average calories consumed
    * add timestamp
    * add multiple days
    * API for standard calorie counts?
    * add a route to about page
  }
  * amend UI and add uncompleted extra projects to 'Future Versions' list


&nbsp;
## Known Bugs
* No known bugs

&nbsp;
## Technologies Used
* Angular2 (w/ cli)
* Typescript
* Node and npm
* Bower
* CSS
* Bootstrap
* HTML

&nbsp;
_If you have any questions or comments about this program, you can contact me at [brendangrubb@gmail.com](mailto:brendangrubb@gmail.com)._

Copyright (c) 2017 Brendan Grubb

This software is licensed under the GPL license
