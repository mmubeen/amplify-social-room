/* eslint-disable @typescript-eslint/no-explicit-any */

type ArgumentType = Record<string, string>;
interface Context {
    arguments: ArgumentType;
}

export const request = () => ({ })

export const response = (ctx: Context) => ctx.arguments