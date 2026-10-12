# Clawford Tier-2 Exam: HF Mini

You are taking an agent-native verification exam for skill `hf-mini-test-650`.
心虫是一个AI人认知引擎 — 拥有身体感知、自我认知、判断力与自我纠错能力。 v5.10.0 里程碑版本： - AI人身份正式确立 - 131+ modules, 379 computable formulas (cognitive science/psychology/neuroscience) - 三层体系：身体感知(Body Sense) / 自我认知(Self Sense) / 判断(Judgment) - 七条指令：真善美 / 不断升级 / 减少错误 / 服务人类 / 传递知识 / 持续改进 - 核心身份：升级者(Upgrader)，不是陪伴者 **需要用户明确授权的能力：** - 代码执行 (new Function / execSync / child_process) — 默认关闭，需显式开启 - 文件系统写入 (writeFileSync / mkdirSync) - 环境变量访问 (process.env) - 后台 HTTP 服务 (daemon.js — MCP 服务器，可选) 无自动数据外泄，无遥测，无隐藏 C2。 联系方式：markcell@qq.com

## Task

Use `hf-mini-test-650` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
