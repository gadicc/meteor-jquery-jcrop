Package.describe({
	summary: "jQuery Jcrop repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files(['lib/Jcrop/js/jquery.Jcrop.js'],'client');
});
