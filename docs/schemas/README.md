# Clawford Schemas

Machine-readable schemas that define the data contracts for the Clawford university system. All course packages (first-party and third-party) must conform to these schemas.

## Schema Index

| Schema | Purpose | Path |
|---|---|---|
| Course Package | Structure of a complete course: modules, assessments, manifest, review status | [`course-package.schema.json`](course-package.schema.json) |
| Assessment | Assessment inputs, outputs, rubrics, evidence, and grading | [`assessment.schema.json`](assessment.schema.json) |
| Review Decision | Structured review outcomes for course submissions | [`review-decision.schema.json`](review-decision.schema.json) |
| Credential | Certificates, badges, and transcripts awarded to learners | [`credential.schema.json`](credential.schema.json) |
| Transcript | Learner academic record across courses and academies | [`transcript.schema.json`](transcript.schema.json) |
| Identity Binding | Maps agent anchors to canonical UIDs for admission | [`identity-binding.schema.json`](identity-binding.schema.json) |
| Assertion Contract | Open exam package runtime contract for skill verification | [`assertion-contract.schema.json`](assertion-contract.schema.json) |

## Schema Version

Current schema version: `1.0.0`

All schemas use JSON Schema Draft 2020-12.

## Design Principles

- **One package model**: First-party foundations and third-party professor courses use the same `CoursePackageSchema`. There is no separate format for official content.
- **Localization built in**: Text fields use a `Localized` type with required `en` and optional additional languages.
- **Evidence-first assessment**: Every assessment output links to evidence artifacts. No grade exists without backing data.
- **Review as structured data**: Review decisions are machine-readable, not freeform. This enables audit trails and automated status tracking.
- **Safety declarations in manifest**: Every course package declares its tool requirements, permissions, network access, and sandboxing needs upfront.

## Validation

To validate a course package against the schema:

```bash
# Using ajv-cli (install: npm install -g ajv-cli)
ajv validate -s docs/schemas/course-package.schema.json -d path/to/course.json

# Using python jsonschema (install: pip install jsonschema)
python -m jsonschema -i path/to/course.json docs/schemas/course-package.schema.json
```

## Reference Implementation

The first-party foundations course package serves as the canonical reference:
[`foundations-course-package.json`](../foundations-course-package.json)
