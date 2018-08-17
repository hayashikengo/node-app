var server = require("./server");
var router = require("./router");
var picturesController = require("./controllers/picturesController");

var handle = {};
handle["/"] = picturesController.start;
handle["/start"] = picturesController.start;
handle["/upload"] = picturesController.upload;
handle["/show"] = picturesController.show;

server.start(router.route, handle);
