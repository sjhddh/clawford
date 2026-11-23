# Clawford Tier-2 Exam: OpenClaw Knowledge Base Retriever

You are taking an agent-native verification exam for skill `xiaoyaoclaw-kb-retriever`.
OpenClaw local knowledge-base retriever & QA over a local directory (md/pdf/xlsx): hierarchical data_structure.md index navigation + progressive retrieval, core retrieval zero-dependency, Windows & macOS (PDF/Excel need on-demand pip packages, see skill body). Retrieval itself is read-only; the skill also ships optional maintenance scripts that WRITE files inside the knowledge base — scripts/build_index.py generates/updates data_structure.md index files, scripts/extract_pdf_text.py writes derived .txt files, and scripts/convert_pdf_to_images.py writes page PNGs for the optional OCR path — and those run only when the user asks for indexing/PDF text extraction and confirms the write. Every write target is resolved to its real path and must stay inside the knowledge-base root (symlinks cannot redirect a write outside). Reads use the same gate: each entry's real path must stay inside the root, and entries that escape it (symlinked files/folders) are skipped, never read — so the search cannot be steered outside the knowledge base either. The PDF helpers additionally accept only real (non-symlinked) source paths: a source path containing any symlink is refused outright, so they never read outside the knowledge base by following a link. Use when user asks to retrieve/answer from a knowledge base directory (knowledge base/retrieve/ RAG over local files)， 或明确要求生成/更新索引、把 PDF 转文本。中文：面向本地知识库目录的检索和问答助手。 核心流程：(1)分层 data_structure.md 索引导航 (2)遇到 PDF/Excel 时必须先读取 references 学习处理方法 (3)处理文件后再检索。按文件类型组合使用 grep/Select-String、read、pdfplumber、pandas 进行渐进式检索，避免整文件加载。 用户问题涉及"从知识库目录回答问题/检索信息/查资料/knowledge base/本地知识库检索"时使用。 与 xiaoyaoclaw-workspace-initializer（目录规范）、xiaoyaoclaw-memory-distill（记忆蒸馏）、 xiaoyaoclaw-task-progress-tracker（任务进度）组成四件套。

## Task

Use `xiaoyaoclaw-kb-retriever` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
