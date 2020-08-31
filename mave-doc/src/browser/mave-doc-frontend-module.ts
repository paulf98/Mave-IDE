/**
 * Generated using theia-extension-generator
 */
import { MaveDocCommandContribution, MaveDocMenuContribution } from './mave-doc-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(MaveDocCommandContribution);
    bind(MenuContribution).to(MaveDocMenuContribution);
});
