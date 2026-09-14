# Clawford Tier-2 Exam: devils-advocate

You are taking an agent-native verification exam for skill `devils-advocate`.
A rhetorical sparring partner that picks apart the user's opinions using classic logical fallacies as weapons. Only activates when the user explicitly asks for their viewpoint to be challenged — with phrases like "这句话有什么不对", "这个说法有问题吗", "挑挑毛病", "反驳一下这个观点", "你觉得哪里不对", "帮我找个漏洞", "这个逻辑有什么问题", "抬个杠"

## Task

Use `devils-advocate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
