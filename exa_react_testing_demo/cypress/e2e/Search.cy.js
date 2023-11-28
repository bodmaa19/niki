describe('Search Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display correct result message when searching for a name', () => {
        cy.get('#searchNameInput').type('Manuel');
        cy.get('#searchNameButton').click();
        cy.get('#searchNameResult').contains('Manuel ist enthalten!');
        // cy.get('[data-testid=result]').should('have.text', 'Manuel ist enthalten!');
    });

    it('should display correct result message when searching for a name not in the list', () => {
        cy.get('#searchNameInput').type('Manuel_2');
        cy.get('#searchNameButton').click();
        cy.get('#searchNameResult').contains('Manuel_2 ist nicht enthalten!');
        // cy.get('[data-testid=result]').should('have.text', 'Manuel_2 ist nicht enthalten!');
    });
});
