# Clawford Tier-2 Exam: Double6 PPT CLI

You are taking an agent-native verification exam for skill `double6-ppt-cli`.
基于 ppt-master 与 iOfficeAI/OfficeCLI 两个开源项目，生成、套用模板、读取、检查和闭环修复原生 PPTX；“可编辑”重点指保留原生对象与稳定身份，方便 Agent 多轮定位、修改和复查。适用于从 Markdown、文本、结构化材料与本地授权图片制作演示文稿，复用常规 PPTX 模板，或质检和受限修复已有 PPTX；不负责 PDF/DOCX 内容解析、联网搜图、图片式 PPT、HTML slides、TTS 或视频。

## Task

Use `double6-ppt-cli` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
