import { ref } from "vue";
import copyIcon from "../assets/images/copy.svg";
import speakerIcon from "../assets/images/speaker.svg";
import disLikeIcon from "../assets/images/dislike.svg";
import translation from "../assets/images/translation.svg";

const handleCopy = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error.message);
  }
};

const handleDislike = (text) => {
  console.log("Disliked:", text);
  // Implement dislike logic here
};

const handleSpeak = (text) => {
  const speach = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speach);
};

const handleTranslation = (text) => {
  console.log("Translation clicked for:", text);
  // Implement token-related functionality here
};

export const iconsAsButtonForchatView = ref([
  {
    iconURL: copyIcon,
    altText: "Copy",
    classes: "h-4 opacity-40 cursor-pointer",
    click: handleCopy,
  },
  {
    iconURL: speakerIcon,
    altText: "Speaker",
    classes: "h-[1.25rem] opacity-40 cursor-pointer",
    click: handleSpeak,
  },
  {
    iconURL: disLikeIcon,
    altText: "Report a problem",
    classes: "h-4 opacity-40 cursor-pointer",
    click: handleDislike,
  },
  {
    iconURL: translation,
    altText: "Translation",
    classes: "h-[1.15rem] opacity-45 ml-[0.28rem] cursor-pointer",
    click: handleTranslation,
  },
]);
