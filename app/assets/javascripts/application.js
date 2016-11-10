// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery/jquery-2.1.1.js
//= require bootstrap-sprockets
//= require metisMenu/jquery.metisMenu.js
//= require pace/pace.min.js
//= require peity/jquery.peity.min.js
//= require slimscroll/jquery.slimscroll.min.js
//= require vonzu.js
//= require iCheck/icheck.min.js
//= require jquery-ui/jquery-ui-1.10.4.min.js
//= require fullcalendar/moment.min.js
//= require fullcalendar/fullcalendar.min.js
//= require peity/jquery.peity.min.js
//= require sparkline/jquery.sparkline.min.js
//= require footable/footable.all.min.js
//= require slick/slick.min.js
//= require rickshaw/vendor/d3.v3.js
//= require rickshaw/rickshaw.min.js
//= require flot/jquery.flot.js
//= require flot/jquery.flot.tooltip.min.js
//= require flot/jquery.flot.resize.js
//= require flot/jquery.flot.pie.js
//= require flot/jquery.flot.time.js
//= require flot/jquery.flot.spline.js
//= require sparkline/jquery.sparkline.min.js
//= require chartjs/Chart.min.js
//= require jvectormap/jquery-jvectormap-2.0.2.min.js
//= require jvectormap/jquery-jvectormap-world-mill-en.js
//= require toastr/toastr.min.js
//= require iCheck/icheck.min.js
//= require staps/jquery.steps.min.js
//= require validate/jquery.validate.min.js
//= require dropzone/dropzone.js
//= require summernote/summernote.min.js
//= require colorpicker/bootstrap-colorpicker.min.js
//= require cropper/cropper.min.js
//= require datapicker/bootstrap-datepicker.js
//= require ionRangeSlider/ion.rangeSlider.min.js
//= require jasny/jasny-bootstrap.min.js
//= require jsKnob/jquery.knob.js
//= require nouslider/jquery.nouislider.min.js
//= require switchery/switchery.js
//= require chosen/chosen.jquery.js
//= require fullcalendar/moment.min.js
//= require clockpicker/clockpicker.js
//= require daterangepicker/daterangepicker.js
//= require select2/select2.full.min.js
//= require touchspin/jquery.bootstrap-touchspin.min.js
//= require bootstrap-markdown/bootstrap-markdown.js
//= require bootstrap-markdown/markdown.js
//= require bootstrap-tagsinput/bootstrap-tagsinput.js
//= require dualListbox/jquery.bootstrap-duallistbox.js
//= require typehead/bootstrap3-typeahead.min.js
//= require codemirror/codemirror.js
//= require codemirror/mode/javascript/javascript.js
//= require blueimp/jquery.blueimp-gallery.min.js
//= require slick/slick.min.js
//= require flot/jquery.flot.js
//= require flot/jquery.flot.tooltip.min.js
//= require flot/jquery.flot.resize.js
//= require flot/jquery.flot.pie.js
//= require flot/jquery.flot.time.js
//= require flot/jquery.flot.spline.js
//= require sparkline/jquery.sparkline.min.js
//= require chartjs/Chart.min.js
//= require morris/raphael-2.1.0.min.js
//= require morris/morris.js
//= require rickshaw/vendor/d3.v3.js
//= require rickshaw/rickshaw.min.js
//= require chartist/chartist.min.js
//= require d3/d3.min.js
//= require c3/c3.min.js
//= require iCheck/icheck.min.js
//= require summernote/summernote.min.js
//= require sparkline/jquery.sparkline.min.js
//= require toastr/toastr.min.js
//= require nestable/jquery.nestable.js
//= require codemirror/codemirror.js
//= require codemirror/mode/javascript/javascript.js
//= require validate/jquery.validate.min.js
//= require jsTree/jstree.min.js
//= require diff_match_patch/javascript/diff_match_patch.js
//= require preetyTextDiff/jquery.pretty-text-diff.min.js
//= require tinycon/tinycon.min.js
//= require idle-timer/idle-timer.min.js
//= require jquery-ui/jquery-ui.min.js
//= require sweetalert/sweetalert.min.js
//= require masonry/masonry.pkgd.min.js
//= require ladda/spin.min.js
//= require ladda/ladda.min.js
//= require ladda/ladda.jquery.min.js
//= require dotdotdot/jquery.dotdotdot.min.js
//= require bootstrapTour/bootstrap-tour.min.js
//= require i18next/i18next.min.js
//= require clipboard/clipboard.min.js
//= require d3/d3.min.js
//= require topojson/topojson.js
//= require datamaps/datamaps.all.min.js
//= require pdfjs/pdf.js
//= require pdfjs/pdf.worker.js
//= require iCheck/icheck.min.js
//= require iCheck/icheck.min.js
//= require jeditable/jquery.jeditable.js
//= require dataTables/datatables.min.js
//= require jqGrid/i18n/grid.locale-el.js
//= require jqGrid/jquery.jqGrid.min.js
//= require jquery-ui/jquery-ui.min.js
//= require footable/footable.all.min.js
//= require video/responsible-video.js
//= require sparkline/jquery.sparkline.min.js
//= require jquery-ui/jquery-ui-1.10.4.min.js
//= require iCheck/icheck.min.js
//= require flot/jquery.flot.js
//= require flot/jquery.flot.tooltip.min.js
//= require flot/jquery.flot.resize.js
//= require flot/jquery.flot.pie.js
//= require flot/jquery.flot.time.js
//= require flot/jquery.flot.spline.js
//= require jvectormap/jquery-jvectormap-2.0.2.min.js
//= require jvectormap/jquery-jvectormap-world-mill-en.js


// Trazapp


$(function() {
  navigator.geolocation.getCurrentPosition(success, error, options);
});

var options = {
  enableHighAccuracy: true,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  $.ajax({
            type: 'POST',
            url: '/update_geolocation',
            data: { lat: crd.latitude, long: crd.longitude }

        });
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 59.323, lng: 18.010}
  });

  var layer = new google.maps.visualization.DynamicMapsEngineLayer({
    layerId: '06673056454046135537-08896501997766553811',
    map: map,
    suppressInfoWindows: true,
    clickable: true
  });

  layer.addListener('mouseover', function(event) {
    var style = layer.getFeatureStyle(event.featureId);
    style.fillColor = colors[event.featureId - 1];
    style.fillOpacity = '0.8';
  });

  layer.addListener('mouseout', function(event) {
    layer.getFeatureStyle(event.featureId).resetAll();
  });
}

var colors = ['red', 'blue', 'yellow', 'green'];
