var Blackbird = require('merlin.js');

var msg = 'Running merlin.js version ' + Blackbird.VERSION;

var engine = Blackbird.engine({
  protocol: 'http',
  cluster: 'search-demo.bbird.io',
  company: 'blackbird',
  environment: 'prod',
  instance: 'blackbird'
});

engine.search().then(function (res) {console.log(res.body)});

document.write(msg);
