const pitchShift = new Tone.PitchShift().toDestination();
const player = new Tone.Player("notreal-lowbattery.wav").connect(pitchShift);
player.loop = true;

const toneFFT = new Tone.FFT();
pitchShift.connect(toneFFT);
fft({
    parent: document.querySelector("#content"),
    tone: toneFFT,
});

document.querySelector("tone-play-toggle").addEventListener("start", () => player.start());
document.querySelector("tone-play-toggle").addEventListener("stop", () => player.stop());


document.querySelector("tone-slider").addEventListener("input", e => {
    pitchShift.pitch = parseFloat(e.target.value);
});
