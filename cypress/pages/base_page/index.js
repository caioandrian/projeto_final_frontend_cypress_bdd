export default class Base {

    static getElement(element, index = undefined, scrollIntoView = false) {
        let elem;

        if (typeof index !== 'undefined' || index > 0) {
            if(!scrollIntoView)
                elem = cy.get(element, { timeout: Cypress.env('global_timeout') }).eq(index)
            else
                elem = cy.get(element, { timeout: Cypress.env('global_timeout') }).eq(index).scrollIntoView();
        } else {
            if(!scrollIntoView)
                elem = cy.get(element, { timeout: Cypress.env('global_timeout') })
            else
                elem = cy.get(element, { timeout: Cypress.env('global_timeout') }).scrollIntoView()
        }
        return elem;
    }

    static getElementWithOption(element, index = undefined, scrollIntoView = false) {
        let elem;

        if (typeof index !== 'undefined' || index > 0) {
            if(!scrollIntoView)
                elem = cy.get(element + " option", { timeout: Cypress.env('global_timeout') }).eq(index)
            else
                elem = cy.get(element + " option", { timeout: Cypress.env('global_timeout') }).eq(index).scrollIntoView();
        } else {
            if(!scrollIntoView)
                elem = cy.get(element + " option", { timeout: Cypress.env('global_timeout') })
            else
                elem = cy.get(element + " option", { timeout: Cypress.env('global_timeout') }).scrollIntoView()
        }
        return elem;
    }

    static verifyIfPageContainingTextVisible(text, scrollIntoView = false) {
        if(!scrollIntoView)
            return cy.contains(text, { timeout: Cypress.env('global_timeout') })
                .should('be.visible')
        else
            return cy.contains(text, { timeout: Cypress.env('global_timeout') }).scrollIntoView()
                .should('be.visible')
    }


    static getElementByXPath(element, index = undefined, scrollIntoView = false) {
        let elem;

        if (typeof index !== 'undefined' || index > 0) {
            if(!scrollIntoView)
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).eq(index)
            else
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).eq(index).scrollIntoView()
        } else {
            if(!scrollIntoView)
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') })
            else
                elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).scrollIntoView()
        }

        return elem;
    }

    static getElementInvokeText(element, index = undefined, scrollIntoView = false) {
        return this.getElement(element, index, scrollIntoView).should('be.visible').invoke('text')
    }

    static setElementTypeValue(element, value, index = undefined, scrollIntoView = false) {
        this.getElement(element, index, scrollIntoView).clear().type(value);
    }

    static removeReadOnly(element, index = undefined, scrollIntoView = false) {
        this.getElement(element, index, scrollIntoView).then((x) => {
            x.removeAttr('readonly','readonly')
        })
    }

    static clickOnElementByFind_InsideAnotherElement(element, btnInsideOfModal, index = undefined, scrollIntoView = false, optforce = false){
        this.getElement(element,  index, scrollIntoView)
            .should('be.visible')
            .find(btnInsideOfModal)
            .click({force: true})
    }

    static clickOnModalByXPath_and_elementInside(element, btnInsideOfModal, index = undefined, scrollIntoView = false, optforce = false){
        this.getElementByXPath(element, index, scrollIntoView)
            .should('be.visible')
            .find(btnInsideOfModal)
            .click({force: true})
    }

    static clickOnElement(element, index = undefined, scrollIntoView = false, force = false) {
        if (force === true) {
            if(!scrollIntoView)
                return this.getElement(element, index).click({ force: true });
            else
                return this.getElement(element, index).scrollIntoView().click({ force: true });
        } else {
            if(!scrollIntoView)
                return this.getElement(element, index).click();
            else
                return this.getElement(element, index).scrollIntoView().click();
        }
    }

    static clickOnElementByXpath(element, index = undefined, scrollIntoView = false, force = false) {
        if (force === true) {
            if(!scrollIntoView)
                return this.getElementByXPath(element, index).click({ force: true });
            else
                return this.getElementByXPath(element, index).scrollIntoView().click({ force: true });
        } else {
            if(!scrollIntoView)
                return this.getElementByXPath(element, index).click();
            else
                return this.getElementByXPath(element, index).scrollIntoView().click();
        }
    }

    static clickOnElementByText(element, text, scrollIntoView = false, force = false) {
        if (force === true) {
                return this.getElement(element, undefined, scrollIntoView).contains(text).click({force: true});
        } else {
                return this.getElement(element, undefined, scrollIntoView).contains(text).click();
        }
    }

    static clickOnText(text, scrollIntoView = false, force = false) {
        if (force === true) {
            if(!scrollIntoView)
                return cy.contains(text).click({force: true});
            else
                return cy.contains(text).scrollIntoView().click({force: true});
        } else {
            if(!scrollIntoView)
                return cy.contains(text).click();
            else
                return cy.contains(text).scrollIntoView().click();
        }
    }

    static validateElementLenghtByXPath(element, quantidade, option = "", index = undefined, scrollIntoView = false){
        if(option === "" || option === "=")
            //igual
            this.getElementByXPath(element, index, scrollIntoView).should('have.length', quantidade)
        else{
            switch (option) {
                //no mínimo
                case ">=":
                    this.getElementByXPath(element, index, scrollIntoView).should('have.length.at.least', quantidade)
                    break;

                 //no máximo
                 case "<=":
                    this.getElementByXPath(element, index, scrollIntoView).should('have.length.at.most', quantidade)
                    break;

                //maior que
                case ">":
                    this.getElementByXPath(element, index, scrollIntoView).should('have.length.greaterThan', quantidade)
                    break;

                //menor que
                case "<":
                    this.getElementByXPath(element, index, scrollIntoView).should('have.length.below', quantidade)
                    break;

                default:
                    break;
            }
        }
    }

    static validateElementLenght(element, quantidade, option = "", index = undefined, scrollIntoView = false){
        if(option === "=" || option === "")
            //igual
            this.getElement(element, index, scrollIntoView).should('have.length', quantidade)
        else{
            switch (option) {
                //no mínimo
                case ">=":
                    this.getElement(element, index, scrollIntoView).should('have.length.at.least', quantidade)
                    break;

                 //no máximo
                 case "<=":
                    this.getElement(element, index, scrollIntoView).should('have.length.at.most', quantidade)
                    break;

                //maior que
                case ">":
                    this.getElement(element, index, scrollIntoView).should('have.length.greaterThan', quantidade)
                    break;

                //menor que
                case "<":
                    this.getElement(element, index, scrollIntoView).should('have.length.below', quantidade)
                    break;

                default:
                    break;
            }
        }
    }

    static verifyIfCheckBoxElementIsChecked(element, index = undefined, scrollIntoView = false){
        this.getElement(element, index, scrollIntoView).should('be.checked')
    }

    static verifyIfCheckBoxElementIsNotChecked(element, index = undefined, scrollIntoView = false){
        this.getElement(element, index, scrollIntoView).should('be.not.checked')
    }

    static validateTextElement(element, texto, index = undefined, scrollIntoView = false){
        if(texto)
            this.getElement(element, index, scrollIntoView).should('have.text', texto)
        else
            this.getElement(element, index, scrollIntoView).should('not.be.empty')
    }

    static verifyIfElementExists(element, index = undefined, scrollIntoView = false) {
        this.getElement(element, index, scrollIntoView).should('exist', { timeout: Cypress.env('global_timeout') });
    }

    static verifyIfElementNotExists(element, index = undefined, scrollIntoView = false) {
        this.getElement(element, index, scrollIntoView).should('not.exist', { timeout: Cypress.env('global_timeout') });
    }

    static verifyIfElementIsVisible(element, index = undefined, scrollIntoView = false ) {
        this.getElement(element, index, scrollIntoView).should('to.be.visible', { timeout: Cypress.env('global_timeout') });
    }

    static verifyIfElementIsVisibleByXPatch(element, index = undefined, scrollIntoView = false ) {
        this.getElementByXPath(element, index, scrollIntoView).should('to.be.visible', { timeout: Cypress.env('global_timeout') });
    }

    static verifyIfElementIsHidden(element, index = undefined, scrollIntoView = false) {
        this.getElement(element, index, scrollIntoView).should('not.be.visible', { timeout: Cypress.env('global_timeout') });
    }

    static verifyIfElementNotEmpty(element, index = undefined, scrollIntoView = false) {
            this.getElement(element, index, scrollIntoView)
                .should('not.be.empty', { timeout: Cypress.env('global_timeout') });
    }

    static verifyIfElementByXPathNotEmpty(element, index = undefined, scrollIntoView = false) {
            this.getElementByXPath(element, index, scrollIntoView)
                .should('not.be.empty', { timeout: Cypress.env('global_timeout') });
    }

    static selectOption(element, option, index = undefined, scrollIntoView = false) {
        return this.getElement(element, index, scrollIntoView).select(option);
    }

}