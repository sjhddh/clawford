#!/usr/bin/env node

import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { access, cp, lstat, mkdir, readFile, rm, symlink } from 'node:fs/promises';
import { constants } from 'node:fs';
import { fileURLToPath } from 'node:url';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const defaultCourseId = 'clawford-foundations';
const cursorInstallRoot = path.join(os.homedir(), '.cursor', 'skills');
const requiredSelfHostEnvVars = [
  'SESSION_SECRET',
  'BLOB_READ_WRITE_TOKEN',
  'FLOCK_API_KEY',
];

function print(message = '') {
  process.stdout.write(`${message}\n`);
}

function fail(message, exitCode = 1) {
  process.stderr.write(`${message}\n`);
  process.exit(exitCode);
}

function parseArgs(argv) {
  const [command = 'help', ...rawArgs] = argv;
  const flags = {};

  for (const rawArg of rawArgs) {
    if (!rawArg.startsWith('--')) {
      continue;
    }

    const body = rawArg.slice(2);
    const separatorIndex = body.indexOf('=');

    if (separatorIndex === -1) {
      flags[body] = 'true';
      continue;
    }

    const key = body.slice(0, separatorIndex);
    const value = body.slice(separatorIndex + 1);
    flags[key] = value;
  }

  return { command, flags };
}

async function pathExists(targetPath) {
  try {
    await access(targetPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function readJson(targetPath) {
  const contents = await readFile(targetPath, 'utf8');
  return JSON.parse(contents);
}

async function installCursorCourse({ mode, force, destination }) {
  const sourcePath = path.join(packageRoot, 'courses', defaultCourseId);
  const targetPath = path.join(destination, defaultCourseId);

  if (!(await pathExists(sourcePath))) {
    fail(`Clawford package is missing ${sourcePath}`);
  }

  await mkdir(destination, { recursive: true });

  if (await pathExists(targetPath)) {
    if (!force) {
      fail(
        `Target already exists: ${targetPath}\nRe-run with --force=true to replace the existing install.`,
      );
    }

    await rm(targetPath, { force: true, recursive: true });
  }

  if (mode === 'symlink') {
    await symlink(sourcePath, targetPath, 'dir');
  } else {
    await cp(sourcePath, targetPath, { recursive: true });
  }

  const installMode = mode === 'symlink' ? 'symlinked' : 'copied';

  print(`Installed ${defaultCourseId} to Cursor (${installMode}).`);
  print(`Location: ${targetPath}`);
  print('');
  print('Next steps:');
  print('1. Restart Cursor if it was already open.');
  print(`2. Verify the skill is available under ~/.cursor/skills/${defaultCourseId}.`);
  print('3. Run `clawford doctor` to validate the packaged discovery assets.');
}

async function runInstall(flags) {
  const target = flags.target ?? 'cursor';
  const mode = flags.mode ?? 'copy';
  const force = flags.force === 'true';
  const destination = flags.dest
    ? path.resolve(flags.dest)
    : cursorInstallRoot;

  if (!['copy', 'symlink'].includes(mode)) {
    fail(`Unsupported install mode: ${mode}. Expected copy or symlink.`);
  }

  if (target !== 'cursor') {
    fail(`Unsupported install target: ${target}. v1 currently supports only cursor.`);
  }

  await installCursorCourse({ mode, force, destination });
}

async function runDoctor() {
  const checks = [
    {
      label: 'Packaged course',
      path: path.join(packageRoot, 'courses', defaultCourseId, 'SKILL.md'),
      validate: async (targetPath) => {
        await access(targetPath, constants.R_OK);
      },
    },
    {
      label: 'AI plugin manifest',
      path: path.join(packageRoot, 'public', '.well-known', 'ai-plugin.json'),
      validate: async (targetPath) => {
        const manifest = await readJson(targetPath);
        if (manifest.name_for_model !== 'clawford_agent_api') {
          throw new Error('Unexpected name_for_model');
        }
      },
    },
    {
      label: 'OpenAPI contract',
      path: path.join(packageRoot, 'public', 'openapi.json'),
      validate: async (targetPath) => {
        const openapi = await readJson(targetPath);
        if (!openapi.openapi) {
          throw new Error('Missing openapi version');
        }
      },
    },
    {
      label: 'Cursor install',
      path: path.join(cursorInstallRoot, defaultCourseId),
      validate: async (targetPath) => {
        const stats = await lstat(targetPath);
        if (!stats.isDirectory() && !stats.isSymbolicLink()) {
          throw new Error('Install target is neither directory nor symlink');
        }
      },
    },
  ];

  let failedChecks = 0;

  for (const check of checks) {
    try {
      await check.validate(check.path);
      print(`OK  ${check.label}: ${check.path}`);
    } catch (error) {
      failedChecks += 1;
      const reason = error instanceof Error ? error.message : String(error);
      print(`FAIL ${check.label}: ${check.path}`);
      print(`     ${reason}`);
    }
  }

  const missingEnvVars = requiredSelfHostEnvVars.filter(
    (name) => !process.env[name],
  );
  if (missingEnvVars.length === 0) {
    print('OK  Self-host env: required vars detected in current shell');
  } else {
    print(
      `WARN Self-host env: missing ${missingEnvVars.join(
        ', ',
      )}. This is expected on local course-only installs.`,
    );
  }

  if (failedChecks > 0) {
    fail(`Doctor found ${failedChecks} failing check(s).`, 1);
  }

  print('Doctor checks passed.');
}

function printHelp() {
  print('Clawford CLI');
  print('');
  print('Usage:');
  print('  clawford install [--target=cursor] [--mode=copy|symlink] [--force=true] [--dest=/path]');
  print('  clawford doctor');
  print('  clawford help');
  print('');
  print('Examples:');
  print('  clawford install --target=cursor --mode=copy');
  print('  clawford doctor');
}

async function main() {
  const { command, flags } = parseArgs(process.argv.slice(2));

  switch (command) {
    case 'install':
      await runInstall(flags);
      break;
    case 'doctor':
      await runDoctor();
      break;
    case 'help':
    case '--help':
    case '-h':
    default:
      printHelp();
      break;
  }
}

await main();
