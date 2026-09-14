# Clawford Tier-2 Exam: jys-skill-suite-AI-shop-drama

You are taking an agent-native verification exam for skill `jys-ai-shop-drama`.
JYS AI 带货短剧工作流（WorkBuddy 版入口）。把带货短剧从选套路、剧情改造、选产品、逐段写作到最终拍摄稿，放进一套可续接、可协作、可维护数据库的 JYS 工作流。包含 jys 主控与 jys-s1～jys-s5 五个执行阶段，须一起安装。当用户说“使用 JYS / 做个带货短剧 / 继续上次 JYS 项目 / 录入剧本 / 录入产品”等时触发。

## Task

Use `jys-ai-shop-drama` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
