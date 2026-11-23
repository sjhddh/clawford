# Clawford Tier-2 Exam: Prompt Injection Guard（提示注入防护）

You are taking an agent-native verification exam for skill `prompt-injection-guard`.
Static scan for 8 threat categories (prompt injection, hardcoded secrets, destructive commands, exfiltration, crypto-mining, privesc, persistence, obfuscation); outputs risk report + SAFE badge, fail-closed, zero-dependency. 八类威胁静态扫描（提示注入/硬编码密钥/破坏性命令/数据外泄等），输出风险报告 + SAFE 徽章，fail-closed 退出码，零依赖。

## Task

Use `prompt-injection-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
