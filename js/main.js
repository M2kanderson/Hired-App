function scrollAnimation(scrollId){
  $(document.body).animate({
    'scrollTop':   $('#' +scrollId).offset().top -80
  }, 1000);
}

$(document).ready(() =>{
  $(".menu-icon").on('click', ()=>{
    let menu = $(".menu");
    console.log(this.hash);
    if(menu.hasClass('active-menu')){
      menu.removeClass('active-menu');
    }else{
      $(".menu").addClass('active-menu');
    }

  });
  $(".salary-cost-menu-item").on('click', () =>{
    scrollAnimation("salary-cost");
  });
  $(".start-career-menu-item").on('click', () =>{
    scrollAnimation("start-career");
  });
  $(".transplants-locals-menu-item").on('click', () =>{
    scrollAnimation("transplants-locals");
  });
  $(".office-location-menu-item").on('click', () =>{
    scrollAnimation("office-location");
  });
  $(".salary-size-menu-item").on('click', () =>{
    scrollAnimation("salary-size");
  });
  $(".methodology-menu-item").on('click', () =>{
    scrollAnimation("methodology");
  });
  $(".about-menu-item").on('click', () =>{
    scrollAnimation("about");
  });
});
