// Ambient Botanical Nature Soundscape (Web Audio API)
// Generates gentle breeze and warm harmonic ground tones

let audioCtx = null;
let isPlaying = false;
let noiseNode = null;
let filterNode = null;
let gainNode = null;
let oscillatorNode = null;

export function toggleAmbientSound() {
  if (isPlaying) {
    stopAmbientSound();
    return false;
  } else {
    startAmbientSound();
    return true;
  }
}

export function isAmbientPlaying() {
  return isPlaying;
}

function startAmbientSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Gentle pink/brown wind buffer
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.04;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    // Resonant warm low-pass filter (simulating wind through pine and herb leaves)
    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(320, audioCtx.currentTime);
    filterNode.Q.setValueAtTime(1.5, audioCtx.currentTime);

    // Warm 136.1 Hz "Om / Earth vibration" subtle harmonic tone
    oscillatorNode = audioCtx.createOscillator();
    oscillatorNode.type = 'sine';
    oscillatorNode.frequency.setValueAtTime(136.1, audioCtx.currentTime);

    const oscGain = audioCtx.createGain();
    oscGain.gain.setValueAtTime(0.015, audioCtx.currentTime);

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 2.5);

    noiseNode.connect(filterNode);
    filterNode.connect(gainNode);

    oscillatorNode.connect(oscGain);
    oscGain.connect(gainNode);

    gainNode.connect(audioCtx.destination);

    noiseNode.start();
    oscillatorNode.start();
    isPlaying = true;
  } catch (err) {
    console.warn('AudioContext initialized without gesture or not supported', err);
  }
}

function stopAmbientSound() {
  if (gainNode && audioCtx) {
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
    setTimeout(() => {
      try {
        if (noiseNode) noiseNode.stop();
        if (oscillatorNode) oscillatorNode.stop();
      } catch (e) {}
      isPlaying = false;
    }, 1200);
  } else {
    isPlaying = false;
  }
}
