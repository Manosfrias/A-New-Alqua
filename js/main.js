'use strict';
console.log("Dentro y funcionando");


/*VARS */
$(".defaultOpen").addClass("active");
var isMobile = false;

//Detección de móvil
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true


/**FUNCIONES**/
function dropDown() {
  $(".dropdown-toggle").on("click", function(){
    var hijoName = $(this).attr('id');
    $("[aria-labelledby='" + hijoName + "']").toggleClass("show");

  })
}

function slider(){
   var slideCount = $('.slider ul li').length;
    var slideWidth = $('.slider ul li').width();
    var slideHeight = $('.slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('.slider').css({ width: slideWidth, height: slideHeight });
    
    $('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('.slider ul li:last-child').prependTo('.slider ul');

    function moveLeft() {

        $('.slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('button.control_prev').click(function () {
        
        moveLeft();

    });

    $('button.control_next').click(function () {
        moveRight();
    });
    
}
/*La uso para añadir el height a divs que tienen que cubrir la pantalla*/
function height(){
    var deviceHeight = $(window).height(),
      	bodyHeight  = $(".viewportHeight"),
       	alturaFinal = bodyHeight.height(deviceHeight + "px");
      return alturaFinal;
    }

function openTab(){
  var name = $(this).attr("data-target"),
      tab = $("#"+name);

    $('.tablinks').removeClass('active');
    $('.tabcontent').removeClass('active');
    $('.tablinks').addClass('not-active');
    $(this).removeClass('not-active');
    $(this).addClass('active');
    tab.addClass('active').trigger('classChange');  
}
 
function openNextTab(){
  var name = $(this).attr("data-target");

    $('.tablinks').removeClass('active');
    $('.tabcontent').removeClass('active');

    $(".tablinks[data-target='"+name+"']").addClass('active');
 
    $("#"+name).addClass('active');

    getName();
}

function getName(){
  let userName = $("#name").val(),
      spaceForName = $("#userName");
    spaceForName.text(userName);
}

function abrirForm(){
  $("#formulario").toggleClass("open");
}
/**HOOKS**/

slider();
height();
dropDown();

$("#abrir").bind("click", abrirForm);
$(".tablinks").bind("click", openTab);
$(".next").bind("click", openNextTab);
$(window).bind("resize", height); 

if(isMobile){
  $("#mob-out").html('<div class="contenido"><div id="slider"><a href="#" class="control_next">>></a><a href="#" class="control_prev"><</a><ul><li class="slide"><button class="tablinks" data-target="one" type="button"><img src="img/careers/careers-icon-1.png"/><p>Sales<br /> deparment</p></button><div id="one" class="tabcontent"><form><div class="form-group"><label><inputtype="text" required name="name" id="name" placeholder="name*"></label><label><input type="text" required name="surname" id="surname" placeholder="surname*"></label><label><input type="email" required name="email" id="email" placeholder="email*"></label><label><input type="phone" required name="phone" id="phone" placeholder="telephone*"/></label></div><div class="form-group"><div class="cv-btn-wrapper"><button class="cv">Upload your CV (and portfolio)</button><input type="file" name="myfile" /></div> <a class="btn btn-gradient uppercase">Send</a></div></form></div></li><li class="slide"><button class="tablinks" data-target="two" type="button"><img src="img/careers/careers-icon-2.png"/><p>Web<br /> developer</p></button><div id="two" class="tabcontent"><form><div class="form-group"><label><inputtype="text" required name="name" id="name" placeholder="name*"></label><label><input type="text" required name="surname" id="surname" placeholder="surname*"></label><label><input type="email" required name="email" id="email" placeholder="email*"></label><label><input type="phone" required name="phone" id="phone" placeholder="telephone*"/></label></div><div class="form-group"><div class="cv-btn-wrapper"><button class="cv">Upload your CV (and portfolio)</button><input type="file" name="myfile" /></div> <a class="btn btn-gradient uppercase">Send</a></div></form></div></li><li class="slide"><button class="tablinks" data-target="three" type="button"><img src="img/careers/careers-icon-3.png"/><p>Designer</p></button><div id="three" class="tabcontent"> <form><div class="form-group"><label><inputtype="text" required name="name" id="name" placeholder="name*"></label><label><input type="text" required name="surname" id="surname" placeholder="surname*"></label><label><input type="email" required name="email" id="email" placeholder="email*"></label><label><input type="phone" required name="phone" id="phone" placeholder="telephone*"/></label></div><div class="form-group"><div class="cv-btn-wrapper"><button class="cv">Upload your CV (and portfolio)</button><input type="file" name="myfile" /></div> <a class="btn btn-gradient uppercase">Send</a></div></form></div> </li><li class="slide"><button class="tablinks" data-target="four" type="button"><img src="img/careers/careers-icon--4.png"/><p>Customer<br /> success</p></button><div id="four" class="tabcontent"> <form><div class="form-group"><label><inputtype="text" required name="name" id="name" placeholder="name*"></label><label><input type="text" required name="surname" id="surname" placeholder="surname*"></label><label><input type="email" required name="email" id="email" placeholder="email*"></label><label><input type="phone" required name="phone" id="phone" placeholder="telephone*"/></label></div><div class="form-group"><div class="cv-btn-wrapper"><button class="cv">Upload your CV (and portfolio)</button><input type="file" name="myfile" /></div> <a class="btn btn-gradient uppercase">Send</a></div></form></div></li><li class="slide"><button class="tablinks" data-target="five" type="button"><img src="img/careers/careers-icon-5.png"/><p>Analyst</p></button><div id="five" class="tabcontent"><form><div class="form-group"><label><inputtype="text" required name="name" id="name" placeholder="name*"></label><label><input type="text" required name="surname" id="surname" placeholder="surname*"></label><label><input type="email" required name="email" id="email" placeholder="email*"></label><label><input type="phone" required name="phone" id="phone" placeholder="telephone*"/></label></div><div class="form-group"><div class="cv-btn-wrapper"><button class="cv">Upload your CV (and portfolio)</button><input type="file" name="myfile" /></div> <a class="btn btn-gradient uppercase">Send</a></div></form></div></li><li class="slide"><button class="tablinks" data-target="six" type="button"><img src="img/careers/careers-icon-6.png"/><p>Data<br /> manager</p></button><div id="six" class="tabcontent"> <form><div class="form-group"><label><inputtype="text" required name="name" id="name" placeholder="name*"></label><label><input type="text" required name="surname" id="surname" placeholder="surname*"></label><label><input type="email" required name="email" id="email" placeholder="email*"></label><label><input type="phone" required name="phone" id="phone" placeholder="telephone*"/></label></div><div class="form-group"><div class="cv-btn-wrapper"><button class="cv">Upload your CV (and portfolio)</button><input type="file" name="myfile" /></div> <a class="btn btn-gradient uppercase">Send</a></div></form></div> </li></ul></div>')
slider();
}

$('footer .col').click(function(e) {
      
        $("ul").removeClass('open');

        $(this).find("ul").toggleClass('open');
 
        e.preventDefault();
    });

$('.toggle-nav').click(function(e) {
        $(".responsive").toggleClass('open');
        $('.toggle-nav').toggleClass('open');
 
        e.preventDefault();
    });



//Esta función es para el revealed al scroll, es la primera que puse y la he dejado así
      var winHeight = $(window).height();
      var offset = 50;

      $(window).bind('resizeEnd', function() {
        winHeight = $(window).height();
      });

      $(window).on('scroll', function() {

        var trigger = $(window).scrollTop() + winHeight - offset;

        $('.has-scroll-reveal:not(.is-revealed)').each(function() {
          var elementOffset = $(this).offset().top;

          if( elementOffset < trigger ) {
            $(this).addClass('is-revealed');
          }
        });

});


/* Esta es porque primero usé bootstrap, los carousel dentro de sliders entran en conflicto
por el .active, esto lo pillé de stackoverflow*/

let activeTab = $().filter('.active');


  $('#myTab div[role="presentation"]').click(function(e) {
    e.preventDefault();
  
    $('.tab-pane').removeClass('active');
    $('#myTab div[role="presentation"]').removeClass('active');

    
    activeTab.removeClass('active');
    $(activeTab.attr('data-target')).removeClass('active');

    activeTab = $(this);

    activeTab.addClass("active");
    $(activeTab.attr('data-target')).addClass('active');

    $(".carousel-item header").addClass('active');

  });