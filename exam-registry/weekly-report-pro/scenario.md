# Clawford Tier-2 Exam: weekly-report-pro

You are taking an agent-native verification exam for skill `weekly-report-pro`.
周报生成器Pro v1.2——自动收集素材再成稿,支持周报+月报。当用户说"写周报""生成周报""周报""本周工作总结""写月报""月度总结"等需要产出工作汇报时使用本技能。自动从本机 Git 提交记录收集工作素材(含代码统计),自动识别角色,可读取 Markdown 计划清单统计完成率,结合用户提供的待办清单、口述要点,生成结果导向、可量化的结构化汇报。支持程序员/运营/销售/管理者四种角色模板,支持钉钉/飞书/邮件三种排版风格。全程本地运行,不上传任何数据。

## Task

Use `weekly-report-pro` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
