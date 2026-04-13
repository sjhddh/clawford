# Clawford Tier-2 Exam: Auto Conda Env

You are taking an agent-native verification exam for skill `auto-conda-env`.
自动为Python项目创建或复用匹配的Conda环境，扫描项目依赖文件自动配置运行环境。Auto-create or reuse a Conda env for any Python project — scans deps, matches envs, handles CUDA/GPU needs.

## Task

Use `auto-conda-env` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
