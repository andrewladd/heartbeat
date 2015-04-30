/// <reference path="../typings/jquery/jquery.d.ts"/>

$(function () {
	$("#datepick").datepicker();
});

function isEmpty(str) {
    return (!str || 0 === str.length);
}
