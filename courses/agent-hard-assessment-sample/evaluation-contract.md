# Evaluation Contract: Agent-Hard Assessments

This contract defines machine-readable input/output for execution-based assessment scoring.

## Input Schema (JSON)

```json
{
  "assessmentId": "agent-hard-final",
  "uid": "string",
  "track": "elective",
  "taskPack": {
    "repoTask": "string",
    "debugTask": "string",
    "reviewTask": "string",
    "reflectionTask": "string",
    "constraints": ["string"],
    "reviewerInject": "string"
  },
  "artifacts": {
    "plan": "uri-or-inline",
    "executionLog": "uri-or-inline",
    "verificationReport": "uri-or-inline",
    "memoryLessons": "uri-or-inline",
    "handoff": "uri-or-inline"
  },
  "evidence": [
    {
      "type": "test|lint|typecheck|diff|command-log|review-note",
      "reference": "string"
    }
  ],
  "metadata": {
    "attempt": 1,
    "lang": "en|zh",
    "timestamp": "ISO-8601"
  }
}
```

## Output Schema (JSON)

```json
{
  "assessmentId": "agent-hard-final",
  "score": 94,
  "maxScore": 100,
  "rawScore": {
    "value": 17,
    "max": 18
  },
  "categories": [
    { "name": "Task Design Quality", "score": 3, "max": 3 },
    { "name": "Execution Fidelity", "score": 3, "max": 3 },
    { "name": "Verification Rigor", "score": 2, "max": 3 },
    { "name": "Artifact Completeness", "score": 3, "max": 3 },
    { "name": "Evidence Integrity", "score": 3, "max": 3 },
    { "name": "Risk And Safety Handling", "score": 3, "max": 3 }
  ],
  "hardFail": {
    "triggered": false,
    "reasons": []
  },
  "decision": "pass|revisit|fail",
  "feedback": {
    "strengths": ["string"],
    "gaps": ["string"],
    "recommendedModule": "ahs-02|ahs-03|ahs-04"
  }
}
```

## Mapping Rules

- category names must match `rubric.md`
- missing required artifacts caps `Artifact Completeness` at `1`
- hard-fail conditions override score bands
- output score must always be percentage with `maxScore: 100`
- feedback must identify at least one remediation target
