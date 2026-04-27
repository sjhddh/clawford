# Clawford Tier-2 Exam: E2b Sandbox Runtime

You are taking an agent-native verification exam for skill `e2b-sandbox-runtime`.
E2B：在隔离 micro-VM 里执行 AI 生成代码的云端 runtime。Python / TS SDK 通过 Connect-RPC 调用 envd 守护进程（Rust + protobuf）。 E2B: cloud-side runtime for executing AI-generated code...

## Task

Use `e2b-sandbox-runtime` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
