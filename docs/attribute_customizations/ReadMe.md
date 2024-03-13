## How to use the attribute customization tables for each standards

This "attribute_customizations" incluodes customization for each checklist within each standards under their corresponding file ending with "_table", allowing us to customize features we want specific to each checklist


### Functionality Includes

- Selecting "is the deviation reasonable?" to be no as default
- Customizing types of unreasonable deviations
- Adding free-text field to answer questions


### How to use

**_NOTE:_**  The entire structure is functioning as a table format in markdown file, so they can be fragile. Making sure to not break to original structure when making changes to these tables

There should be 6 columns in the table

##### Type:

Essential, Desirable or Extraordinary (You should keep it as Essential as default for all the case now)

##### Content:

The actual checklist content, you may directly copy the checklist from the corresponding standard page. (making sure that you are not making a new line while copy and pasting)

##### Display "Is the deviation reasonable"?:

True or False, if false is entered, the corresponding radio button for selecting "no" for "is the deviation reasonable?" will to onclicked as deafult, and the yes button will be disabled.

##### Error Types:

Enter numbers ranging from 1-4, seperated by comma. (Example: "1,2,4")

##### Display Free text question?:

True or False, whether you want to enable the free-text question field

##### Free Text Question Label:

If previous field is inputted as "True", this will be the corresponding free-text-question for this checklist


**_NOTE:_**  Changing the text of an attribute(checklist) in a standard will break the corresponding customization, making sure to also change the corresponding row in the table file in order to keep the functionality
