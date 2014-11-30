var HomeView = function(service) {

	var number = '0736688367';

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
		sendSms(number, 'Heater turned on', 'on');
	};

	this.heaterOff = function(event) {
		event.preventDefault();
		sendSms(number, 'Heater turned off', 'off');
	};

	this.temp = function(event) {
		event.preventDefault();
		sendSms(number, 'Temp request sent', 'temp');
	};

	this.voltage = function(event) {
		event.preventDefault();
		sendSms(number, 'Voltage request sent', 'voltage');
	};

	this.status = function(event) {
		event.preventDefault();
		sendSms(number, 'Status request sent', 'status');
	};

	this.help = function(event) {
		event.preventDefault();
		sendSms(number, 'Help request sent', 'help');
	};

	function sendSms(number, message, smsMessage) {
		var intent = "";
		sms.send(number, smsMessage, intent, window.plugins.toast.showShortBottom(message), window.plugins.toast.showShortBottom('Error'));
	}


	this.initialize();

}

