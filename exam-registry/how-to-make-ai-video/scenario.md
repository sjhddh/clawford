# Clawford Tier-2 Exam: how-to-make-ai-video

You are taking an agent-native verification exam for skill `how-to-make-ai-video`.
How to make AI video skills for Claude Code and AI agents: one search over varg how to (varg.ai/how-to, 2,000+ checked AI video skills, step-by-step how-to tutorials, FFmpeg recipes, video formats, prompts and styles) turns a video request into the best skill with its install command, the 2-4 options to show the person (with example videos) and the steps. Use when someone asks "how do I make a ... video", "make me a UGC ad / lyric video / explainer / talking avatar / product video / faceless short", "make a whole film / launch video from scratch" (production order across skills), "add captions", "edit this video", "which skill should I use for ...", "find a skill for ...", or the same in any language, and no installed skill already covers that format; use it before writing a video pipeline from scratch or searching registries. Also use it to list a video skill you built on varg how to. Not for running a generation itself (use varg-ai), and not for non-media coding tasks.

## Task

Use `how-to-make-ai-video` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
