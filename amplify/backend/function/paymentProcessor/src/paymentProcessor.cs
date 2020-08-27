using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

// If you rename this namespace, you will need to update the invocation shim
// to match if you intend to test the function with 'amplify mock function'
namespace paymentProcessor
{
    // If you rename this class, you will need to update the invocation shim
    // to match if you intend to test the function with 'amplify mock function'
    public class paymentProcessor
    {
        /// <summary>
        /// Your Lambda's input type.
        /// Change this to match whatever event you intend to send, or
        /// use one of the Amazon.Lambda.XXXEvents NuGet packages
        /// </summary>
        public class LambdaEvent
        {
            public string id { get; set; }
            public string cart { get; set; }
            public float total { get; set; }
            public string address {get; set;}
            public string username {get; set;}
            public string token {get; set;}
        }

        // If you rename this function, you will need to update the invocation shim
        // to match if you intend to test the function with 'amplify mock function'
#pragma warning disable CS1998
        public async Task<dynamic> LambdaHandler(LambdaEvent input, ILambdaContext context)
        {
            context.Logger.LogLine($"Received data: {Newtonsoft.Json.JsonConvert.SerializeObject(input)}");
            Console.WriteLine("Chargin in stripe (stripe.charges.create)");
            Console.WriteLine("input" + input);
            return new {
                key1 = "hello key1",
                key2 = "hello key2"
            };
        }
    }
}




// TODO: What should this do?
// Get the total price of the order
// Charge the customer