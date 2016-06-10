# Date.extensions.js
Simple extensions to the Date object for adding time (use - to subtract times)

Examples
---

	//	.getDayName(shortForm)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.getDayName();					// Friday
	d.getDayName(true);				// Fri
	
	//	.getMonthName(shortForm)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.getMonthName();				// February
	d.getMonthName(true);			// Feb
	
	//	.getWeek()
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.getWeek();					// 9
	
	//	.addYears([-,+]n)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addYears(1);					//	Sun Mar 01 1981 13:54:55 GMT-0500 (Eastern Standard Time)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addYears(-1);					//	Thu Mar 01 1979 13:54:55 GMT-0500 (Eastern Standard Time)

	
	//	.addMonths([-,+]n)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addMonths(1);					//	Sat Mar 29 1980 13:54:55 GMT-0400 (Eastern Daylight Time)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addMonths(-1);				//	Tue Jan 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)

	
	//	.addWeeks([-,+]n)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addWeeks(1);					//	Fri Mar 07 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addWeeks(-1);					//	Fri Feb 22 1980 13:54:55 GMT-0500 (Eastern Standard Time)

	
	//	.addDays([-,+]n)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addDays(1);					//	Sat Mar 01 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addDays(-1);					//	Thu Feb 28 1980 13:54:55 GMT-0500 (Eastern Standard Time)

	
	//	.addHours([-,+]n)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addHours(1);					//	Fri Feb 29 1980 14:54:55 GMT-0500 (Eastern Standard Time)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addHours(-1);					//	Fri Feb 29 1980 12:54:55 GMT-0500 (Eastern Standard Time)

	
	//	.addMinutes([-,+]n)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addMinutes(1);				//	Fri Feb 29 1980 13:55:55 GMT-0500 (Eastern Standard Time)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addMinutes(-1);				//	Fri Feb 29 1980 13:53:55 GMT-0500 (Eastern Standard Time)

	
	//	.addSeconds([-,+]n)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addSeconds(1);				//	Fri Feb 29 1980 13:54:56 GMT-0500 (Eastern Standard Time)
	var d = new Date(320698495959);	//	Fri Feb 29 1980 13:54:55 GMT-0500 (Eastern Standard Time)
	d.addSeconds(-1);				//	Fri Feb 29 1980 13:54:54 GMT-0500 (Eastern Standard Time)
