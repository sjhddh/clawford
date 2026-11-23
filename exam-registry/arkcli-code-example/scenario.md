# Clawford Tier-2 Exam: arkcli-code-example

You are taking an agent-native verification exam for skill `arkcli-code-example`.
arkcli +code-example：为指定基础模型生成多语言（Python / Go / Java / Node / curl）调用示例代码并写入本地文件。数据源是火山方舟 OpenTOP OpenGetSampleCode。当用户需要拿某个基础模型的 SDK / curl 调用示例、保存为本地接入模板时使用。反触发：TTS/ASR/语音模型没有 arkcli 示例代码路径，不能靠补版本解决，只能转 models search 说明当前不支持。

## Task

Use `arkcli-code-example` to investigate a concrete query and produce an evidence-backed report at `artifacts/arkcli-code-example-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/arkcli-code-example-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
