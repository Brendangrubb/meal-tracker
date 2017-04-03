<!-- Tyler, I left these full-build instructions in so future me has a more detailed list of the steps it took to build this site. I know it's not what you were looking for with the Planning section of the README because I wrote it as I went, not beforehand. What I left in the README is pretty much what was written at the outset of the project. -->

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
