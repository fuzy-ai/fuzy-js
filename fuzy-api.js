import { v4 as uuidv4 } from 'uuid';

export const sendEvent = async (
    eventType,
    user,
    metadata = {},
    tags = [],
    eventId = "",
    productId = "",
    sessionId = "",
) => {
    if (!user.userId) {
        throw new Error("userId is required in Fuzy Event");
    }
    if (!eventType) {
        throw new Error("eventType is required in Fuzy Event");
    }

    await fetch(`https://api.fuzy.ai/v3/event`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_FUZY_AI_API_TOKEN,
        },
        body: JSON.stringify({
            eventType,
            timestamp: (new Date()).toISOString(),
            user: {
                userId: user.userId,
                accountId: user.accountId,
                billingAccountId: user.billingAccountId,
                paymentProcessorCustomerId: user.paymentProcessorSubscriptionId,
                paymentProcessorSubscriptionId: user.paymentProcessorSubscriptionId,
            },
            product: productId,
            metadata,
            sessionId,
            tags,
            eventId: eventId.length ? eventId : uuidv4(),
        }),
    });
}

exports.sendEvent = sendEvent;