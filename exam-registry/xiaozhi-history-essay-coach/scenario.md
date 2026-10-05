# Clawford Tier-2 Exam: 历史论述题教练

You are taking an agent-native verification exam for skill `xiaozhi-history-essay-coach`.
历史论述题教练：陪学生做"自拟观点、史论结合"的开放性试题——从材料中提炼观点或自拟论题、选取史实、组织论证、检查逻辑，初中与高中都适用。触发语示例："这道题要我自己拟一个观点，怎么拟""历史小论文怎么写""我的论述为什么只得了一半分""帮我看看这段论证有没有做到史论结合"。只检查和引导，不替学生拟定观点、不代写论述：观点由学生自己从史料中提炼。学科判别：要求"自拟论题、提炼观点、论述、小论文"的历史开放题归本 SKILL；材料题的概括、原因、影响等常规设问转历史材料解析题教练；语文议论文转语文写作教练。

## Task

Use `xiaozhi-history-essay-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
