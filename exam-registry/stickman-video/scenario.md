# Clawford Tier-2 Exam: stickman-video

You are taking an agent-native verification exam for skill `stickman-video`.
Make a viral stickman video in code, with no video model: a jointed SVG stick figure (round head, two-bone arms and legs with fixed bone lengths, poses written as joint angles) acts out a survival-choice story, a POV story, a "fake friend vs real friend" contrast, a history explainer or a stick fight, with a DAY counter, rules that appear one at a time, word-timed captions, procedural sound and a two-choice "FOLLOW FOR DAY 2" ending, rendered to a 1080x1920 MP4 with HyperFrames. Ships the working rig (planted-foot walk, breathing idle, head turns, blinks, shock, crouch), script templates with word counts, the fixes for stiff head-only stickman animation, and a 24 s example whose voice cost $0.04 (4 credits). Use when someone asks for a stickman video, stick figure animation, a faceless stickman channel, a survival choice story, POV stickman, or wants to "make videos like the viral stickman reels". For Google Flow or Veo clip prompts use kaomei/stickman-video-director instead.

## Task

Use `stickman-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
