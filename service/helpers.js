'use strict';

var Handlebars = require('handlebars'),
    Moment = require('moment');

// Handlebars template helpers

exports.prettifyDate = function (timestamp) {
     return Moment(timestamp * 1000).format("D MMM YYYY HH:mm");
};

exports.prettifyDuration = function(seconds) {
     return Moment.duration(seconds * 1000).humanize();
};

exports.sectionHighlight = function (section, options) {
    console.log(section + ' vs ' + options.hash.name);
    return (section === options.hash.name) ? new Handlebars.SafeString(' aria-selected=true') : '';
};

exports.dispBytes = function(bytes) {
    var i = 0;
    var byteUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        bytes /= 1024;
        i++;
    } while (bytes > 1024);

    return new Handlebars.SafeString(Math.max(bytes, 0.1).toFixed(1) + byteUnits[i]);
};
