sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ghp.githubPractise.controller.View1", {
		onInit: function () {

		},
		onClick: function () {
			sap.m.MessageToast.show("Hi");
			sap.m.MessageToast.show("Hi from Chaitali");
		}
	});
});