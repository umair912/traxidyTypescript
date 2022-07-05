class Traxidy {

    visit() {
        cy.visit("https://traxidy.thedemo.co/")
    }
    login(){
        cy.get('[type="text"]').type('muhammad.usman@247labs.com')
        cy.get('[type="password"]').type('Test@12345')  
        cy.get('[type="submit"]').click()
    }

    closeAllProjects(){
        cy.wait(5000)
        let el = Cypress.$('tr td');
        if(el.length >1)
        {
            cy.get('.v-simple-checkbox').eq(0).click()
            cy.get('[role="button"]').contains('Manage').click().wait(3000)
            cy.get('[role="menuitem"]').click()
            cy.get('.pa-6 p').contains('Are you sure you want to close the selected projects?')
            cy.get('.v-btn__content').contains('Continue').click()    
        }
    }

    newproject(){
        cy.wait(5000)
        cy.get('#v-step-1').click()
    }
    newProjectinfo(){
        cy.get('#project-name').type('test')
        cy.get('[name="date"]').eq(0).type('2022-08-12').type('{enter}')
        cy.get('[name="date"]').eq(1).type('2022-12-12').type('{enter}')
        cy.get('[type="text"]').eq(5).click({force:true})
        cy.get('[placeholder="Select for End Date"]').click({force:true})
        cy.get('[role="option"]').eq(0).click()
        cy.get('#cp-saveProject').click()
    }
};
export default Traxidy