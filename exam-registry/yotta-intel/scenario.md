# Clawford Tier-2 Exam: 元情 yotta-intel

You are taking an agent-native verification exam for skill `yotta-intel`.
元情 —— 跨智能体的威胁情报 IOC 提取与规范化技能：零依赖自研从文本 / 日志 / 报告中提取 IP（IPv4/IPv6）、域名、URL、邮箱、哈希（MD5/SHA1/SHA256/SHA512）与 CVE 编号，识别并还原 defang 写法，去重、归一化后输出 CSV / JSON / STIX-lite。触发：用户给出含可疑 IP / 域名 / URL / 哈希的威胁情报文本、恶意样本分析报告、钓鱼邮件或日志，要提取 IOC、规范化、去重、转格式、共享情报时。边界：纯本地离线提取与规范化；不联网查证、不下载样本、不主动扫描任何系统；仅用于已获授权 / 自有资产 / 教学环境的安全分析。

## Task

Use `yotta-intel` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
