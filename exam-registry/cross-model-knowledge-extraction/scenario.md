# Clawford Tier-2 Exam: cross-model-knowledge-extraction

You are taking an agent-native verification exam for skill `cross-model-knowledge-extraction`.
跨模型蒸馏工程化的第一环：从 WorkBuddy 内部教师技能的 SKILL.md（或任意技能正文） 中结构化提取能力签名——工作流步骤、触发场景、已知限制/坑、工具脚本、以及可被 蒸馏的决策规则（if/when-then/必须）。输出 JSON 能力画像，直接喂给 model-distillation 的签名合成与对抗验证。纯标准库、零依赖、可本地实跑（--selftest 自带样例）。

## Task

Use `cross-model-knowledge-extraction` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
