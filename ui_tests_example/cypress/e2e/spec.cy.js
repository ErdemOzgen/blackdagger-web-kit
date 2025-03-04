describe('template spec', () => {
  it('passes', () => {


    cy.visit('https://demo.testfire.net/');
    cy.wait(30000)
    // cy.window().then((win) => {
    //   win.eval("window.postMessage({'bptk_rattacker':'start'});")
    // });
    cy.window()
      .then($window => {
        $window.postMessage({ 'bptk_rattacker': 'start' }, '*')
      })

    cy.wait(1000)
    cy.get('#LoginLink').click();
    cy.url().should('contains', 'https://demo.testfire.net/login.jsp');
    cy.get('#uid').click();
    cy.get('#uid').type('admin');
    cy.get('#passw').type('admin');
    cy.wait(1000)
    cy.get('tr:nth-child(3) input').click();
    cy.url().should('contains', 'https://demo.testfire.net/bank/main.jsp');

    cy.wait(1000)
    cy.get('#MenuHyperLink2').click();
    cy.url().should('contains', 'https://demo.testfire.net/bank/transaction.jsp');

    cy.wait(1000)
    cy.get('#MenuHyperLink3').click();
    cy.url().should('contains', 'https://demo.testfire.net/bank/transfer.jsp');
    cy.get('#toAccount').select('800001');
    cy.get('#transferAmount').click();
    cy.get('#transferAmount').type('1');
    cy.get('#transfer').click();
    cy.url().should('contains', 'https://demo.testfire.net/bank/doTransfer');

    cy.wait(40000)
    cy.window()
      .then($window => {
        $window.postMessage({ 'bptk_rattacker': 'stop' }, '*')
      })
    cy.wait(12000)
    cy.get('#bptk_rattacker_result').invoke('text').then((text => {
      let result = JSON.parse(text)
      cy.log(result.scanResult.stats.vulnsCount)
      cy.wrap(result.scanResult.stats.vulnsCount).should('be.gt', 0)
    }));
    cy.wait(60000)
  })
})