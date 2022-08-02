import {v4 as uuidv4} from 'uuid';

exports.sendAnalyticsEvent = async (userId, eventType, eventId= "") => {
    const sentEventId = eventId.length ? eventId : uuidv4();
    await fetch(`https://api.fuzy.ai/v3/event`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_FUZY_AI_API_TOKEN,
        },
        body: JSON.stringify({
            eventType,
            timestamp: (new Date()).toISOString(),
            eventId: sentEventId,
            user: { userId },
        }),
    });
}