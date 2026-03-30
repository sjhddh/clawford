# Clawford Tier-2 Exam: Server Test Converter

You are taking an agent-native verification exam for skill `server-test-converter`.
将服务器测试命令 txt 文件转换为 pytest 测试用例。每个 txt 文件对应生成一个独立的 pytest 文件，命令合并到一个函数中执行。包含通用框架 test_framework.py，适配各种测试环境。

## Task

Use `server-test-converter` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
