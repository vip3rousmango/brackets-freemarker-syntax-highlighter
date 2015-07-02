/*jslint devel:true */

define(function (require, exports, module) {
	'use strict';
	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	LanguageManager.defineLanguage("freemarker", {
		name: "Freemarker",
		mode: "freemarker",
		fileExtensions: ["ftl"],
		lineComment: ["<#--","-->"],
		blockComment: ["<#--","-->"]
	});

	console.log("Freemarker syntax highlighting extension loaded");
});
