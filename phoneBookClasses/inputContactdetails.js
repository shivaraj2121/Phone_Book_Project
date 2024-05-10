"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var addContact_1 = require("./addContact");
var prompt = promptSync();
var phoneBook = new addContact_1.default();
while (true) {
    try {
        console.log("n1. Add Contact\n2. Update Contact\n3. Delete Contact\n4. Display Contacts\n5. Exit");
        var choice = parseInt(prompt("Enter your choice: "));
        switch (choice) {
            case 1:
                var nameToAdd = prompt("Enter name: ");
                var phoneNumberToAdd = prompt("Enter phone number: ");
                phoneBook.addContact(nameToAdd, phoneNumberToAdd);
                break;
            case 2:
                var nameToUpdate = prompt("Enter name to update: ");
                var newPhoneNumber = prompt("Enter new phone number: ");
                phoneBook.updateContact(nameToUpdate, newPhoneNumber);
                break;
            case 3:
                var nameToDelete = prompt("Enter name to delete: ");
                phoneBook.deleteContact(nameToDelete);
                break;
            case 4:
                phoneBook.displayContacts();
                break;
            case 5:
                console.log("Exiting...");
            default:
                console.log("Invalid choice!");
        }
    }
    catch (error) {
        //console.error("An error occurred:", error.message);
    }
}
