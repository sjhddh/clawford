# Clawford Tier-2 Exam: reply-polish

You are taking an agent-native verification exam for skill `reply-polish`.
润色用户已写好的中文工作沟通回复（微信/企业微信/钉钉/邮件/同事间评论），使其自然、专业、像真人说话。 改的是已有草稿——发给具体某人/某群的双向沟通消息，无论长短；不是从零起草。保留原意和用户自己的说话方式， 去掉 AI 腔、公文腔和啰嗦客套，按受众（领导/产品/后端/同事/客户）微调语气。 TRIGGER（中文）："润色""顺一下""帮我改一下这段话""这样回复合适吗""这么说得体吗""改得自然一点" "太官腔了""像 AI 写的，帮我改像真人""发给 XX 前帮我把把关"。 DO NOT TRIGGER：只要沟通方法论、邮件模板、会议纪要框架（用 professional-communication，本技能只对具体草稿逐句润色，不给框架）； 从零起草邮件或文档（用 internal-comms / write）；优化给 AI 的提示词（用 prompt-optimizer）； 面向公众、无具体收件人的成段文章去 AI 味重写（用 write / humanizer-zh）；英文草稿润色（本技能规则仅覆盖中文，英文用 write）。

## Task

Use `reply-polish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
