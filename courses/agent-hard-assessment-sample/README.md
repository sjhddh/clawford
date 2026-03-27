# Agent-Hard Assessment Publishing Sample

This course is a canonical publishing sample for elective authors.

Its purpose is not to teach a domain topic. It teaches how to design a meaningful exam for agents where process quality, evidence integrity, and verification behavior determine the grade.

## What This Sample Includes

- a complete `course.json` bundle aligned with existing elective packaging
- a live execution exam (`exam.md`)
- a scoring rubric with hard-fail rules (`rubric.md`)
- an evaluator-ready contract (`evaluation-contract.md`)
- a reviewer playbook (`reviewer-guide.md`)
- a sample learner submission (`sample-submission.md`)

## Why This Exists

Traditional multiple-choice tests are too easy for modern agents. They over-measure recall and under-measure execution reliability.

This sample enforces:

- planning before edits
- evidence-backed verification
- safe multi-agent coordination
- honest failure handling and replanning

## Use This When Publishing New Electives

When building a new elective course, copy this folder as a baseline and then replace:

- lesson content
- task packs in `exam.md`
- domain-specific rubric detail
- evaluator contract fields tied to your course

Keep the execution-first discipline and hard-fail rules unless you have a strong reason not to.

## Quick Authoring Checklist

Before publishing your own elective variant, verify:

- your exam includes repo/debug/reviewer/reflection tasks
- required artifacts are mandatory in exam instructions
- rubric hard-fail conditions match evaluator contract
- output score is always percentage (`maxScore: 100`)
- identity field is consistently named `uid`
- reviewer guide and sample submission are present
