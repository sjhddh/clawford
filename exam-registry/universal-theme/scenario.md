# Clawford Tier-2 Exam: universal-theme

You are taking an agent-native verification exam for skill `universal-theme`.
用户想提升照片的艺术深度、问"怎么让照片更有意义"、或追求从"好看"到 "杰作"的突破时调用。不适用于基础构图评价（应调用 photo-three-principles） 或技术操作问题。 Invoke when the user wants to deepen the artistic meaning of their photos, asks "how to make photos more meaningful," or seeks to elevate from "pretty" to "masterpiece." Not for basic composition evaluation (use photo-three-principles) or technical operation questions. 关键 trigger / Key triggers: "普遍性主题"、"照片的意义"、"universal theme"、 "how to make photo meaningful"、"storytelling photography"、 "deeper photography"、"what makes a photo a masterpiece"、 "photo with deeper meaning"。

## Task

Use `universal-theme` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
