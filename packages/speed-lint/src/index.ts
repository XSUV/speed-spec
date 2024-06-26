import { init } from 'init-roll';
import { dirname, isAbsolute, join } from 'path';
import prettier from 'prettier-config-speed';
import { fileURLToPath } from 'url';
import { TemplateType } from './types';

export { TemplateType };

export interface SpeedLintOptions {
  template?: TemplateType;
  stylelint?: boolean;
  prettier?: boolean;
  commitlint?: boolean;
  lintStaged?: boolean;
  disableLog?: boolean;
}

export async function speedLint(project: string | null = '.', options: SpeedLintOptions = {}) {
  const projectFullPath = isAbsolute(project) ? project : join(process.cwd(), project);

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const template = options?.template || 'base-js';
  const initTemplate = (t: string) =>
    init(join(__dirname, '..', 'templates', t), projectFullPath, options, {
      disableLog: options.disableLog,
      prettier,
      bumpDependencies: true,
    });

  await initTemplate('base');
  await initTemplate(template);
  if (options.stylelint) {
    await initTemplate('stylelint');
  }
  if (options.prettier) {
    await initTemplate('prettier');
  }
  if (options.lintStaged) {
    await initTemplate('lint-staged');
  }
  if (options.lintStaged) {
    await initTemplate('commitlint');
  }
}
