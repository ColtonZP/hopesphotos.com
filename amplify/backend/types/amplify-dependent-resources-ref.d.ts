export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "hopesphotoscom": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3hopesphotosbucket": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "hopesphotoscom": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}