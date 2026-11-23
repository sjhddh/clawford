# Clawford Tier-2 Exam: shelbys-speech

You are taking an agent-native verification exam for skill `shelbys-speech`.
把「谢尔比的记忆」档案库（含完整记忆系统：记忆库+重要md+日志+项目档案）按主题识别，一篇篇生成博士水平、SCI 格式的技术论文（中英文双语、自动检查修复 Word、问答式修改、确认后输出 PDF）。可识别多个主题→多篇论文，每篇先询问用户。选题明确后开放完整记忆系统访问权限（只读），素材更全。作者默认<用户名> & 谢尔比，可随时按用户要求修改。用户说写论文/技术论文/博士论文/SCI/投稿/演讲/分享/总结成文时使用。关键词：论文、SCI、博士论文、投稿、英文论文、PDF、演讲、分享、提炼总结、多主题、shelbys speech、完整记忆。

## Task

Use `shelbys-speech` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
