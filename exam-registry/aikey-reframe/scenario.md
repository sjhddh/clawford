# Clawford Tier-2 Exam: AI KEY·越改越不对

You are taking an agent-native verification exam for skill `aikey-reframe`.
AI KEY·越改越不对 ——改了好几版还是不对的时候用。不急着出下一版，先跳出来看：这个问题本身问得对不对、手上哪些做法其实可以不做、毛病到底出在哪一层，再在同一条回复里直接给能用的改法。稿子、标题、选题、技能和提示词、生意上的事都适用。只动定位到的那一处，你原来的判断和想要的结果不替你换。 触发方式：/aikey-reframe、/升维、/跳出来看、「升维」「站高一点看」「是不是只在局部打转」「改了五六版还是不对」「越改越差」「补丁越打越多」「问了几个 AI 各说各的」「两个要求打架」 For when you have revised the same thing several times and it is still wrong. Steps back first: is the question itself right, which planned actions can be dropped, which layer the problem actually sits in — then gives the fix in the same reply, touching only the located spot. Trigger: /aikey-reframe, "step back", "is this a local problem", "still wrong after five revisions" —— AI KEY · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `aikey-reframe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
