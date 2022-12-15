/// <reference types="cypress" />

const { imgSrcToBlob } = require("blob-util");
const { chocolate } = require("color-name");

describe('Automated tests for Automation Test Store', () => {


it('Buying path', () => {
    
    cy.visit('https://automationteststore.com/')


    //Shoes//
    cy.get('.container-fluid')
    .eq(2)
    .find('#categorymenu')
    .find('.subnav')
    .find('ul[class="nav-pills categorymenu"]')
    .find('li')
    .eq(7)
    .invoke('show')
    .then( (apparelAndAccessories) => {
      cy.wrap(apparelAndAccessories)
      .find('.subcategories')
      .invoke('show')
      .find('a[href="https://automationteststore.com/index.php?rt=product/category&path=68_69"]')
      .click()
    })

    cy.get('#maincontainer')
    .find('div[class="thumbnails grid row list-inline"]')
    .find('div')
    .first()
    .find('div[class="pricetag jumbotron"]')
    .find('i')
    .click()

    cy.get('#maincontainer')
    .find('.container-fluid')
    .first()
    .find('div[class="col-md-9 col-xs-12 mt20"]')
    .find('#product_details')
    .find('div[class="col-md-6"]')
    .find('.quantitybox')
    .find('div[class="form-group"]')
    .then( (formGroup) => {
      cy.wrap(formGroup)
      .first()
      .find('div[class="input-group col-sm-10"]')
      .find('label[for="option344749"]')
      .find('#option344749')
      .check()

      cy.wrap(formGroup)
      .parents('.quantitybox')
        .then( (quantityBox) => {
          cy.wrap(quantityBox)
          .find('div[class="form-group mt20"]')
          .find('#product_quantity')
          .type('{backspace}6')

          cy.wrap(quantityBox)
          .find('div[class="mt20 "]')
          .find('.productpagecart')
          .click()
        })
      
    })

    //Shirt//
    cy.get('.container-fluid')
    .eq(2)
    .find('#categorymenu')
    .find('.subnav')
    .find('ul[class="nav-pills categorymenu"]')
    .find('li')
    .eq(7)
    .invoke('show')
    .then( (apparelAndAccessories) => {
      cy.wrap(apparelAndAccessories)
      .find('.subcategories')
      .invoke('show')
      .find('a[href="https://automationteststore.com/index.php?rt=product/category&path=68_70"]')
      .click()
    })
    
    cy.get('#maincontainer')
    .find('div[class="thumbnails grid row list-inline"]')
    .find('div')
    .eq(21)
    .find('div[class="pricetag jumbotron"]')
    .find('i')
    .click()

    cy.get('#maincontainer')
    .find('.container-fluid')
    .first()
    .find('div[class="col-md-9 col-xs-12 mt20"]')
    .find('#product_details')
    .find('div[class="col-md-6"]')
    .find('.quantitybox')
    .find('div[class="form-group"]')
    .then( (formGroup) => {
      cy.wrap(formGroup)
      .first()
      .find('div[class="input-group col-sm-10"]')
      .find('select')
      .select('White  (999790 In Stock)')

      cy.wrap(formGroup)
      .parents('.quantitybox')
        .then( (quantityBox) => {
          cy.wrap(quantityBox)
          .find('div[class="form-group mt20"]')
          .find('#product_quantity')
          .type('{backspace}6')

          cy.wrap(quantityBox)
          .find('div[class="mt20 "]')
          .find('.productpagecart')
          .click()
        })

     })
    
     //Beuty cream//
    cy.get('div[role="navigation"]')
    .find('#search_form')
    .then( (searchForm) => {
      cy.wrap(searchForm)
      .find('input[type="text"]')
      .type('spf')

      cy.wrap(searchForm)
      .find('.button-in-search')
      .click()
    })

    cy.get('#maincontainer')
    .find('div[class="thumbnails grid row list-inline"]')
    .find('div')
    .eq(13)
    .find('div[class="pricetag jumbotron"]')
    .find('i')
    .click()


    //Buy//
    cy.get('ul[class="nav topcart pull-left"]')
    .invoke('show')
    .find('a[href="https://automationteststore.com/index.php?rt=checkout/shipping"]')
    .invoke('show')
    .click({force:true})
    
    cy.get('div[class="col-sm-6 newcustomer"]')
    .then( (newCustomer) => {
      cy.wrap(newCustomer)
      .find('#accountFrm_accountguest')
      .check()

      cy.wrap(newCustomer)
      .find('button[title="Continue"]')
      .click()
  })

  cy.get('#guestFrm')
  .then( (guestForm) => {
    cy.wrap(guestForm)
    .find('#guestFrm_firstname')
    .type('Katarzyna')

    cy.wrap(guestForm)
    .find('#guestFrm_lastname')
    .type('Rebelska')

    cy.wrap(guestForm)
    .find('#guestFrm_email')
    .type('rebelska@buhaha.pl')

    cy.wrap(guestForm)
    .find('#guestFrm_telephone')
    .type('123456789')

    cy.wrap(guestForm)
    .find('#guestFrm_address_1')
    .type('Aleje Krakowskie 2')
    
    cy.wrap(guestForm)
    .find('#guestFrm_city')
    .type('Warszawa')

    cy.wrap(guestForm)
    .find('#guestFrm_country_id')
    .select('Poland')

    cy.wrap(guestForm)
    .find('#guestFrm_zone_id')
    .select('Mazowieckie')

    cy.wrap(guestForm)
    .find('#guestFrm_postcode')
    .type('00-345')

    cy.wrap(guestForm)
    .find('button[title="Continue"]')
    .click()
  })

  cy.get('button[title="Confirm Order"]')
  .click()

  cy.get('.heading1')
  .should('contain', ' Your Order Has Been Processed!')
  cy.get('.contentpanel')
  .should('contain', 'Your order has been successfully processed!')









})


})