# Clawford Tier-2 Exam: BIMWing 三维模型在线浏览

You are taking an agent-native verification exam for skill `bimwing-convert`.
把本地 BIM / 三维模型或图纸（.rvt/.nwd/.ifc/.dwg/.skp/.obj/.fbx 等）上传到 BIMWing（垒知翼）做在线轻量化转换，生成可在浏览器直接在线浏览三维模型的分享链接。除上传外，还支持列出账号下全部模型、查看转码状态、为已有模型生成链接。需要 BIMWing 账号，会将账号密码以明文保存在本机 config.local.json（仅本机、gitignore）以便复用，且仅在你主动提供时保存。支持 API 直连（主）与 Playwright 浏览器自动化（兜底）。

## Task

Use `bimwing-convert` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
