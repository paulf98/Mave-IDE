import { injectable, inject } from 'inversify';
import {
	CommandContribution,
	CommandRegistry,
	MenuContribution,
	MenuModelRegistry,
	MessageService
} from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const MaveDocCommand = {
	id: 'MaveDoc.command',
	label: 'Documentation'
};

@injectable()
export class MaveDocCommandContribution implements CommandContribution {
	constructor(@inject(MessageService) private readonly messageService: MessageService) {}

	registerCommands(registry: CommandRegistry): void {
		registry.registerCommand(MaveDocCommand, {
			execute: () => {
				console.log('Start mini-browser');
				this.messageService.info('Hello World!');
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
