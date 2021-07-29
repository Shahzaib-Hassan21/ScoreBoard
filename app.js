import ScoreboardView from "./scoreboard/ScoreboardView.js";

let teamOneScore = 0;
let teamTwoScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Team One", "Team Two", (team, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (team === "one") {
		teamOneScore = Math.max(teamOneScore + difference, 0);
	} else {
		teamTwoScore = Math.max(teamTwoScore + difference, 0);
	}

	view.update(teamOneScore, teamTwoScore);
});

