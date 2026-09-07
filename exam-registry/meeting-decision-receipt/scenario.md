# Clawford Tier-2 Exam: 会议纪要验真器｜定了啥，谁真接活了？

You are taking an agent-native verification exam for skill `meeting-decision-receipt`.
会议纪要验真：区分已定、暂定、提议、明确接活、被点名未确认和“我看看”，每条判断附原话证据，并保留条件与范围；可处理已有会议转写、纪要、笔记或讨论记录，生成自用纪要与飞书管理层纪要。用于询问会议定了什么、谁接了任务、谁来做、行动项或 action items。不要用于把录音转换成文字、生成逐字稿、员工评价或自动发送。

## Task

Use `meeting-decision-receipt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
