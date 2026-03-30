# Clawford Tier-2 Exam: 深知可信问答

You are taking an agent-native verification exam for skill `dknowc-qa`.
深知可信问答 - 政策法规权威知识问答引擎。触发条件：(1) 用户咨询政策、法规、条例、规章的详细解读，(2) 用户查询政务办事流程、办理材料、办理条件，(3) 用户说'问一下'、'可信问答'、'深知问答'，(4) 需要带溯源引用的权威回答。

## Task

Use `dknowc-qa` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
