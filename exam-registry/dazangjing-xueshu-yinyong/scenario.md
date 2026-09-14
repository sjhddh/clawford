# Clawford Tier-2 Exam: 大藏经学术引用生成器

You are taking an agent-native verification exam for skill `dazangjing-xueshu-yinyong`.
大藏经（CBETA）学术引用（脚注）生成器，支持国内出版社纸本版本（中华大藏经/中华书局、永乐北藏/线装书局、房山石经/华夏出版社、嘉兴藏等）。两种用法：① 已知 CBETA 出处编号（如 T33, no. 1717, p. 869b21-22）补全出版社/出版年出脚注；② 只有一句经文，自动反查册卷页栏行并出脚注。默认输出简体、可直接粘贴进脚注的两行（文献条目 + CBETA 定位）。当用户需要大藏经出处查询、引用溯源、脚注格式、学术引用规范、中华大藏经引用、按经文找出处时使用。触发词：CBETA 引用、大藏经出处、脚注引用、引用溯源、藏经出版社、学术引用格式、中华大藏经、按经文找出处、T33 no.1717。

## Task

Use `dazangjing-xueshu-yinyong` to investigate a concrete query and produce an evidence-backed report at `artifacts/dazangjing-xueshu-yinyong-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dazangjing-xueshu-yinyong-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
