//  Search Filter
$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".card ").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// City Filter
$(document).ready(function () {
  $("#city").change(function () {
    var filter = $(this).val();
    $(".working-city").each(function () {
      if ($(this).text() == filter) {
        $(this).parentsUntil("div.one").show();
      } else {
        $(this).parentsUntil("div.one").hide();
      }
      if (filter == "All") {
        $(".card *").parentsUntil("div.one").show();
      }
      $("#city").val(filter);
    });
  });
});

// Company Filter
$(document).ready(function () {
  $("#company").change(function () {
    var filter = $(this).val();
    $(".card img").each(function () {
      //   alert($(this).attr("data-name"));
      if ($(this).attr("data-name") == filter) {
        $(this).parentsUntil("div.one").show();
      } else {
        $(this).parentsUntil("div.one").hide();
      }
      if (filter == "All") {
        $(".card *").parentsUntil("div.one").show();
      }
      $("#company").val(filter);
    });
  });
});

// toggle sidebar
$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    //     $("#sidebarCollapse").css("position : relative","left : 116px",     "width: 110px";
    // );
    $("#sidebar").toggleClass("sidebar-active ");
  });
});
