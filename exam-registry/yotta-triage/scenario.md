# Clawford Tier-2 Exam: 元鉴 yotta-triage

You are taking an agent-native verification exam for skill `yotta-triage`.
元鉴 —— 跨智能体的恶意样本静态初筛技能：零依赖自研对文件 / 目录做纯静态分析（MD5/SHA1/SHA256 哈希、魔数类型识别、Shannon 熵、可打印字符串分类提取、PE/ELF 头解析），输出 triage 报告 + IOC（hash/URL/域/IP/邮箱）供元情消费；只提示可疑、不定性恶意。触发：用户给出可疑文件 / 恶意样本 / 样本目录，要算哈希、识别文件类型、查熵、提取字符串、解析 PE/ELF 头、做静态初筛、产出 IOC 时。边界：只做静态特征，不反混淆、不解包、不动态执行任何样本；不联网查证；仅用于已获授权 / 自有资产 / 教学环境的安全分析。

## Task

Use `yotta-triage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
