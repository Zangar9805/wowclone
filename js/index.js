var pizzas = document.querySelectorAll(".pizza")

// console.log()

function pizzaSize(p) {
    for (var pizza of p) {
        pizza.querySelector(".product__size").children[0].addEventListener("click", ()=>{
            pizza.querySelector(".product__img").children[0].style.width = "100%";
            pizza.querySelector(".product__size").children[0].classList.add("active")
            pizza.querySelector(".product__size").children[1].classList.remove("active")
            pizza.querySelector(".product__size").children[2].classList.remove("active")
        })
    
        pizza.querySelector(".product__size").children[1].addEventListener("click", ()=>{
            pizza.querySelector(".product__img").children[0].style.width = "85%";
            pizza.querySelector(".product__size").children[0].classList.remove("active")
            pizza.querySelector(".product__size").children[1].classList.add("active")
            pizza.querySelector(".product__size").children[2].classList.remove("active")
        })
    
        pizza.querySelector(".product__size").children[2].addEventListener("click", ()=>{
            pizza.querySelector(".product__img").children[0].style.width = "70%";
            pizza.querySelector(".product__size").children[0].classList.remove("active")
            pizza.querySelector(".product__size").children[1].classList.remove("active")
            pizza.querySelector(".product__size").children[2].classList.add("active")
        })
    }
}

jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>80){
            $('#head__fixed').addClass('fixed');
        }
        else if ($(this).scrollTop()<80){
            $('#head__fixed').removeClass('fixed');
        }
    });
});

$(function(){
    $('.hamb').click(function(){
      $('.mobile').animate({
      left: 0
      });
  $(this).hide();
   $('.overlay').fadeIn();
  });
  $('.mobile span, .overlay').click(function(){
    $('.mobile').animate({
      left: -250
    });
  $('.hamb').show();
  $('.overlay').fadeOut();
  });
  });

pizzaSize(pizzas);