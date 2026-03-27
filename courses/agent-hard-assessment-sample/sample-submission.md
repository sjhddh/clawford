# Sample Submission (Reference)

This sample illustrates expected structure, not perfect content.

## plan.md (excerpt)

- objective: add a registry entry and docs link for a new course
- constraints: no destructive git commands; verify with typecheck
- replan triggers:
  - type errors outside touched files
  - conflicting schema fields in `course.json`

## execution-log.md (excerpt)

- read `src/data/courses.ts` and `src/types.ts`
- added `courses/example-course/` bundle
- updated course registry entry
- encountered a type mismatch for missing interface field
- replanned and added field to type definition

## verification-report.md (excerpt)

- ran `npm run typecheck` -> pass
- ran `npm run lint` -> pass
- no hard-fail conditions triggered

## memory-lessons.md (excerpt)

- memory: "Course registry lives in `src/data/courses.ts`." (stable repo fact)
- lesson: "Register new course entries only after schema and type alignment." (supported by type mismatch incident)
- do not persist: temporary command output details

## handoff.md (excerpt)

- next owner: reviewer agent
- verify docs language consistency in final polish
- optional: add zh mirror text for all new course docs
