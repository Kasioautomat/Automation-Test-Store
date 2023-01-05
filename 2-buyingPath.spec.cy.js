/// <reference types="cypress" />

const { imgSrcToBlob } = require("blob-util");
const { chocolate } = require("color-name");

describe('Automated tests for Automation Test Store', () => {


  it('Buying path', () => {

    cy.visit('https://automationteststore.com/')

    //Checking Total price and number of things//
    cy.get('.container-fluid')
      .eq(1)
      .find('.block_7')
      .trigger('mouseover')
      .then((productsList) => {
        cy.wrap(productsList)
          .find('.text-center')
          .should('have.class', 'empty_cart')
      })

    //Putting shoes to the busket//
    cy.get('.container-fluid')
      .eq(2)
      .find('#categorymenu')
      .find('.subnav')
      .find('ul[class="nav-pills categorymenu"]')
      .find('li')
      .eq(7)
      .invoke('show')
      .then((apparelAndAccessories) => {
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
      .then((formGroup) => {
        cy.wrap(formGroup)
          .first()
          .find('div[class="input-group col-sm-10"]')
          .find('label[for="option344749"]')
          .find('#option344749')
          .check()

        cy.wrap(formGroup)
          .parents('.quantitybox')
          .then((quantityBox) => {
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

    //Checking Total price and number of things//
    cy.get('.container-fluid')
      .eq(1)
      .find('.block_7')
      .trigger('mouseover')
      .then((productsList) => {
        cy.wrap(productsList)
          .find('table[class="totals"]')
          .find('tr')
          .eq(1)
          .find('td')
          .eq(1)
          .should('contain', '$156.00')

        cy.wrap(productsList)
          .find('.products')
          .find('tr')
          .find('td[class="quantity"]')
          .should('contain', '6')
      })

    //Putting shirt to the busket//
    cy.get('.container-fluid')
      .eq(2)
      .find('#categorymenu')
      .find('.subnav')
      .find('ul[class="nav-pills categorymenu"]')
      .find('li')
      .eq(7)
      .invoke('show')

      .then((apparelAndAccessories) => {
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
      .then((formGroup) => {
        cy.wrap(formGroup)
          .first()
          .find('div[class="input-group col-sm-10"]')
          .find('#option350')
          //.select('White  (999685 In Stock)')
          .find('option')
          .eq(1)

        cy.wrap(formGroup)
          .parents('.quantitybox')
          .then((quantityBox) => {
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

    //Checking Total price//
    cy.get('.container-fluid')
      .eq(1)
      .find('.block_7')
      .trigger('mouseover')
      .then((productsList) => {
        cy.wrap(productsList)
          .find('table[class="totals"]')
          .find('tr')
          .eq(1)
          .find('td')
          .eq(1)
          .should('contain', '$348.00')

        cy.wrap(productsList)
          .find('.products')
          .find('tr')
          .first()
          .find('td[class="quantity"]')
          .should('contain', '6')

        cy.wrap(productsList)
          .find('.products')
          .find('tr')
          .eq(1)
          .find('td[class="quantity"]')
          .should('contain', '6')
      })

    //Putting beuty cream to the basket//
    cy.get('div[role="navigation"]')
      .find('#search_form')
      .then((searchForm) => {
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

    //Checking Total price and number of things//
    cy.get('.container-fluid')
      .eq(1)
      .find('.block_7')
      .trigger('mouseover')
      .then((productsList) => {
        cy.wrap(productsList)
          .find('table[class="totals"]')
          .find('tr')
          .eq(1)
          .find('td')
          .eq(1)
          .should('contain', '$390.00')

        cy.wrap(productsList)
          .find('.products')
          .find('tr')
          .first()
          .find('td[class="quantity"]')
          .should('contain', '6')

        cy.wrap(productsList)
          .find('.products')
          .find('tr')
          .eq(1)
          .find('td[class="quantity"]')
          .should('contain', '6')

        cy.wrap(productsList)
          .find('.products')
          .find('tr')
          .eq(2)
          .find('td[class="quantity"]')
          .should('contain', '1')
      })

    //Buying//
    cy.get('ul[class="nav topcart pull-left"]')
      .invoke('show')
      .find('a[href="https://automationteststore.com/index.php?rt=checkout/shipping"]')
      .invoke('show')
      .click({ force: true })

    cy.get('div[class="col-sm-6 newcustomer"]')
      .then((newCustomer) => {
        cy.wrap(newCustomer)
          .find('#accountFrm_accountguest')
          .check()

        cy.wrap(newCustomer)
          .find('button[title="Continue"]')
          .click()
      })

    //Form//
    //1. Entering wrong boundary data//
    cy.get('#guestFrm')
      .then((guestForm) => {
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
          .type('Al')

        cy.wrap(guestForm)
          .find('#guestFrm_city')
          .type('Wa')

        cy.wrap(guestForm)
          .find('#guestFrm_postcode')
          .type('00')

        cy.wrap(guestForm)
          .find('button[title="Continue"]')
          .click()
      })

    //Error msg check//
    cy.get('#guestFrm')
      .then((guestForm) => {
        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .first()
          .should('have.class', 'has-error')
          .should('contain', 'Address 1 must be greater than 3 and less than 128 characters!')

        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .eq(1)
          .should('have.class', 'has-error')
          .should('contain', 'City must be greater than 3 and less than 128 characters!')

        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .eq(2)
          .should('have.class', 'has-error')
          .should('contain', 'Please select a region / state!')

        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .eq(3)
          .should('have.class', 'has-error')
          .should('contain', 'Zip/postal code must be between 3 and 10 characters!')
      })

    //2. Entering wrong boundary data//
    cy.get('#guestFrm')
      .then((guestForm) => {
        cy.wrap(guestForm)
          .find('#guestFrm_address_1')
          .type('M$VuS:]jGR#eQ]rPwU8QnZd8Gwnq9p]hP9jpzH]drnd*,MH6qcjP/{@Jd!*j8+@_bBJZr$9pbxmupU${2AM55:j_,?Q;L,btu,S!3N/n5%JJ@dS?[AE(5yJXQ:PW&8')

        cy.wrap(guestForm)
          .find('#guestFrm_city')
          .type('M$VuS:]jGR#eQ]rPwU8QnZd8Gwnq9p]hP9jpzH]drnd*,MH6qcjP/{@Jd!*j8+@_bBJZr$9pbxmupU${2AM55:j_,?Q;L,btu,S!3N/n5%JJ@dS?[AE(5yJXQ:PW&8')

        cy.wrap(guestForm)
          .find('#guestFrm_postcode')
          .type('f4560-gk1')

        cy.wrap(guestForm)
          .find('button[title="Continue"]')
          .click()
      })

    //Error msg check//
    cy.get('#guestFrm')
      .then((guestForm) => {
        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .first()
          .should('have.class', 'has-error')
          .should('contain', 'Address 1 must be greater than 3 and less than 128 characters!')

        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .eq(1)
          .should('have.class', 'has-error')
          .should('contain', 'City must be greater than 3 and less than 128 characters!')

        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .eq(2)
          .should('have.class', 'has-error')
          .should('contain', 'Please select a region / state!')

        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .eq(3)
          .should('have.class', 'has-error')
          .should('contain', 'Zip/postal code must be between 3 and 10 characters!')
      })

    //3. Entering good boundary data, only input type select stays empty//
    //There is a bug - the error msg says 'greater than 3' so the boundary string length should be 4 but app accept 3 characters.
    cy.get('#guestFrm')
      .then((guestForm) => {
        cy.wrap(guestForm)
          .find('#guestFrm_address_1')
          .type('{selectAll}{del}Ale')

        cy.wrap(guestForm)
          .find('#guestFrm_city')
          .type('{selectAll}{del}War')

        cy.wrap(guestForm)
          .find('#guestFrm_country_id')
          .select('Poland')

        cy.wrap(guestForm)
          .find('#guestFrm_postcode')
          .type('{selectAll}{del}00-')

        cy.wrap(guestForm)
          .find('button[title="Continue"]')
          .click()
      })

    //Error msg check//
    cy.get('#guestFrm')
      .then((guestForm) => {
        cy.wrap(guestForm)
          .find('div[class="form-group has-error"]')
          .should('have.class', 'has-error')
          .should('contain', 'Please select a region / state!')
      })

    //4. Entering good boundary data//
    //There is a bug - the error msg says 'less than 128' so the boundary string length should be 127 but app accept 124 characters.

    cy.get('#guestFrm')
      .then((guestForm) => {
        cy.wrap(guestForm)
          .find('#guestFrm_address_1')
          .type('mu!$:7;SL7Kcxq8dLz#2+Ct{Ke*%T+KVG&_MjqwzbjcG4t%kxg{7,4KzRL,y@C4ikMHZ3TuHKn5p8JSdG2xFG_:FqKBz%(LK;4yYy!*v/=tH#fk%F3@4bnu-5')

        cy.wrap(guestForm)
          .find('#guestFrm_city')
          .type('mu!$:7;SL7Kcxq8dLz#2+Ct{Ke*%T+KVG&_MjqwzbjcG4t%kxg{7,4KzRL,y@C4ikMHZ3TuHKn5p8JSdG2xFG_:FqKBz%(LK;4yYy!*v/=tH#fk%F3@4bnu-5')

        cy.wrap(guestForm)
          .find('#guestFrm_country_id')
          .select('Poland')

        cy.wrap(guestForm)
          .find('#guestFrm_zone_id')
          .select('Mazowieckie')

        cy.wrap(guestForm)
          .find('#guestFrm_postcode')
          .type('f4560gk')

        cy.wrap(guestForm)
          .find('button[title="Continue"]')
          .click()
      })

    //Confirming order//
    cy.get('button[title="Confirm Order"]')
      .click()

    //Check whether the order was processed succesfully//
    cy.get('.heading1')
      .should('contain', ' Your Order Has Been Processed!')

    cy.get('.contentpanel')
      .then((contentPanel) => {
        cy.wrap(contentPanel)
          .should('contain', 'Your order has been successfully processed!')
          .should('contain', 'You can view your order details by going to the invoice page')
          .should('contain', 'You can view your order details by going to the invoice page')
          .should('contain', 'Please direct any questions you have to the store owner')
          .should('contain', 'Thank you for shopping with us!')
      })


  })


})