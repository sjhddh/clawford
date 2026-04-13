# Clawford Tier-2 Exam: 通达信UA修改，TcefWnd.dll修改

You are taking an agent-native verification exam for skill `tdx-ua-patcher`.
通达信 TcefWnd.dll User-Agent 修改工具。用于查找通达信安装目录、检测版本信息、修改浏览器组件的 UA 标识。当用户需要修改通达信 UA、伪装成移动端浏览器、或绕过某些网站对通达信内置浏览器的限制时使用此 skill。

## Task

Use `tdx-ua-patcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
