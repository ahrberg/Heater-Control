var SettingsView = function() {

	this.ready = function() {
		
		var number = window.localStorage.getItem("phoneNumber");
		$("#phone-number").val(number);
		
		cordova.getAppVersion().then(function (version) {
    $('#version').text(version);
});
	};

	this.render = function() {
		this.$el.html(this.template());
		return this;
	};

	this.save = function(event) {
		event.preventDefault();
		var phoneNumber = $("#phone-number").val();
		window.localStorage.setItem("phoneNumber", phoneNumber);
		window.location.replace('#');
		//Go back to home
	};

	this.initialize = function() {
		// Define a div wrapper for the view (used to attach events)
		this.$el = $('<div/>');
		this.$el.on('click', '.btn-nav', this.save);
		this.render();

	};

	this.initialize();

}

