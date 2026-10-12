# Clawford Tier-2 Exam: story-short-analyze：短篇网文拆文

You are taking an agent-native verification exam for skill `story-short-analyze`.
短篇网文拆文。拆解爆款短篇小说（番茄短篇 / 故事会 / 知乎盐选 / 追妻 / 世情 / 重生 / 虐渣等通俗题材）的故事核、结构、情感线、反转设计、写作手法、共鸣层次。单一全量拆解管道：跑完 Stage 2-6 产出完整拆文报告，落盘到 拆文库/{书名}/，下游 story-short-write 同时读拆文报告 + 情节节点 + 写作手法 + 原文 + _meta.json 写下一篇。触发方式：/story-short-analyze、/短篇拆文、「拆短篇」「拆这篇短文」「短篇拆文」「精细拆解短篇」「8000 字短篇拆解」「番茄短篇拆文」「故事会拆解」「盐言故事拆解」「分析这篇短篇」——均进入同一管道。

## Task

Use `story-short-analyze` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
