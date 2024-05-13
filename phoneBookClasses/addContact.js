"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneBook = /** @class */ (function () {
    function PhoneBook() {
        this.contacts = [];
    }
    PhoneBook.prototype.addContact = function (name, phoneNumber, alterPhonenumber) {
        this.contacts.push({ name: name, phoneNumber: phoneNumber, alterPhonenumber: alterPhonenumber });
        console.log("Contact \"".concat(name, "\" added successfully."));
    };
    PhoneBook.prototype.updateContact = function (name, newPhoneNumber) {
        var contact = this.findContact(name);
        if (contact) {
            contact.phoneNumber = newPhoneNumber;
            console.log("Contact \"".concat(name, "\" updated successfully."));
        }
        else {
            console.log("Contact \"".concat(name, "\" not found."));1
            
        }
    };
    PhoneBook.prototype.deleteContact = function (name) {
        var index = this.contacts.findIndex(function (contact) { return contact.name === name; });
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log("Contact \"".concat(name, "\" deleted successfully."));
        }
        else {
            console.log("Contact \"".concat(name, "\" not found."));
        }
    };
    PhoneBook.prototype.displayContacts = function () {
        console.log("Contacts:");
        this.contacts.forEach(function (contact) {
            console.log("".concat(contact.name, ": ").concat(contact.phoneNumber).concat(contact.alterPhonenumber));
        });
    };
    PhoneBook.prototype.findContact = function (name) {
        return this.contacts.find(function (contact) { return contact.name === name; });
    };
    return PhoneBook;
}());
exports.default = PhoneBook;
