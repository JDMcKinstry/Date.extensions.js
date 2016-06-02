
/**	Date[extensions]()
 *	Date.add[Years|Months|Weeks|Days|Hours|Minutes|Seconds]()
 **/
;(function() {	//	Date.add[Years|Months|Weeks|Days|Hours|Minutes|Seconds]
	var methods = {
			'addYears': function(v) { this.setFullYear(this.getFullYear() + parseFloat(v)); return this; },
			'addMonths': function(v) { this.setMonth(this.getMonth() + parseFloat(v)); return this; },
			'addWeeks': function(v) { this.addDays(7 * parseFloat(v)); return this; },
			'addDays': function(v) { this.setDate(this.getDate() + parseFloat(v)); return this; },
			'addHours': function(v) { this.setHours(this.getHours() + parseFloat(v)); return this; },
			'addMinutes': function(v) { this.setMinutes(this.getMinutes() + parseFloat(v)); return this; },
			'addSeconds': function(v) { this.setSeconds(this.getSeconds() + parseFloat(v)); return this; },
		};
	for (var k in methods) {
		var v = methods[k];
		Object['defineProperty'] && !Date.prototype.hasOwnProperty(k)
			? Object.defineProperty(Date.prototype, k, { value: v }) : Date.prototype[k] = v;
	}
})();
