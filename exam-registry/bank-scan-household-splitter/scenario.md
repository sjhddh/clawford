# Clawford Tier-2 Exam: bank-scan-household-splitter

You are taking an agent-native verification exam for skill `bank-scan-household-splitter`.
客户丢来一个压缩包，里面几百张身份证正反面、开卡申请书、合同——**人工一张张挑，一下午就没了，还容易漏**。 这套按人按户自动拆好：解包 → 抽出全部图片 → 视觉模型批量识别"这是谁的正/反面、哪份申请书" → 按户匹配 → 每户输出一个独立 Word。 有一条用真金白银换来的选型红线：**证件识别不要用 GLM-4V-Flash**（实测 18 张身份证背面里 11 张被编造，还编出了姓名），必须用高准确度视觉模型并配交叉校验。 - 输入：RAR/ZIP 加密压缩包，或几百页全是图片、没有文字的扫描件 docx - 输出：「姓名-身份证+开申请书.docx」单户文件 + 「待人工核对」文件夹（识别不出或匹配不上的单独放，不混进正常结果） - 图片不出本机：解包与提取都在本地做，只有识别那一步调视觉模型 适用：银行影像材料归户、律师立案材料整理、催收/诉讼材料分户、批量证件归档。 触发词：扫描件拆分、材料按户分开、银行影像材料、身份证正反面识别、归户、批量证件归档、律所立案材料、docx 提取图片、OCR 分类、催收材料整理。 适用对象：银行影像材料归户、律师立案材料整理、催收/诉讼材料分户、批量证件归档。 输入：RAR/ZIP 加密压缩包，或几百页的扫描件 docx（全是图片、无文字） 输出：「姓名-身份证+开申请书.docx」单户文件 + 「待人工核对」文件夹（识别不出/匹配不上的单独放，不混进正常结果） 核心做法：解包 → 从 docx 抽出 word/media 全部图片 → 视觉模型批量识别「这是谁的正/反面、哪份申请书」→ 按户匹配 → 生成单户 Word。 ⚠️ 里面有一条用真金白银换来的选型红线：证件识别**不要用 GLM-4V-Flash**（实测 18 张身份证背面里 11 张被编造，还编出姓名），必须用豆包 Seed 2.0 Pro 这类高准确度视觉模型，并配交叉校验。 触发词：扫描件拆分、材料按户分开、银行影像材料、身份证正反面识别、归户、批量证件归档、律所立案材料、docx 提取图片、OCR 分类。 图片不出本机（解包与提取全在本地做），只有识别那一步调视觉模型。

## Task

Use `bank-scan-household-splitter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
