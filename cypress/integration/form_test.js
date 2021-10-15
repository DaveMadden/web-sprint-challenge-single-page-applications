describe('testing user-onboarding', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000');
    })

    //getters
    const name = () => cy.get('input[name=name]');
    const size = () => cy.get('input[name=size]');
    const jalapeno = () => cy.get('input[name=jalapeno]');
    const bacon = () => cy.get('input[name=bacon]');
    const pineapple = () => cy.get('input[name=pineapple]');
    const roasted_garlic = () => cy.get('input[name=roasted_garlic]');
    const special = () => cy.get('input[name=special]');
    const submit = () => cy.get("button[id='order-pizza']");

    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })

    it('elements are selected and showing', () => {
        name().should('exist');
        size().should('exist');
        jalapeno().should('exist');
        bacon().should('exist');
        pineapple().should('exist');
        roasted_garlic().should('exist');
        special().should('exist');
        submit().should('exist');
    })

    describe('filling out inputs etc', () => {
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })
        // submit button should start out disabled
        it('submit button starts out disabled', () => {
            submit().should('be.disabled');
        })
        //can type in inputs
        it('can type in the inputs and check the box', () => {
            fname()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
            lname()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
            email()
                .should('have.value', '')
                .type('test@test.com')
                .should('have.value', 'test@test.com');
            pwd()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
            tos()
                .should('not.be.checked')
                .check()
                .should('be.checked');
        })
    })
    describe('testing submit', () => {
        it('submit is enabled when shit is good', () => {
            fname().type('testing');
            lname().type('testing');
            email().type('testing@test.com');
            pwd().type('testing');
            tos().check();
            submit().should('not.be.disabled');
        })
        it('submit populates the dom', () => {
            fname().type('Wendell');
            lname().type('Berry');
            email().type('nocontact@doesnthaveone.com');
            pwd().type('worldendingfire');
            tos().check();
            submit().click();
            cy.contains('Wendell');
        })
    })
    describe('testing validation', () => {
        //no first
        it('testing no first name', () => {
            lname().type('Berry');
            email().type('nocontact@doesnthaveone.com');
            pwd().type('worldendingfire');
            tos().check();
            submit().should('be.disabled');
        })
        
    })
})