import { execFileSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const input = "public/eu-programando2.mp4";
const output = "public/eu-programando2-scroll.mp4";

execFileSync(
    ffmpegPath,
    [
        "-y",
        "-i", input,
        "-an",
        "-c:v", "libx264",
        "-preset", "slow",
        "-crf", "19",
        "-vf", "unsharp=5:5:0.6:5:5:0.0",
        "-g", "1",
        "-keyint_min", "1",
        "-sc_threshold", "0",
        "-movflags", "+faststart",
        output,
    ],
    { stdio: "inherit" }
);

console.log("Vídeo otimizado gerado em:", output);