describe('pizza order form', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000/pizza')
    })

    //getters
    const name = () => cy.get('input[name=name]');
    const size = () => cy.get('select[name=size]');
    const jalapeno = () => cy.get('input[name=jalapeno]');
    const bacon = () => cy.get('input[name=bacon]');
    const pineapple = () => cy.get('input[name=pineapple]');
    const roasted_garlic = () => cy.get('input[name=roasted_garlic]');
    const special = () => cy.get('input[name=special]');
    const submit = () => cy.get("button[id='order-button']");

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

    describe("mvp testing", () => {
        it('can add text to name and special', () => {
            name()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
            special()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
        })
        it('can add multiple toppings', () => {
            jalapeno()
                .should('not.be.checked')
                .check()
                .should('be.checked');
            bacon()
                .should('not.be.checked')
                .check()
                .should('be.checked');
            pineapple()
                .should('not.be.checked')
                .check()
                .should('be.checked');
            roasted_garlic()
                .should('not.be.checked')
                .check()
                .should('be.checked');
        })
        it('can submit the form', () => {
            name().type("Casey Y. Chump");
            special().type("extra jalapenos");
            size().select('absurd');
            jalapeno().check();
            bacon().check();
            pineapple().check();
            roasted_garlic().check();
            submit().click();
            cy.spy(window.console, 'log').as('console.log');
            cy.get('@console.log').should('be.calledWith', "Casey Y. Chump");
        })
        
    })
})