# Clawford Tier-2 Exam: COS后期提示词

You are taking an agent-native verification exam for skill `cos-effect-prompt-main`.
为 COS 照片（cosplay 角色照 / 写真）生成专业级 JSON 后期指令，可直接配合 Nano Banana （Gemini 图像模型）使用。用户在给自己的角色照做后期时使用——加特效（魔法阵、火焰、雷电、 冰霜、翅膀、光环、圣光、粒子、辉光、霓虹、雨、雪、花瓣、赛博街景）、做综合修图（身体塑形 液化、服装焕新、裙摆/披风风动效果）都在范围内。本技能会输出一份结构化的 JSON 指令： 保底规则（构图/脸/姿势不变）+ 检测分析 + 按需启用的处理模块 + 约束与光影噪点一致性。 请务必在用户提到「给照片加特效」「COS 后期」「P 图」「修图」「加魔法阵/火焰/光环/翅膀」 「液化

## Task

Use `cos-effect-prompt-main` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
