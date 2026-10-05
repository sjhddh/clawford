# Clawford Tier-2 Exam: Gongwen 公文生成

You are taking an agent-native verification exam for skill `gongwen`.
生成党政机关公文 docx（通知、报告、请示、批复、函、会议纪要等），内置机关通行版式规范：方正小标宋二号大标题、黑体/楷体_GB2312/仿宋_GB2312 三号层级标题、正文行距固定29磅、首行缩进32磅、页边距2.54/3.17cm，附字体检查与版式数字验收脚本。Use whenever the user wants to 起草、生成、排版、修改 任何公文、通知、报告、请示、函、纪要、红头文件，或要求 docx 按公文格式/机关格式输出 — even if they only say "写个通知""按老格式排一下" or mention 公文 in passing.

## Task

Use `gongwen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
