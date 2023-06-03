$(function () {
  // icon search
  $("#search").click(function() {
    // добавляем класс
    $(".menu-item").addClass('hide-item');
    $(".header__search-form").addClass("active");
    $(".close").addClass("active");
    $("#search").hide();
  })
  // icon close
  $(".close").click(function () {
    // удаляем класс
    $(".menu-item").removeClass("hide-item");
    $(".header__search-form").removeClass("active");
    $(".close").removeClass("active");
    $("#search").show();
  })

  // Sticky scroll header
  window.addEventListener("scroll", function (){
    const header = document.querySelector(".header__top-inner");
    header.classList.toggle("sticky", window.scrollY > 0)
  })
});