// import Container from "react-bootstrap/Container";
import SpeechRecognition from "react-speech-recognition"; // useSpeechRecognition,
import speaking from "../images/speak-icon.png";

export const VoiceNav = () => {
  return (
    <span className="voice-nav">
      {/* <Container> */}
      {/* <button onClick={SpeechRecognition.startListening}>Click to Speak</button>

      <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      {/* </Container>
        <Container> */}
      <img src={speaking} alt="speak icon" />

      <p className="nav-text">
        Click the button and use your voice to navigate our site.
        <br />
        Try saying "Go to Gallery", "Open the Contact page", or "Show me the
        Wine List".
      </p>
      <button onClick={SpeechRecognition.startListening}>Click to Speak</button>
      {/* <p id="transcript">Transcript: {transcript}</p> */}
      {/* </Container> */}
    </span>
  );
};
