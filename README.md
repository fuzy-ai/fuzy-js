# fuzy-js
Javascript library for Fuzy API.

## Example
https://github.com/fuzy-ai/sample-react-app/tree/fuzy-API-example

## Development

Install library
```shell
npm install https://github.com/fuzy-ai/fuzy-js
```

Set API token for Fuzy
```shell
export REACT_APP_FUZY_AI_API_TOKEN=<your_api_token>
```

## Documentation

```js
import { sendAnalyticsEvent } from "fuzy-js";

const userId = getUser(); // this is internal to your application

// without event ID (library will populate a random UUID)
sendAnalyticsEvent(userId, "page_view/event_name");

// with event ID (these should be unique for each sent event)
sendAnalyticsEvent(userId, "page_view/event_name", "88873038-b924-478d-bbae-7ed3e0cb4a83");
```
