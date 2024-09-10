> i have written an application that makes api calls to salesforce and the api version is 61. Now api version 62 is released. I am concerned that my application might stop working. I want to know if I can force my salesforce org to use rest api v61. where do i find which version of api is being used in my org

In Salesforce, you typically interact with the REST API by specifying the API version in your requests. However, Salesforce does not allow you to "force" your Salesforce org to use a specific API version globally across all API calls. Instead, you can specify the version of the REST API you want to use in your individual API requests.

### How to Specify the API Version in Requests

1. **Specify API Version in Request URL**

   When making API calls, you can explicitly specify the version in the URL of the request. For example, to use API version 61, you should include `v61.0` in the URL:

   ```
   https://your-instance.salesforce.com/services/data/v61.0/sobjects/Account/describe
   ```

   This ensures that your application uses version 61 for that specific request, even if a newer version is available.

2. **Check Available API Versions**

   You can find out which API versions are available in your Salesforce org by using the `services/data` endpoint. For example:

   ```bash
   GET /services/data/
   ```

   This request will return a list of available API versions, which you can then use in your API requests.

### Determine Current API Version Used

To determine the API version being used in your Salesforce org, you should consider:

1. **Check API Version in API Documentation**

   The Salesforce API documentation might indicate which versions are currently supported. Salesforce generally maintains backwards compatibility, so older API versions continue to work, but it's always good to check the [Salesforce API documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm) for specific details.

2. **Inspect Your API Requests**

   Review the URLs in your application code or API requests. They should explicitly specify the version number in the URL, like `v61.0`, `v62.0`, etc. This will help you understand which version your application is using.

3. **Salesforce Setup**

   There isn't a setting in Salesforce Setup to lock or enforce a specific API version across all integrations. You will need to manage the API version at the request level in your application code.

### Best Practices for API Version Management

1. **Specify Versions in Requests**: Always specify the API version in your request URLs to ensure compatibility and control over which version of the API your application uses.

2. **Monitor Deprecation Notices**: Salesforce provides deprecation notices and announcements about API versions. Keep an eye on these notices to prepare for any changes or updates.

3. **Test with New Versions**: Before updating your application to a new API version, thoroughly test your integration with the new version to ensure compatibility and functionality.

4. **Read Release Notes**: Review the release notes for new API versions to understand new features, changes, and potential impacts on your application.

### Summary

- **Specify API Version in Requests**: Include the desired API version in the request URL to ensure your application uses that version.
- **Check Available Versions**: Use the `services/data/` endpoint to see available API versions.
- **No Global Lock**: Salesforce does not support locking a specific API version globally for all requests in an org.

By managing API versions at the request level and staying informed about changes, you can maintain compatibility and functionality for your Salesforce integrations.
