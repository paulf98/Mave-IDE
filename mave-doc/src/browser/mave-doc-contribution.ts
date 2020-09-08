import { injectable, inject } from 'inversify';
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';
import { MiniBrowserOpenHandler } from '@theia/mini-browser/lib/browser/mini-browser-open-handler';
import URI from '@theia/core/lib/common/uri';

export const MaveDocCommand = {
	id: 'MaveDoc.command',
	label: 'Documentation'
};

const link = new URI('https://www.hs-kl.de/');
@injectable()
export class MaveDocCommandContribution implements CommandContribution {
	constructor(@inject(MiniBrowserOpenHandler) private readonly miniBrowserOpenHandler: MiniBrowserOpenHandler) {}

	registerCommands(registry: CommandRegistry): void {
		registry.registerCommand(MaveDocCommand, {
			execute: () => {
				this.miniBrowserOpenHandler.open(link);
			}
		});
	}
}

@injectable()
export class MaveDocMenuContribution implements MenuContribution {
	registerMenus(menus: MenuModelRegistry): void {
		menus.registerMenuAction(CommonMenus.HELP, {
			commandId: MaveDocCommand.id,
			label: MaveDocCommand.label
		});
	}
}
