var HomeView = function() {

	var number = '0764253283';//Phone number
	var error = function(e) {
		alert('Message failed: ' + e)
	};
	var sent = function(message) {
		window.plugins.toast.showShortBottom(message)
	};

	this.render = function() {
		this.$el.html(this.template());

		return this;
	};

	this.initialize = function() {
		// Define a div wrapper for the view (used to attach events)
		this.$el = $('<div/>');
		this.$el.on('click', '.heater-on', this.heaterOn);
		this.$el.on('click', '.heater-off', this.heaterOff);
		this.$el.on('click', '.temp', this.temp);
		this.$el.on('click', '.voltage', this.voltage);
		this.$el.on('click', '.status', this.status);
		this.$el.on('click', '.help', this.help);
		this.render();
	};

	this.heaterOn = function(event) {
		event.preventDefault();
		sms.send(number, 'on', '', sent('Heater turned on'), error);
	};

	this.heaterOff = function(event) {
		event.preventDefault();
		sms.send(number, 'off', '', sent('Heater turned of'), error);
	};

	this.temp = function(event) {
		event.preventDefault();
		sms.send(number, 'temp', '', sent('Temp request sent'), error);
	};

	this.voltage = function(event) {
		event.preventDefault();
		sms.send(number, 'voltage', '', sent('Voltage request sent'), error);
	};

	this.status = function(event) {
		event.preventDefault();
		sms.send(number, 'status', '', sent('Status request sent'), error);
	};

	this.help = function(event) {
		event.preventDefault();
		sms.send(number, 'help', '', sent('Help request sent'), error);
	};

	this.initialize();

}

