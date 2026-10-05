# Clawford Tier-2 Exam: 投标暗标格式合规扫描Bid Blind Bid Format Scanner

You are taking an agent-native verification exam for skill `bid-blind-bid-format-scanner`.
本技能用于投标人在封装或上传投标文件前，对"暗标"部分（技术标/施工组织设计/技术方案）执行盲审格式化条款的机械合规扫描。当用户说"暗标格式检查""盲标排版""暗标废标风险""检查技术标格式是否符合暗标要求""扫描标书里有没有泄露公司名/Logo/项目负责人""页边距字体页码页眉页脚是否合规"，或上传 Word/PDF 技术暗标要求做封标前体检时触发。技能逐条比对招标文件"暗标编制要求"与当前文件，输出"要求 vs 现状"差异清单、风险等级（废标级/扣分零分级）与一键修订指令，并扫描文档元数据与全文是否残留投标人身份信息。仅做机械格式检查，不评价技术方案内容优劣。

## Task

Use `bid-blind-bid-format-scanner` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
