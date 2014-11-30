// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
( function() {

		/* ---------------------------------- Local Variables ---------------------------------- */
		HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
		SettingsView.prototype.template = Handlebars.compile($("#settings-tpl").html());

		/* Routing */
		var slider = new PageSlider($('body'));

		router.addRoute('', function() {
			$('body').html(new HomeView().render().$el);
			//slider.slidePage(new HomeView().render().$el);
		});
		router.addRoute('settings', function() {
			sv = new SettingsView();
			$('body').html(sv.render().$el);

			//slider.slidePage(sv.render().$el);
			sv.ready();
		});

		router.start();
		/* End Routing */

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
