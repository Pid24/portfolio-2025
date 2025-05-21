import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import initImageSlider from "./scripts/imageSlider";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initImageSlider();
