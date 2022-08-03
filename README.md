# fuzy-js
Javascript library for Fuzy API.

## Example
https://github.com/fuzy-ai/sample-react-app/tree/fuzy-API-example

## Development

Install library
```shell
npm install https://github.com/fuzy-ai/fuzy-js#beta-1.0.0
```
NOTE: this installs a specific release of fuzy-js. This is the recommended way to install the fuzy-js library. 
It's possible to install using `npm install https://github.com/fuzy-ai/fuzy-js`. This is not recommended because it 
would pull the latest changes which may not be stable.

Set API token for Fuzy
```shell
export REACT_APP_FUZY_AI_API_TOKEN=<your_api_token>
```

## Documentation
API call made by this library

https://fuzyai.stoplight.io/docs/fuzy-ai-public-api/4527c308f171b-update-a-v-3-event

### sendEvent
Parameters
```js
sendEvent(    
    eventType, // required, name of event
    {
        userId, // required, userId internal to your application
        accountId,
        billingAccountId,
        paymentProcessorCustomerId,
        paymentProcessorSubscriptionId 
    }, 
    metadata = {},
    tags = [],
    eventId = "", // random UUID if unset, this must be unique for each event
    productId = "",
    sessionId = ""
);
```

```js
import { sendEvent } from "fuzy-js";

const userId = getUser(); // this is internal to your application

// with required parameters (eventType, userId)
sendEvent("page_view/event_name", { userId });
```
