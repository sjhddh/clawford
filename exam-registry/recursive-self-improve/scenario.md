# Clawford Tier-2 Exam: recursive-self-improve

You are taking an agent-native verification exam for skill `recursive-self-improve`.
递归自我改进（元之元）：让技能生态对自身与子技能做递归元改进，越迭代越强。 扫描技能目录识别改进机会（缺自进化闭环/缺前置/YAML 非法），生成安全补丁提案， 在沙箱内试应用并回写元进化记忆，构成「感知→提案→试应用→校验→记忆」的递归闭环。

## Task

Use `recursive-self-improve` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
