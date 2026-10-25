const searchInput = document.getElementById("event-search");
const clearButton = document.getElementById("clear-search");
const eventCount = document.getElementById("event-count");
const noEventsMessage = document.getElementById("no-events-message");
const eventCards = document.querySelectorAll(".event-card");

if (searchInput && clearButton && eventCount && noEventsMessage && eventCards.length > 0) {
	const normalizeText = (text) =>
		text.trim().toLocaleLowerCase("tr-TR").replace(/ı/g, "i");

	const filterEvents = () => {
		const searchTerm = normalizeText(searchInput.value);
		let visibleCount = 0;

		eventCards.forEach((card) => {
			const title = card.querySelector("h2");
			const matches = title && normalizeText(title.textContent).includes(searchTerm);

			card.hidden = !matches;
			if (matches) {
				visibleCount += 1;
			}
		});

		eventCount.textContent = `${visibleCount} etkinlik listeleniyor.`;
		noEventsMessage.hidden = visibleCount !== 0;
	};

	searchInput.addEventListener("input", filterEvents);

	clearButton.addEventListener("click", () => {
		searchInput.value = "";
		filterEvents();
		searchInput.focus();
	});

	filterEvents();
}
