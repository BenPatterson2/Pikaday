const { JSDOM } = require('jsdom');
before(function(){
    const dom = new JSDOM()
    global.window = dom.window;
});

after(function(){
    delete global.window;
})