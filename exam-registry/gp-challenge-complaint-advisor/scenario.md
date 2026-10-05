# Clawford Tier-2 Exam: GP Challenge & Complaint Advisor

You are taking an agent-native verification exam for skill `gp-challenge-complaint-advisor`.
政府采购质疑投诉参谋（GP Challenge & Complaint Advisor）——基于 IMA 可用知识库（政府采购投诉AI知识库 等）的质疑/投诉参谋、质检与轻起草工具。触发词（含口语）："投诉参谋""投诉书助手""政府采购投诉""质疑""审投诉书""查投诉案例""写投诉书""投诉质检""投诉书模板""类似案例""被驳回理由""投诉有用吗""财政局会支持我吗""质疑被驳了怎么办""投诉能赢吗"。退出/异常："不想投诉了""投诉撤回"。已接入 IMA 知识库「政府采购投诉AI知识库」。不适用于投标文件编制、招标文件解读、合同审查、非政府采购投诉场景。

## Task

Use `gp-challenge-complaint-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
