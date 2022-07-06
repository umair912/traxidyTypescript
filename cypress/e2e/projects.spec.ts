/// <reference types="cypress" />

import Traxidy from '../support/pages'

const traxidyPage = new Traxidy();

describe('Traxidy Test Cases', () => {
  before( () => {
    traxidyPage.visit();
  })
    it('should login', () => {
      //@ts-ignore
      cy.Login()
    })

    it('traxidy new project', () => {  
       traxidyPage.closeAllProjects();
      traxidyPage.newproject();
      traxidyPage.newProjectinfo();
    })
})
