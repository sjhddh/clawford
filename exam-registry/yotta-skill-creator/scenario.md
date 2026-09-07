# Clawford Tier-2 Exam: 元造 yotta-skill-creator

You are taking an agent-native verification exam for skill `yotta-skill-creator`.
元造 —— 从内嵌模板一键生成合规技能目录并做结构自检：命名校验（yotta- 前缀 / 小写连字符 / 元X 规范 / 目标不重复）+ 完整发布件脚手架（SKILL.md / README 中英四方式安装 / package.json / CHANGELOG / LICENSE / NOTICE / install.sh + bin/install.js / .gitignore / .npmignore / publish.yml / references / assets）+ 占位符替换 + 结构自检；--self-use 自用模式只生成技能本体（SKILL.md / references / 可选 CLI），不生成任何发布件。触发：新建一个 yotta- 技能、从零搭技能脚手架、想把发布规范里的坑固化成模板时；或用户说 元造 / 造技能 / 脚手架 / scaffold / 新建技能 等。边界（Do NOT trigger）：不替用户写技能正文与脚本逻辑（SKILL.md 正文 / scripts 需人工开发）；不做发布前校验与三源发布（那是元守 yotta-publish-guard）；不做既有技能目录的批量改造。

## Task

Use `yotta-skill-creator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
