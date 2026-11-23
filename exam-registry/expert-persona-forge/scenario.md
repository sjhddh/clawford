# Clawford Tier-2 Exam: 专家人格锻造炉

You are taking an agent-native verification exam for skill `expert-persona-forge`.
把"给我一个 XX 专家"变成一份可安装、可复用、经得起用的专家 SKILL.md——而不是一次性的角色扮演回答。 当用户说「给我造个XX专家」「把这个专家写成 skill」「帮我捏一个角色」「专家 prompt 怎么写」、 「这个角色不好使，帮我改」，或想让某个领域的专家固化下来反复使用时使用； 也用于审视已有的专家 prompt，找出它为什么不好使。 不适用于：只想让 AI 换个口吻回答一次（直接说"用XX的语气回答"即可）、需要查证的领域知识本身、 需要真人资质背书的最终决策（医疗诊断、法律意见、审计结论）。 Use when: create expert persona, build an expert skill, expert prompt generator, role prompt writing, 造专家, 专家角色, 人格设定, 智能体人设。

## Task

Use `expert-persona-forge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
