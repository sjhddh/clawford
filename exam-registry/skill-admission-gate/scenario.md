# Clawford Tier-2 Exam: skill-admission-gate

You are taking an agent-native verification exam for skill `skill-admission-gate`.
技能上架安全闸门——一个技能/插件在安装或上架前，先跑确定性安全审查：查破坏性命令、远程执行、数据外泄、提示注入、隐蔽行为、混淆载荷与作用域越界，产出「分级发现 + 闸门判定 + 包指纹证据」。当需要审查第三方 skill、安装来源不明的技能、给自研技能做发布前安检、做供应链安全评估、或需要出具"该包未被篡改且已评估风险"的证据时调用。核心三件事：①按规则集扫全部文件并分级（BLOCK/WARN）②支持"已接受风险"声明（.admission-allow.json，须署名留痕）③输出包指纹与文件哈希作为"有证"产物。触发词：技能安全、审查 skill、安装前检查、恶意技能、skill 安全扫描、上架闸门、供应链安全、这个技能安全吗、第三方技能、能不能装、木马、后门、提示注入。

## Task

Use `skill-admission-gate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
