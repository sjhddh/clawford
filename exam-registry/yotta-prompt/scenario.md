# Clawford Tier-2 Exam: 元引 yotta-prompt

You are taking an agent-native verification exam for skill `yotta-prompt`.
元引 —— 意图澄清 + 生态入口技能：用户输入一句模糊的话 / 一个词时，识别意图、给出 2-4 个候选方向、深挖（目标/范围/输出/约束），再串联到对应元阁技能输出可直接运行的提示词。常驻注入（always-load）：每次新会话开始自动生效，接住「不会用 AI、不知道怎么提问」的用户。触发：用户不知道怎么提问、不知道想要什么、输入模糊的一句话 / 一个词、想被引导到合适技能时。边界：只澄清意图、不预设立场、不做安全评审；提示词不人为设限（不违规/不犯法/不越狱即可）；不做 prompt 美化；纯本地离线。

## Task

Use `yotta-prompt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
