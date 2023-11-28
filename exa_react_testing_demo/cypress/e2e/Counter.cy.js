describe('Counter App', () => {
    it('should increment the count', () => {
        cy.visit('http://localhost:3000');
        cy.get('#increment').click();
        cy.get('#count').contains('1');
        // Text
        // cy.get('#count').should('have.text', '1');
        // Attribute
        // cy.get('selector').should('have.attr', 'attributName', 'erwarteterWert');
        // cy.get('a#myLink').should('have.attr', 'href', '/ziel');
        // cy.get('img#myImage').should('have.attr', 'src', '/bild.png');
        // cy.get('input#myInput').should('have.attr', 'placeholder', 'Bitte eingeben');
    });
});
