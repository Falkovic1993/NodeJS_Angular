import { browser, by, element } from 'protractor';
import { timeout } from 'rxjs/operators';
import { protractor } from 'protractor/built/ptor';

describe('Test standard user functions as register, login, logout', () => {
  it('1.0 - Register a new user', async() => {
    browser.get('/register');
    element(by.id('firstname')).sendKeys('Emil');
      element(by.id('lastname')).sendKeys('Falk');
      element(by.id('password')).sendKeys('eeewww');
      element(by.id('password2')).sendKeys('eeewww');
      element(by.id('email')).sendKeys('emik@html24.net');
      element(by.id('phone')).sendKeys('12345678');
      element(by.id('btnSignUp')).click();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('http://localhost:49152/login'), 1000).then(function(result) {
        expect(result).toEqual(true);
      })
  })
  it('1.1 - Log into the site', async() => {
    browser.get('/login');
    element(by.id('password')).sendKeys('eeqq');
    element(by.id('email')).sendKeys('emil93falk@hotmail.com');
    element(by.id('btnLogin')).click();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('http://localhost:49152/dashboard'), 1000).then(function(result) {
        expect(result).toEqual(true);
      })
  })
  it('1.2 - Log out of the site', async() => {
    browser.get('/login');
    element(by.id('password')).sendKeys('eeqq');
    element(by.id('email')).sendKeys('emil93falk@hotmail.com');
    element(by.id('btnLogin')).click();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('http://localhost:49152/dashboard'), 1000).then(function(result) {
        element(by.id('btnLogout')).click();
        browser.wait(EC.urlContains('http://localhost:49152/home'), 1000).then(function(result) {
        expect(result).toEqual(true);
      })
      })
  })

})