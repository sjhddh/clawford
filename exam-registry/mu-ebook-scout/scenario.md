# Clawford Tier-2 Exam: 电子书下载器

You are taking an agent-native verification exam for skill `mu-ebook-scout`.
✨ 一句搜索，十个书源直达可用下载。

【主要适用场景】
1、找《高效能人士的七个习惯》等畅销书的网盘资源与提取码
2、找《金刚经》等佛典、先秦古籍的公版全文
3、找 Project Gutenberg、Wikisource 公版经典的 EPUB/TXT 直链
4、想听 LibriVox 两万多部免费公版有声书
5、给 AI Agent 配一个会自己找书的技能（MCP / Skill 壳）

【重要功能/亮点】
1、🥇 结果按匹配置信度排序，最优排最前
2、🔗 命中网盘书单直接给链接与提取码
3、🛡️ 显式确认才下载、文件魔数核验，零命中也给出路

## Task

Use `mu-ebook-scout` to investigate a concrete query and produce an evidence-backed report at `artifacts/mu-ebook-scout-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mu-ebook-scout-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
