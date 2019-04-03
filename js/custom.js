$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 550);
});


$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();
});



$('#myModal').on('hidden.bs.modal', function(){
 	window.location.reload(true);
 });



$("#target").submit(function(e){
  $(".alert").hide().show('medium');
  e.preventDefault();
});
 

$('#my-modal').on('close.bs.alert', function(){
 	window.location.reload(true);
});

$('#my-modal').on('hidden.bs.modal', function(){
 	window.location.reload(true);
});


var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
}

setTimeout(function() {
	that.tick();
	}, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #FF8C00}";
    document.body.appendChild(css);
};


window.sr =ScrollReveal();
sr.reveal('.navbar', {
	duration:2000,
	origin:'bottom'
});

sr.reveal('.trails-left', {
	duration:2000,
	origin:'top',
	distance:'300px'
});

sr.reveal('.trails-right', {
	duration:2000,
	origin:'right',
	distance:'300px'
});

sr.reveal('.trail-btn', {
	duration:2000,
	delay:2000,
	origin:'bottom'
});

sr.reveal('#join div', {
	duration:2000,
	origin:'bottom'
});

sr.reveal('.contact-left', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.contact-form', {
	duration:2000,
	origin:'bottom',
	distance:'300px'
});

sr.reveal('.card1', {
	duration:2000,
	origin:'top',
	distance:'250px'
});


sr.reveal('.card2', {
	duration:2000,
	origin:'bottom',
	distance:'250px'
});

sr.reveal('.card3', {
	duration:2000,
	origin:'top',
	distance:'250px'
});

sr.reveal('.card4', {
	duration:2000,
	origin:'bottom',
	distance:'250px'
});

sr.reveal('.about-left', {
	duration:2000,
	origin:'left',
	distance:'250px',
	
});

sr.reveal('.about-right', {
	duration:2000,
	origin:'right',
	distance:'250px',

});

/*smooth scrolling*/
$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }); 