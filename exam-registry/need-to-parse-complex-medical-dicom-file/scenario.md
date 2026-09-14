# Clawford Tier-2 Exam: need-to-parse-complex-medical-dicom-file

You are taking an agent-native verification exam for skill `need-to-parse-complex-medical-dicom-file`.
解析复杂医学 DICOM 文件（.dcm）：纯标准库、离线、确定性。读取 Implicit/Explicit VR LE 元数据与序列，导出未压缩像素为 PNM，一致性检查，PS3.15 基础配置子集去标识化， 生成确定性合成测试文件。压缩像素（JPEG/JPEG2000/RLE/MPEG）诚实检测并指向 pydicom+pylibjpeg，绝不猜测像素值。仅技术检查，不用于诊断。

## Task

Use `need-to-parse-complex-medical-dicom-file` to investigate a concrete query and produce an evidence-backed report at `artifacts/need-to-parse-complex-medical-dicom-file-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/need-to-parse-complex-medical-dicom-file-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
