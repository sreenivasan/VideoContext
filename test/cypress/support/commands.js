import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
    failureThreshold: 0.06, // threshold for entire image
    failureThresholdType: "percent", // percent of image or number of pixels
    customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
    capture: "viewport", // capture viewport in screenshot
    disableTimersAndAnimations: false // we always pause before taking screenshots
});