import { execFileSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const input = "public/eu-programando2-scroll.mp4";
const output = "public/hero-final-frame.jpg";

execFileSync(
    ffmpegPath,
    ["-y", "-sseof", "-1", "-i", input, "-frames:v", "1", "-q:v", "2", output],
    { stdio: "inherit" }
);

console.log("Frame final extraído em:", output);