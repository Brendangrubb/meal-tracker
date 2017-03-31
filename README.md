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
    * install extra dependencies  (bootstrap --add to angular-cli.json)
    * basic page layout, minimal styling to make staring at this project for 8 hours a little more pleasant
      * add header component

  * **Create Model and List Foods**
    * generate and populate food.model (name, calories, description)
    * add seed data to root component
    * generate food list component and link to root
      * include edit/delete buttons

  * **C(r)UD**
    * add delete functionality to food list component
    * generate and link edit food component    
    * generate and link save food component

  * **Pipe**
    * generate calorie filter pipe

#### Style
  * change icon
  * choose global font
  * set media page sizes
  * layout (forms, columns)
  * color scheme

#### Refactor
  * try to break site
  * check dryness of code
  * delete console.logs
  * check spacing
  * doublecheck README for setup instructions and other information
  * if (extra time) {
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
