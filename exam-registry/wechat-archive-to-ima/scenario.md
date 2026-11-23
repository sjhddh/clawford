# Clawford Tier-2 Exam: wechat-archive-to-ima

You are taking an agent-native verification exam for skill `wechat-archive-to-ima`.
把用户微信 PC 端已经落地到本地的聊天附件（图片、视频、文档）做系统化归档， 按联系人归类，并同步上传到腾讯 ima 知识库（OpenAPI）或本地 Obsidian 库。 适用场景：(1) 用户说"帮我整理微信里跟某人的所有资料/文件/图片"； (2) 用户说"把微信聊天里的合同、发票、会议纪要归档到知识库"； (3) 用户说"微信收到的文件太多找不到，帮我分类"； (4) 用户给了 ima 的 ClientID / APIKey，要求把本地资料批量入库； (5) 用户要对已归档的微信资料做摘要、合同条款提取、待办清单、客户画像分析； (6) 用户说"帮我把微信里所有人的附件都整理到电脑"； (7) 用户说"微信存下来的图片是 .dat 打不开，帮我解出来"（已支持：自动推导 code 并解密）。 **不适用**：解密微信加密数据库（message_*.db / contact.db）、读取用户未在 PC 端打开过的消息、 远程操作手机微信、抓内存密钥、导出聊天正文 —— 这些一律不做， 遇到这类要求直接说明边界并给替代方案。

## Task

Use `wechat-archive-to-ima` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
