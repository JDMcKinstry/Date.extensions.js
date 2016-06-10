# Date.extensions.js
Simple extensions to the Date object for adding time (use - to subtract times)

Examples
---

	//	All examples using something like:
	var d = new Date();	//	Fri Jun 10 2016 16:27:09 GMT-0400 (Eastern Daylight Time)
	
	//	addYears
	d.addYears(1);		//	Sat Jun 10 2017 16:27:09 GMT-0400 (Eastern Daylight Time)
	d.addYears(-1);		//	Wed Jun 10 2015 16:27:09 GMT-0400 (Eastern Daylight Time)
	
	//	addMonths
	d.addMonths(1);		//	Sun Jul 10 2016 16:27:09 GMT-0400 (Eastern Daylight Time)
	d.addMonths(-1);	//	Tue May 10 2016 16:27:09 GMT-0400 (Eastern Daylight Time)
	
	//	addWeeks
	d.addWeeks(1);		//	Fri Jun 17 2016 16:27:09 GMT-0400 (Eastern Daylight Time)
	d.addWeeks(-1);		//	Fri Jun 03 2016 16:27:09 GMT-0400 (Eastern Daylight Time)
	
	//	addDays
	d.addDays(1);		//	Sat Jun 11 2016 16:27:09 GMT-0400 (Eastern Daylight Time)
	d.addDays(-1);		//	Thu Jun 09 2016 16:27:09 GMT-0400 (Eastern Daylight Time)
	
	//	addHours
	d.addHours(1);		//	Fri Jun 10 2016 17:27:09 GMT-0400 (Eastern Daylight Time)
	d.addHours(-1);		//	Fri Jun 10 2016 15:27:09 GMT-0400 (Eastern Daylight Time)
	
	//	addMinutes
	d.addMinutes(1);	//	Fri Jun 10 2016 16:28:09 GMT-0400 (Eastern Daylight Time)
	d.addMinutes(-1);	//	Fri Jun 10 2016 16:26:09 GMT-0400 (Eastern Daylight Time)
	
	//	addSeconds
	d.addSeconds(1);	//	Fri Jun 10 2016 16:27:10 GMT-0400 (Eastern Daylight Time)
	d.addSeconds(-1);	//	Fri Jun 10 2016 16:27:08 GMT-0400 (Eastern Daylight Time)
