"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Zahriya
   Date:   1/26/2024

	
*/



var thisDay = new Date("August 30, 2018");

var tableHTML = "<table id='eventTable'>";

tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

for (var i = 0; i < eventDates.length; i++) {
   //stores the date in the eventDate array
   var eventDate = new Date(eventDates[i]);

   //stores the text of eventDate date
   var eventDay = eventDate.toDateString();

   //stores the text of the eventDate time
   var eventTime = eventDate.toLocaleTimeString();

   /* test eventDate falls within the two-week window */
   if ((thisDay <= eventDate) && (eventDate <= endDate)) {
      tableHTML += "<tr>";

      tableHTML += "<td>" + eventDay + "@" + eventTime + "</td>";
      "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }

}

tableHTML += "</table>";

document.getElementById("eventList").innerHTML = tableHTML;