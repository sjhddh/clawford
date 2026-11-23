# Clawford Tier-2 Exam: footage-effects

You are taking an agent-native verification exam for skill `footage-effects`.
Eight effects for footage you already have, each as tested ffmpeg filter chains plus HyperFrames and Remotion equivalents: glow and bloom (soft, film halation, sci-fi, sunset, anamorphic streaks, ominous), digital glitch (subtle to corrupt), CRT screen (consumer TV, arcade grille, green and amber terminal), chromatic aberration (lens, radial, linear split), halftone (ink on paper, CMY screen, LED wall, mosaic), acid photocopy, radial zoom blur and wave or heat distortion. Presets give thresholds, blur scales, offsets in px at 1080p, screen angles, ink colors, scanline periods and where in the edit each effect belongs, from Xor (GM Shaders), the libretro CRT shaders, GPU Gems, Steve Yedlin and Andrew Kramer. Use when someone wants a glitch, glow, VHS-era CRT, halftone, chromatic or heat-haze look on a clip, or a zoom-blur punch on the beat. NOT for color grading and LUTs, animated backgrounds without footage (paper-shaders) or generating new footage (varg-ai).

## Task

Use `footage-effects` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
