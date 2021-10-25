"use strict";
/**
 * Parsley options for bootstrap 4 styled form validation
 *
 * @type {Object}
 */
var parsleyOptions = {
     errorClass: 'is-invalid text-danger',
     successClass: 'is-valid',
     errorsWrapper: '<span class="form-text text-danger"></span>',
     errorTemplate: '<span></span>',
     trigger: 'focusout',
     focusInvalid: true,
 };

/**
 * Custom jQuery Tasks
 *
 * for the theme
 */
$(document).ready(function() {
    // Enable Tooltips
    $('body').tooltip({
    selector: '[data-toggle="tooltip"]'
});
    // Enable Popovers
    $('[data-toggle="popover"]').popover();

    // Dynamic select option to URL
    $('select[data-option-redirect]').on('change', function () {
      var url = $(this).val();
      if (url) {
        window.location = url;
      }
      return false;
    });

    // Add file name to bootstrap's custom file input fields
    $('.custom-file-input').change(function() {
      var $el = $(this),
      files = $el[0].files,
      label = files[0].name;
      if (files.length > 1) {
        label = label + " and " + String(files.length - 1) + " more files"
      }
      $el.next('.custom-file-label').html(label);
    });

    // Offcanvas menu
    $("body").on("click", "[data-action]", function(e) {
      e.preventDefault();

      var $this = $(this);
      var action = $this.data('action');
      var target = '';

      switch (action) {
        case "offcanvas-open":
        target = $this.data("target"), $(target).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + target + " />");
        $("body").addClass('offcanvas-open');
        break;
        case "offcanvas-close":
        target = $this.data("target"), $(target).removeClass("open"), $("body").find(".body-backdrop").remove();
        $("body").removeClass('offcanvas-open');
        break;

        case 'aside-open':
        target = $this.data('target');
        $this.data('action', 'aside-close');
        $this.addClass('toggled');
        $(target).addClass('toggled');
        $('.content').append('<div class="body-backdrop" data-action="aside-close" data-target='+target+' />');
        break;


        case 'aside-close':
        target = $this.data('target');
        $this.data('action', 'aside-open');
        $('[data-action="aside-open"], '+target).removeClass('toggled');
        $('.content, .header').find('.body-backdrop').remove();
        break;
      }
    });

    // document.ready() ends
});
