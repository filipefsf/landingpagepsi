// Controle de scroll ao fazer reload
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});


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

// Controle de evento de digitação na primeira seção
document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Você não precisa enfrentar tudo sozinho(a).",
    "Sua saúde mental importa.",
    "Vamos construir esse caminho juntos(as).",
    "O primeiro passo é o mais importante.",
  ];

  const typedText = document.getElementById("typed-text");
  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;
  let typingSpeed = 65;
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
      setTimeout(type, isDeleting ? typingSpeed / 3 : typingSpeed);
    }
  }

  type();
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.duvidas-sections');

  sections.forEach((section) => {
    const header = section.querySelector('h3');
    const paragraph = section.querySelector('p');

    // Oculta todos os parágrafos inicialmente
    paragraph.style.maxHeight = '0';
    paragraph.style.overflow = 'hidden';
    paragraph.style.transition = 'max-height 0.4s ease';

    section.style.cursor = 'pointer';

    section.addEventListener('click', () => {
      const isOpen = header.classList.contains('open');

      if (isOpen) {
        header.classList.remove('open');
        paragraph.style.maxHeight = '0';
      } else {
        header.classList.add('open');
        paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
      }
    });
  });
});

function animateIconsOnScroll() {
	const icons = document.querySelectorAll('.feature-icon');
	const delay = 500; // Intervalo de 300ms entre cada animação

	icons.forEach((icon, index) => {
		const rect = icon.getBoundingClientRect();
		const isVisible = rect.top < window.innerHeight * 0.45;

		if (isVisible && !icon.classList.contains('animate')) {
			setTimeout(() => {
				icon.classList.add('animate');
			}, index * delay); // Atraso aumenta com o índice
		}
	});
}

window.addEventListener('scroll', animateIconsOnScroll);
window.addEventListener('load', animateIconsOnScroll);
