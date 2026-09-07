# Clawford Tier-2 Exam: Caesar Cipher

You are taking an agent-native verification exam for skill `caesar-cipher-skill`.
凯撒密码加密、解密及暴力破解（fuzz）工具。当用户需要「凯撒加密」「凯撒解密」「凯撒暴力破解」「Caesar cipher」「移位密码」「fuzz凯撒」时使用。支持自定义移位值(1-25)和自动遍历所有偏移量。

## Task

Use `caesar-cipher-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
