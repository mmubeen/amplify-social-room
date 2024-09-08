/* eslint-disable @typescript-eslint/no-explicit-any */
import { util, extensions } from '@aws-appsync/utils'
export const request = () => ({ });

interface Context {
    arguments: UserRoom;
}

interface UserRoom {
    roomId: string;
    myUsername: string;
}
export const response = (ctx:Context) => {
    const filter = {
         roomId: { eq: ctx.arguments.roomId },
         username: { ne: ctx.arguments.myUsername }
    }
    extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter))
    return null;
}