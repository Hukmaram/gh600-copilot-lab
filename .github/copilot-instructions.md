# GitHub Copilot Repository Instructions

## Current repository state
This repository currently contains only the `.github/` directory and this file, `.github/copilot-instructions.md`.

Verified repository facts:
- There is no application source directory at the root.
- There is no `README.md` in the repository.
- There is no `package.json`, lockfile, or other package manifest.
- There is no test suite or test configuration file.
- There are no build, lint, or CI workflow files under `.github/workflows/`.
- There are no `src/`, `tests/`, `docs/`, or other project directories yet.

If a file or directory is not present here, treat it as not yet defined rather than assuming it exists.

## Repository purpose
The repository purpose is not yet defined by project files. Do not assume a language, framework, runtime, or product scope without evidence from the repository.

## Project structure
```text
.github/
  copilot-instructions.md
```

This is the full structure currently present in the repository. No application code or tooling is checked in yet.

## Coding conventions
- Prefer minimal, explicit changes.
- Do not invent project structure or conventions that are not present in the repository.
- Keep instructions aligned with the files that actually exist now.
- When a new project is added, verify the real structure before describing it.

## Development workflow
- Check the repository state before proposing code, commands, or workflows.
- Keep changes focused and reviewable.
- Update these instructions only when the repository adds verified facts.
- If the project is not yet defined, say so clearly rather than guessing.

## Build commands
Not yet defined. There is no repository evidence for a build system, package manager, or runtime command.

## Test commands
Not yet defined. There is no repository evidence for a test framework or test runner.

## Important architectural conventions
None are currently defined by the repository. Do not assume layered architecture, frameworks, service boundaries, or deployment patterns without evidence.

## Expectations for making changes
- Verify every fact against the actual repository before writing instructions or proposing commands.
- Do not create application code or unrelated files unless explicitly requested.
- Do not invent source directories, dependencies, CI workflows, or build/test commands.
- If information is unavailable, state: "Not yet defined."
- Keep this file accurate to the repository's current state and update it only when actual repository evidence changes.
