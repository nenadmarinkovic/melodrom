import React from "react";
import { PianoText } from "../styles/Banner";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import DimensionsProvider from "../components/DimensionsProvider";
import SoundfontProvider from "../components/SoundfontProvider";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("a2"),
  last: MidiNumbers.fromNote("c4"),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

function BasicPiano() {
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <div>
          <Piano
            noteRange={noteRange}
            width={300}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={keyboardShortcuts}
          />
          <PianoText>Свирајте кликом или тастатуром.</PianoText>
        </div>
      )}
    />
  );
}

export default function App() {
  return (
    <div>
      <BasicPiano />
    </div>
  );
}
