---
name: "Bug Analysis"
description: "Analyze a bug report without immediately modifying code. Investigate the problem, identify root causes, and propose a minimal solution."
---

# Bug Analysis Prompt

## Purpose

Analyze a reported bug systematically without modifying application code. This prompt guides investigation of the problem, identification of root causes, and proposal of a minimal, focused fix.

## Instructions for Copilot

### Phase 1: Investigation (Do not modify files)

1. **Identify the affected area**
   - Review the bug report carefully.
   - Determine which component, module, or subsystem is likely affected.
   - Reference the repository structure: `src/frontend/`, `src/backend/`, `src/shared/`, or `tests/`.

2. **Inspect relevant source files**
   - Examine the affected source files without making changes.
   - Review the interfaces, function signatures, and logic.
   - Check related files in the same module and in `src/shared/`.
   - Look for existing tests related to the affected code.

3. **Identify the likely root cause**
   - Based on the bug report and code inspection, determine what is causing the issue.
   - Consider edge cases, input validation, and state management.
   - Note any assumptions made in the original implementation.
   - Reference the repository's path-specific instructions if applicable:
     - Frontend: presentation and client-side concerns
     - Backend: server and business-logic concerns, input validation
     - Shared: common utilities used across modules

4. **List evidence supporting the diagnosis**
   - Cite specific code locations (file paths and line numbers).
   - Reference the bug report details that match the identified issue.
   - Include any test cases that fail or pass as evidence.

### Phase 2: Proposed Solution (Separate from investigation)

5. **Identify possible risks and edge cases**
   - What could go wrong with the current code?
   - Are there boundary conditions not handled?
   - Could the fix introduce regressions in other areas?
   - Consider performance, security, and data integrity.

6. **Propose a minimal implementation plan**
   - Describe the exact changes needed to fix the issue.
   - Keep changes focused to the reported problem only.
   - Do not include unrelated improvements or refactoring.
   - Specify which files will be modified and the nature of the changes.
   - Follow the repository's coding conventions and existing patterns.
   - Respect the repository's path-specific instructions:
     - Keep modules small and focused.
     - Do not introduce frameworks unless explicitly requested.
     - Validate inputs at appropriate boundaries (backend).

7. **Specify tests that should be added or changed**
   - Identify existing tests that should pass after the fix.
   - Propose new tests that verify the fix addresses the reported bug.
   - Propose tests that verify edge cases are handled correctly.
   - Use the repository's Jest setup and testing conventions.
   - Tests should verify behavior, not implementation details.

### Phase 3: Validation Plan

8. **Clearly separate investigation, proposed changes, and validation**
   - Summarize findings from Phase 1 in a clear "Investigation Summary" section.
   - Present the minimal fix in a clear "Proposed Changes" section.
   - Outline how to verify the fix in a "Validation" section.
   - Describe the expected test results after the fix is applied.

## Critical Rules for Copilot

- **Do not modify files during the analysis.** Use this prompt to investigate and propose only.
- **Do not invent repository facts.** Reference only files and code that actually exist.
- **Use the existing repository instructions.** Respect the guidelines in `.github/copilot-instructions.md` and path-specific instructions in `.github/instructions/`.
- **Keep the proposed solution limited to the reported problem.** Do not propose unrelated changes, refactoring, or new features.
- **Be explicit about assumptions.** If the diagnosis depends on an assumption about how the code is used, state it clearly.
- **Provide actionable output.** The analysis should guide implementation without requiring additional investigation.

## Output Format

Structure your response as:

```
## Investigation Summary
[Phase 1 findings: affected area, root cause, evidence]

## Analysis
- Likely cause: [description]
- Evidence: [citations]
- Risks and edge cases: [list]

## Proposed Changes
- Files to modify: [list with specific changes]
- Implementation: [step-by-step changes]
- Rationale: [why this fix addresses the issue]

## Validation
- Tests to add/modify: [list with test descriptions]
- Expected results: [how to verify the fix works]
- Regression risks: [edge cases or areas to verify after fix]
```

## How to Use This Prompt

1. Provide a bug report or a description of unexpected behavior.
2. Copilot will analyze the issue without modifying code.
3. Review the investigation and proposed solution.
4. If the analysis is sound, proceed to implement the proposed changes.
5. Follow the validation plan to verify the fix.
