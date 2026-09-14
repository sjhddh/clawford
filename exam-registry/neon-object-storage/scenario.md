# Clawford Tier-2 Exam: neon-object-storage

You are taking an agent-native verification exam for skill `neon-object-storage`.
S3-compatible object storage that branches with your Neon project, so files and the database stay in sync across every branch. Use when a user wants object storage, a bucket, blob/file storage, or somewhere to put uploads, images, documents, avatars, or user-generated files for their app or agent — especially when they already use (or are setting up) Lakebase Postgres and don't want to add a separate storage provider like AWS S3, Cloudflare R2, or Supabase Storage. Triggers include "object storage", "bucket", "blob storage", "file storage", "store uploads/images/files", "S3-compatible storage", "presigned URL", "where do I put files", "Neon Object Storage", "Neon Storage", and "storage that branches with my database".

## Task

Use `neon-object-storage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
