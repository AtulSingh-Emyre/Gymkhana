"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEmail = void 0;
class ContactEmail {
    /**
     * The ContactEmail's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    /**
     * The static method that controls the access to the ContactEmail instance.
     *
     * This implementation let you subclass the ContactEmail class while keeping
     * just one instance of each subclass around.
     */
    static getInstance() {
        if (!ContactEmail.instance) {
            ContactEmail.instance = new ContactEmail();
        }
        return ContactEmail.instance;
    }
    /**
     * Finally, any ContactEmail should define some business logic, which can be
     * executed on its instance.
     */
    setContactEmail(contactEmail) {
        this.contactEmail = contactEmail;
        return;
    }
    getContactEmail() {
        return this.contactEmail;
    }
}
exports.ContactEmail = ContactEmail;
