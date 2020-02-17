module.exports = function(app){

	const root = "/samples/server";

	// dataview, datatable
	require("./films")(app, root);

	// combo, select
	require("./countries")(app, root);

	// tree
	require("./projects")(app, root);
	require("./pages")(app, root);

	// common
	require("./syntetic")(app, root);
	require("./mirror")(app, root);

};