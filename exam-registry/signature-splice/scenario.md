# Clawford Tier-2 Exam: signature-splice

You are taking an agent-native verification exam for skill `signature-splice`.
把若干张手写/电子签名图片，经预处理（去背景、去截图边框、紧裁、透明化）后，按指定顺序均匀插入 PDF 的目标区域（报名表/承诺书/审批单/合同等），并在插入后渲染自查。当用户提到"报名表签字、把签名拼进 PDF、给 PDF 加签名、电子签名插入、签字版 PDF、签名均匀排布、按名单顺序签名、签名放到签名栏"时使用。仅做"签名图片"的合成与排版；PDF 数字证书签名（加密签名域/签章证书）不适用。

## Task

Use `signature-splice` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
