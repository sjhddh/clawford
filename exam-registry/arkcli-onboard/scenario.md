# Clawford Tier-2 Exam: arkcli-onboard

You are taking an agent-native verification exam for skill `arkcli-onboard`.
arkcli 接入向导(workflow):把某个模型接入到自己的应用/服务的端到端引导 —— 从'我想用某模型'到拿到可调用的 Endpoint(+ 可选示例代码)。当用户说'我想在我的 app/服务里用豆包/某模型''怎么把方舟模型接进来''帮我接入 XX 模型''想正式用上某模型'这类**不含 deploy/部署关键词、但本质是正式接入**的意图时触发。已明确说'部署/创建 endpoint'的直接走 arkcli-deploy;只想试效果/问一句的走 +chat/+gen。反触发：TTS/ASR/语音模型接入不走本向导，只能转 models search 说明 arkcli 当前不支持调用/部署/示例/用量/费用/接入。

## Task

Use `arkcli-onboard` to investigate a concrete query and produce an evidence-backed report at `artifacts/arkcli-onboard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/arkcli-onboard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
