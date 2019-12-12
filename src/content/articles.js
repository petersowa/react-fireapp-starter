const BreakTimerSource = `
import "./styles.css";

const PAUSE_TIME = 20 * 60 * 1000;

const app = document.getElementById("app");
const playButton = app.querySelector("#button__play");
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const oscillatorNode = audioCtx.createOscillator();
oscillatorNode.type = "sine";
oscillatorNode.frequency.setValueAtTime(900, audioCtx.currentTime);

const gainNode = audioCtx.createGain();
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

oscillatorNode.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillatorNode.start(0);

let isPlaying = false;

function startAudio() {
  isPlaying = true;
  gainNode.gain.setTargetAtTime(1.0, audioCtx.currentTime + 0.1, 0.1);
}

function stopAudio() {
  isPlaying = false;
  gainNode.gain.setTargetAtTime(0.0, audioCtx.currentTime + 0.1, 0.1);
}

function updateControls() {
  playButton.innerText = isPlaying ? "Stop" : "Play";
}

playButton.addEventListener("click", () => {
  if (isPlaying) {
    stopAudio();
    setTimeout(triggerSound, PAUSE_TIME);
  } else {
    startAudio();
  }
  updateControls();
});

function triggerSound() {
  startAudio();
  updateControls();
}

setTimeout(triggerSound, PAUSE_TIME);
`;

const articles = {
	articles: [
		{
			id: 1,
			title: 'Cars are Fast',
			subTitle: 'Sub Title',
			sections: [
				{
					id: 1,
					sectionTitle:
						'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
					paragraphs: [
						'Lorem ipsum **dolor** sit amet, consectetur adipiscing elit. Suspendisse malesuada pretium lorem a efficitur. Phasellus efficitur ante blandit, lobortis nisi sit amet, mollis erat. Donec porttitor velit ut tristique rhoncus. Suspendisse ex libero, dictum at maximus in, fermentum sit amet nibh. Etiam bibendum iaculis erat, varius volutpat dui ornare vel. Vivamus interdum eros a ipsum placerat interdum. Donec molestie convallis nisi, in posuere mi venenatis nec.',
						'Proin lobortis, magna et pretium sollicitudin, lacus nibh aliquam purus, quis facilisis nulla dolor nec quam. Nam feugiat lectus non imperdiet rutrum. Etiam scelerisque sem commodo, imperdiet metus auctor, hendrerit tellus. In hac habitasse platea dictumst. Nam eu neque nisl. Morbi laoreet tortor non bibendum facilisis. Sed nec arcu vel ipsum rutrum molestie. Nulla facilisi. Mauris tincidunt porta iaculis. Nam efficitur elit nisl, ac tristique nibh consequat tincidunt. Morbi dolor sem, convallis a ante vel, imperdiet tempor lorem. Suspendisse vulputate ipsum mattis erat laoreet, sit amet pulvinar augue rutrum.',
						'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean aliquet ante vel ex pellentesque varius. Pellentesque elementum vel ex non accumsan. Aliquam ultricies cursus sollicitudin. Etiam suscipit tincidunt lectus sed ornare. Aenean lobortis, purus sed tristique feugiat, massa ex elementum orci, a eleifend tellus mauris nec dui. Morbi gravida lacus sit amet nunc pulvinar, et imperdiet nisl elementum. Aenean semper pellentesque mauris, in lobortis erat rutrum vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque at luctus urna, ullamcorper elementum augue. Vivamus pretium viverra lacinia. Aliquam facilisis semper neque, eu bibendum odio auctor nec. Etiam sed justo neque. Praesent vulputate a mi eu semper. Nam elementum nulla augue, ut elementum urna volutpat a.',
					],
				},
			],
		},
		{
			id: 2,
			title: 'Cars are Fast',
			subTitle: 'Sub Title',
			sections: [
				{
					id: 1,
					sectionTitle:
						'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
					paragraphs: [
						'Lorem ipsum **dolor** sit amet, consectetur adipiscing elit. Suspendisse malesuada pretium lorem a efficitur. Phasellus efficitur ante blandit, lobortis nisi sit amet, mollis erat. Donec porttitor velit ut tristique rhoncus. Suspendisse ex libero, dictum at maximus in, fermentum sit amet nibh. Etiam bibendum iaculis erat, varius volutpat dui ornare vel. Vivamus interdum eros a ipsum placerat interdum. Donec molestie convallis nisi, in posuere mi venenatis nec.',
						'Proin lobortis, magna et pretium sollicitudin, lacus nibh aliquam purus, quis facilisis nulla dolor nec quam. Nam feugiat lectus non imperdiet rutrum. Etiam scelerisque sem commodo, imperdiet metus auctor, hendrerit tellus. In hac habitasse platea dictumst. Nam eu neque nisl. Morbi laoreet tortor non bibendum facilisis. Sed nec arcu vel ipsum rutrum molestie. Nulla facilisi. Mauris tincidunt porta iaculis. Nam efficitur elit nisl, ac tristique nibh consequat tincidunt. Morbi dolor sem, convallis a ante vel, imperdiet tempor lorem. Suspendisse vulputate ipsum mattis erat laoreet, sit amet pulvinar augue rutrum.',
						'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean aliquet ante vel ex pellentesque varius. Pellentesque elementum vel ex non accumsan. Aliquam ultricies cursus sollicitudin. Etiam suscipit tincidunt lectus sed ornare. Aenean lobortis, purus sed tristique feugiat, massa ex elementum orci, a eleifend tellus mauris nec dui. Morbi gravida lacus sit amet nunc pulvinar, et imperdiet nisl elementum. Aenean semper pellentesque mauris, in lobortis erat rutrum vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque at luctus urna, ullamcorper elementum augue. Vivamus pretium viverra lacinia. Aliquam facilisis semper neque, eu bibendum odio auctor nec. Etiam sed justo neque. Praesent vulputate a mi eu semper. Nam elementum nulla augue, ut elementum urna volutpat a.',
						'<img alt="tesla model 3" class="article__image" src="https://st.motortrend.com/uploads/sites/10/2017/02/2018-Tesla-Model-3-front-three-quarter-in-motion.jpg"/>',
					],
				},
			],
		},
		{
			id: 3,
			title: 'Coding Projects',
			sections: [
				{
					id: 1,
					sectionTitle: 'JavaScript Audio Break Timer',
					paragraphs: ['```' + BreakTimerSource + '```'],
				},
			],
		},
	],
};

console.log(articles);

module.exports = articles;
