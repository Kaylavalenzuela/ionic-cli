import * as chalk from 'chalk';

import { Command, CommandMetadata } from '@ionic/cli-utils/lib/command';

@CommandMetadata({
  name: 'share',
  type: 'global',
  description: '',
  visible: false,
})
export class ShareCommand extends Command {
  async run(): Promise<number> {
    const dashUrl = await this.env.config.getDashUrl();

    this.env.log.error(
      `${chalk.green('ionic share')} has been removed as of CLI 3.0.\n` +
      `The functionality now exists in the Ionic Dashboard: ${chalk.bold(dashUrl)}`
    );

    return 1;
  }
}
