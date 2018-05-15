import { browser, by, element } from 'protractor';
import { timeout } from 'rxjs/operators';
import { protractor } from 'protractor/built/ptor';

describe('User tests', () => {
  it('1.1 - Update User info', async() => {
    browser.get('/login');
    element(by.id('password')).sendKeys('eeqq');
    element(by.id('email')).sendKeys('emil93falk@hotmail.com');
    element(by.id('btnLogin')).click();
    element(by.id('navProfile')).click();
    element(by.id('btnUpdateUser')).click();
    element(by.id('updateFirstname')).sendKeys('Emilo');
    element(by.id('updateLastname')).sendKeys('Falk');
    element(by.id('updatePw')).sendKeys('eeqq');
    element(by.id('updateEmail')).sendKeys('emil93falk@hotmail.com');
    element(by.id('updatePhone')).sendKeys('11');
    element(by.id('userUpdated')).click();
    const name = element(by.id('userFirstname')).getText();
    expect(name).toBe('Emilo');
  })
  it('1.2 Delete a user', async() => {
    browser.get('/login');
    element(by.id('password')).sendKeys('eeqq');
    element(by.id('email')).sendKeys('emil93falk@hotmail.com');
    element(by.id('navUserlist')).click();
    element.all(by.css('.userslist')).then(function(elemsBefore) {
      element.all(by.css('.btnDeleteUser')).get(10).click();
      element.all(by.css('.userslist')).then(function(elemsafter) {
        expect(elemsafter.length - elemsBefore.length).toBe(-1);
    });
  });
});


})
