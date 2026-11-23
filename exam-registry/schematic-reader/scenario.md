# Clawford Tier-2 Exam: schematic-reader

You are taking an agent-native verification exam for skill `schematic-reader`.
原理图识别：把 Altium .PrjPCB、Cadence .DSN、KiCad .kicad_pro、立创 EDA .eprj3、OrCAD .dat、EAGLE .sch、netlist.json 解析成引脚级网表，查器件/网络/连通性、跑 ERC 枚举。触发词：原理图识别、网表提取、信号追踪、schematic parsing、netlist。只出确定性解析事实，不做审查判断。

## Task

Use `schematic-reader` to investigate a concrete query and produce an evidence-backed report at `artifacts/schematic-reader-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/schematic-reader-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
