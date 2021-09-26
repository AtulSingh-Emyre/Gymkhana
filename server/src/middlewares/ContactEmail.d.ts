declare type NewType = any;
export declare class ContactEmail {
    private static instance;
    private contactEmail;
    /**
     * The ContactEmail's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor();
    /**
     * The static method that controls the access to the ContactEmail instance.
     *
     * This implementation let you subclass the ContactEmail class while keeping
     * just one instance of each subclass around.
     */
    static getInstance(): ContactEmail;
    /**
     * Finally, any ContactEmail should define some business logic, which can be
     * executed on its instance.
     */
    setContactEmail(contactEmail: NewType): void;
    getContactEmail(): any;
}
export {};
