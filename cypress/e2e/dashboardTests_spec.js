/// <reference types="cypress" />

describe('Tests for Dashboard app', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('Dropdown menu check', () => {

        cy.get('#dropdown-button').click()
        cy.get('.optionsList').contains('Group by Role').click()
        cy.get('.dropdown').should('contain', 'Group by Role')

        cy.get('#dropdown-button').click()
        cy.get('.optionsList').contains('Group by Function').click()
        cy.get('.dropdown').should('contain', 'Group by Function')

    })

    it('Toggle beetween Tabs check', () => {

        cy.get('.tabList').contains('Race').click()
        .should('have.css', 'background-color', 'rgb(248, 248, 248)')

        cy.get('.tabList').contains('Gender').click()
        .should('have.css', 'background-color', 'rgb(248, 248, 248)')

    })

    it('Toggle beetween Tabs check - expanded', () => {

        cy.get('.tabList').contains('Race').click()
        .should('have.css', 'background-color', 'rgb(248, 248, 248)')
        cy.get('#payEquityGap').should('contain', 'Hispanics')

        cy.get('.tabList').contains('Gender').click()
        .should('have.css', 'background-color', 'rgb(248, 248, 248)')
        cy.get('#payEquityGap').should('contain', 'Women')

    })

    it('GET Group by Role', () => {

        cy.intercept('GET', 'https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a').as('getGroupByRole')

        cy.get('#dropdown-button').click()
        cy.get('.optionsList').contains('Group by Role').click()

        cy.wait('@getGroupByRole')
        cy.get('@getGroupByRole').then( xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)

        })

    })

    it('GET Group by Function', () => {

        cy.intercept('GET', 'https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8').as('getGroupByFunction')

        cy.get('#dropdown-button').click()
        cy.get('.optionsList').contains('Group by Function').click()

        cy.wait('@getGroupByFunction')
        cy.get('@getGroupByFunction').then( xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
        })

    })

    it('GET Group Names & IDs', () => {

        cy.intercept('GET', 'https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed').as('getGroupNamesAndIds')

        cy.visit('/')

        cy.wait('@getGroupNamesAndIds')
        cy.get('@getGroupNamesAndIds').then( xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
        })

    })

})