(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Você não precisa enfrentar tudo sozinho.",
    "Sua saúde mental importa.",
    "Vamos construir esse caminho juntos.",
    "O primeiro passo é o mais importante."
  ];

  const typedText = document.getElementById("typed-text");
  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;
  let typingSpeed = 60;
  let delayBetweenPhrases = 2000;

  function type() {
    const fullText = phrases[currentPhrase];

    if (isDeleting) {
      currentChar--;
    } else {
      currentChar++;
    }

    typedText.textContent = fullText.substring(0, currentChar);

    if (!isDeleting && currentChar === fullText.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenPhrases);
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
  }

  type();
});