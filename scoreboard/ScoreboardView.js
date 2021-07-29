export default class ScoreboardView {
	constructor(root, teamOneName, teamTwoName, onControlButtonClick) {
		this.root = root;
		this.root.innerHTML = `
			<div class="scoreboard">
				<div class="scoreboard__name scoreboard__name--one">${teamOneName}</div>
				<div class="scoreboard__name scoreboard__name--two">${teamTwoName}</div>
				<div class="scoreboard__score" data-for-team="one">0</div>
				<div class="scoreboard__score" data-for-team="two">0</div>
				<div class="scoreboard__controls" data-for-team="one">
					<button class="scoreboard__control-button">-</button>
					<button class="scoreboard__control-button">+</button>
				</div>
				<div class="scoreboard__controls" data-for-team="two">
					<button class="scoreboard__control-button">-</button>
					<button class="scoreboard__control-button">+</button>
				</div>
			</div>
		`;

		this.root.querySelectorAll(".scoreboard__control-button").forEach(controlButton => {
			controlButton.addEventListener("click", () => {
				const direction = controlButton.textContent === "-" ? "minus" : "plus";
				const team = controlButton.closest(".scoreboard__controls").dataset.forTeam;

				onControlButtonClick(team, direction);
			});
		});
	}

	update(teamOneScore, teamTwoScore) {
		this.root.querySelector(".scoreboard__score[data-for-team='one']").textContent = teamOneScore;
		this.root.querySelector(".scoreboard__score[data-for-team='two']").textContent = teamTwoScore;
	}
}
