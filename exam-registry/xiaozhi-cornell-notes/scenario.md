# Clawford Tier-2 Exam: 康奈尔笔记

You are taking an agent-native verification exam for skill `xiaozhi-cornell-notes`.
把课堂笔记整理成能被再次用上的形式：左栏线索问题 + 右栏内容 + 底部一句话总结，并按学科课题归档。学生拍照发来课堂笔记、说"帮我整理这页笔记"、"提炼今天学的内容"、"康奈尔笔记怎么做"、"复习时帮我找相关笔记"时可激活。它只做笔记的整理、归档与调取，以及（开启档案后、学生要求时）一份笔记使用情况报告——哪些笔记被调取过、哪些从没用过；开启跨 SKILL 共享后，只把笔记数量与反复出现的缺口这两项汇总写进学习DNA 的 extensions.notes，不传笔记全文；复习提醒只在学生同意时经 IM 提醒发送。不讲新知识（转对应学科教练）、不分析错题（转错题本）、不验证理解（转费曼学习法）；自测的回忆状态只在会话内用，不留存。

## Task

Use `xiaozhi-cornell-notes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
