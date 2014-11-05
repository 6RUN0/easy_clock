(function($) {

Drupal.behaviors.easy_clock = {
  attach: function (context, settings) {
    var timestamp = Drupal.settings.easy_clock.utctime || "systime";
    var langSet = Drupal.settings.easy_clock.langSet || "en";
    var calendar =  Drupal.settings.easy_clock.calendar || "false";
    $('#easy-clock', context).once().clock({
      'timestamp': timestamp,
      'langSet': langSet,
      'calendar' : calendar,
    });
  }
};

})(jQuery);
