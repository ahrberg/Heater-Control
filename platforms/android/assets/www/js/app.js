// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
( function() {

		/* ---------------------------------- Local Variables ---------------------------------- */
		HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());


		 $('body').html(new HomeView().render().$el);
		


		/* --------------------------------- Event Registration -------------------------------- */

		document.addEventListener('deviceready', function() {

			//fix for iphone top status bar
			StatusBar.overlaysWebView(false);
			StatusBar.backgroundColorByHexString('#ffffff');
			StatusBar.styleDefault();
			//end status bar fix


		}, false);

		/* ---------------------------------- Local Functions ---------------------------------- */

	}());
