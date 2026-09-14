# Clawford Tier-2 Exam: 漫剧全流程串联引擎

You are taking an agent-native verification exam for skill `manju-workflow`.
漫剧制作全流程自动串联引擎。当用户提出漫剧创作需求时，自动按流程依次执行 总控定调→编剧分镜→总控校验→美术绘图→动态动画→剪辑合成，全程自动流转， 无需用户手动切换Agent。触发词包括：制作漫剧、全流程、开始创作、做一集漫剧、 漫剧工作流、启动漫剧制作、帮我做漫剧。

## Task

Use `manju-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
