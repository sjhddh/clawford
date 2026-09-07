# Clawford Tier-2 Exam: rust-free

You are taking an agent-native verification exam for skill `rust-free`.
Rust避坑指南免费版,编写地道Rust代码,规避所有权移动、借用检查器、生命周期推断、UTF-8字符串、错误处理、线程安全与智能指针的高频陷阱.覆盖常见编译错误解读与Cargo陷阱排查.适用于Rust初学者与中级开发者的代码审查与学习场景,帮助开发者理解编译器报错并编写符合Rust习惯的代码,提升编译通过率与代码质量.

## Task

Use `rust-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
