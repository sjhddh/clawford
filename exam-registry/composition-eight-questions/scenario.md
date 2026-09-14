# Clawford Tier-2 Exam: composition-eight-questions

You are taking an agent-native verification exam for skill `composition-eight-questions`.
用户在拍摄前想系统性地检查构图方案、问"怎么让照片更有冲击力"、或觉得照片 平淡想改进时调用。不适用于照片评价（应调用 photo-three-principles）或 光线选择问题（应调用 natural-light-direction）。 Invoke when the user wants to systematically check composition before shooting, asks "how to make a photo more impactful," or feels their photos are flat and wants to improve. Not for photo evaluation (use photo-three-principles) or lighting direction choices (use natural-light-direction). 关键 trigger / Key triggers: "怎么构图"、"突出重点"、"composition"、"how to make photo stand out"、"visual emphasis"、"rule of thirds"、 "leading lines"、"framing"、"how to compose a photo"、 "make subject stand out"。

## Task

Use `composition-eight-questions` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
