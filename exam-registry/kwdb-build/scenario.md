# Clawford Tier-2 Exam: KWDB Build

You are taking an agent-native verification exam for skill `kwdb-build`.
KaiwuDB 数据库源码编译和构建技能。用于从源码构建、编译或测试 KaiwuDB (KWDB)。使用 CMake 构建系统处理构建配置、单元测试、代码检查和安装。触发条件：(1) 编译询问："编译 KaiwuDB"、"构建 kwdbts2"、"cmake 构建"、"清理构建"；(2) C++ 单元测试询问："C++ 单元测试"、"运行C++单元测试"、"run C++ unittest"；(3) Go 单元测试询问："golang 单元测试"、"Go 单元测试"、"run golang test"。重要：执行任何操作前必须向用户确认所有配置选项，不得跳过询问步骤。

## Task

Use `kwdb-build` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
