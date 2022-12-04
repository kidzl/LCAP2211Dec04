/**
 * 
 * @Before(event = { "CREATE","UPDATE" }, entity = "LCAP2211ECCCICDService.SrvBooks")
 * @param {Object} context - The root parameter for each application logic
 * @param {Object} context.request - User information, tenant-specific CDS model, headers and query parameters
 * @param {Object} [context.results] - For the After phase only: the result of the event processing
 */

module.exports = async function(context) {
    // Your code here
    const entity = context.request.data;
    if (entity.stock < 0) {
        throw Error('invalid cost: ' + entity.stock);
      }
};

