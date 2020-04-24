const expect = require('expect.js');

describe('Pikaday', function ()
{
    'use strict';
    let Pikaday;
    before(function(){
        Pikaday = require('../pikaday');
    })


    it('should expose as a CommonJS module', function ()
    {
        expect(Pikaday).to.be.a('function');
    });

    it('should NOT leak to the global object', function ()
    {
        expect(window).to.not.have.property('Pikaday');
    });

    it('should be possible to create a new instance', function ()
    {
        new Pikaday()
        expect(function () {
            new Pikaday();
        }).to.not.throwException();
    });
});