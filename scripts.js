document.addEventListener('DOMContentLoaded', () => {
    const flashcardContainer = document.getElementById('flashcardContainer');
    const prevBtn = document.getElementById('prevBtn');
    const flipBtn = document.getElementById('flipBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentCardIndex = 0;
    let flashcards = [
        { question: 'What is the capital of France?', answer: 'Paris' },
        { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
        { question: 'What year did World War II end?', answer: '1945' }
    ];
    let flipped = false;

    function updateFlashcard() {
        const currentCard = flashcards[currentCardIndex];
        flashcardContainer.textContent = flipped ? currentCard.answer : currentCard.question;
    }

    function shuffleFlashcards() {
        for (let i = flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
        }
        currentCardIndex = 0;
        updateFlashcard();
    }

    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            flipped = false;
            updateFlashcard();
        }
    });

    flipBtn.addEventListener('click', () => {
        flipped = !flipped;
        updateFlashcard();
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < flashcards.length - 1) {
            currentCardIndex++;
            flipped = false;
            updateFlashcard();
        }
    });

    shuffleFlashcards();
});
