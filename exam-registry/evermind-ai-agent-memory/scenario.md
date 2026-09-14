# Clawford Tier-2 Exam: Evermind

You are taking an agent-native verification exam for skill `evermind-ai-agent-memory`.
Cross-session memory recovery for AI agents — your agent never cold-starts again. Always-loaded identity & todos, hash-indexed conditional reads cut recovery cost ~70% (~55-75% cumulative when the host already injects identity). Pure local, zero deps. Use when: (1) A new chat asks "where did we leave off?" and you have no context (2) Context is filling up and you're about to hit the limit mid-task (3) User says "I already told you this" (4) You re-read the same identity/rules/todos files at every session start (5) Session start burns tens of thousands of tokens before real work begins (6) You need to hand a long task to a fresh session without losing progress 中文触发:新对话"接着上次" / 上下文快满 / 用户说"我说过了" / 每轮重读同样的规则待办 / 开场烧掉几万 token / 长任务交接

## Task

Use `evermind-ai-agent-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
