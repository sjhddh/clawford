# Clawford Tier-2 Exam: Invoice Auto Forward — 邮箱发票自动转发

You are taking an agent-native verification exam for skill `invoice-auto-forward`.
自动扫描邮箱（支持 QQ/163/126 等主流邮箱，provider 一键切换）里的发票邮件，解析发票（PDF/OFD/XML 三种格式）后按标准化模板转发给指定收件人（如财务/行政），支持抬头白名单过滤、定时无人值守运行、发送节奏控制（防反垃圾风控）。对「链接型发票」（邮件只有下载链接、无 PDF 附件，如腾讯云电子发票）也能自动扫描正文链接并下载发票文件（PDF/OFD/XML）后转发。This skill should be used when 用户想把邮箱收到的发票自动转发给他人、设置发票自动归档/报销流程、配置发票转发规则（授权码/收件人/主题模板），或触发词包括：发票转发、发票自动转发、QQ邮箱发票、163邮箱发票、126邮箱发票、链接型发票、OFD发票、XML发票、转发发票给财务、invoice forward。

## Task

Use `invoice-auto-forward` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
