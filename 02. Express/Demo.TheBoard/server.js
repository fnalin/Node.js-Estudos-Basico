﻿var http = require("http");
var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("<html><body><h1>Express</h1></body></html>");
});

app.get("/api/users", function (req, res) {
	res.set("Content-Type", "application/json");
	res.send({ nome: "Fabiano Nalin", ehValido: true, grupo: "Administrador" });
});

var server = http.createServer(app);
server.listen(3000);