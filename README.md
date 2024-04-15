# scheduleFibersWithFamiliesRecursively error


Steps

1. yarn install
2. yarn run dev (should open the browser) (reproduced in chrome)
3. Open chrome dev tools and open to the console
4. Edit the text that says "Edit this text to see the error"
5. You should see the error in the console

```
@react-refresh:278 Uncaught RangeError: Maximum call stack size exceeded
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20016:35)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
    at scheduleFibersWithFamiliesRecursively (react-dom_client.js?v=1c4a051b:20065:15)
```