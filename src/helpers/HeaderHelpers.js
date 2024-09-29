import { ref } from "vue";
import newChat from "../assets/images/newChat.svg";
import downloadSummary from "../assets/images/download.svg";

const buttonStyle = "h-5 md:h-6 opacity-40 m-auto max-w-fit cursor-pointer";
export const HandelNewChat = () => {
  console.log("New Chat Open");
};
export const HandeldownloadSummary = () => {
  console.log("Download Summary");
};

export const helperButton = [
  {
    iconURL: newChat,
    altText: "new chat",
    classes: buttonStyle,
    executeFn: HandelNewChat,
  },
  {
    iconURL: downloadSummary,
    altText: "download summary",
    classes: buttonStyle,
    executeFn: HandeldownloadSummary,
  },
];

export const isHoverLabel = ref(false);
export const labels = ref("");

export const showLabelOnHover = (index) => {
  isHoverLabel.value = true;
  index === 0
    ? (labels.value = "New chat")
    : (labels.value = "Download summary");
};

export const removeLabel = () => {
  isHoverLabel.value = false;
};
