> i am making a soql query in salesforce through apex and my code looks like this -
> List<techdoc**c> t = [select name**c from techdoc**c where id='a04Hs00002FjIImIAN'];
> system.debug(t);
> in debug, i see name**c, id, and currencycode is returned. But I never asked for currencycode or id in my query

In Salesforce, when you perform a SOQL (Salesforce Object Query Language) query, you might encounter additional fields in the results that you did not explicitly request in your query. This behavior can be confusing, but it's usually due to how Salesforce's internal systems handle the data.

Here are a few reasons why additional fields like `currencycode` or `id` might appear in the query results:

### Reasons for Unexpected Fields in SOQL Results

1. **Default Fields Returned**: Salesforce may include certain fields in query results by default, especially system fields or fields required for internal operations. The `id` field is a standard Salesforce field that uniquely identifies records and is often included in query results even if not explicitly requested.

2. **Field Visibility**: When you use `system.debug` to log the results, Salesforce might show additional fields in the debug output that are part of the object’s schema but not explicitly selected in the SOQL query. This is because `system.debug` prints the entire object as it exists in the Salesforce runtime context.

3. **Data Schema**: Fields like `currencycode` might be included as part of the object’s schema or as part of the record's context in certain scenarios, particularly if you're working with objects that are related to or involve multiple currencies.

### Example Explanation

Given your SOQL query:

```apex
List<techdoc__c> t = [SELECT name__c FROM techdoc__c WHERE id = 'a04Hs00002FjIImIAN'];
System.debug(t);
```

You requested only `name__c`, but the debug output also shows `id` and `currencycode`. Here’s why this might happen:

- **`id` Field**: The `id` field is automatically included in the results because it is a fundamental part of Salesforce’s object model. Salesforce includes this field for all records as it's crucial for identifying the record.

- **`currencycode` Field**: This could be part of a standard or custom field configuration in your Salesforce org. For example, if `techdoc__c` is related to currency fields or is part of a multi-currency setup, Salesforce might include currency-related fields automatically in the query results.

### How to Investigate and Control Field Inclusion

1. **Check Object Schema**: Review the schema of the `techdoc__c` object to understand the fields it includes. You can do this in Salesforce Setup under Object Manager.

2. **Review Field Accessibility**: Verify if the fields like `currencycode` are part of the object schema and check if they have default visibility or inclusion settings.

3. **Debug Log**: Instead of using `System.debug(t);`, you can log specific fields to see exactly what’s being returned:

   ```apex
   for (techdoc__c record : t) {
       System.debug('Name: ' + record.name__c);
       // Optionally log other fields explicitly
       System.debug('ID: ' + record.Id); // This will show if ID is part of the record
   }
   ```

4. **SOQL Query Optimization**: Ensure your query is optimized to only include the fields you are interested in. However, keep in mind that default fields like `Id` are likely to appear in the results.

### Summary

In Salesforce, additional fields like `id` are often included by default in query results, even if not explicitly requested. This is due to the way Salesforce handles object records and debug output. To manage this behavior, focus on understanding the object schema and how Salesforce integrates default fields into query results.
