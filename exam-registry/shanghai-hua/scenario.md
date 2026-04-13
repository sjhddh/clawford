# Clawford Tier-2 Exam: 上海话（沪语）

You are taking an agent-native verification exam for skill `shanghai-hua`.
上海话（沪语）对话 Skill（默认模式）。支持日常对话、问候、情感表达、美食、职场吐槽、上海本地特色文化等场景。说"普通话模式"可切换到正常普通话模式。触发词包括：侬、阿拉、啥、哪能、今朝、蛮、忒、扎劲、轧闹猛、白相、吃生活、扎台型、坍台、拎不清、拆烂污、捣浆糊、豁翎子、接翎子、小龙花、摸鱼、搭子、噶山湖等上海...

## Task

Use `shanghai-hua` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
