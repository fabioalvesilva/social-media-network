// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    APIRelationship: 'https://localhost:5001/mdrs/relationships/',
    APIUser: 'https://localhost:5001/mdrs/users/',
    APIRelationshipRequest: 'https://localhost:5001/mdrs/RelationshipRequests/',
    APIAuth: 'https://localhost:5001/mdrs/auth/',
    APIIntrudoctionRequest: 'https://localhost:5001/mdrs/IntroductionRequests/',
    APIIntrudoction: 'https://localhost:5001/mdrs/Introductions/',
    APIPlanning: 'https://localhost:5001/mdrs/Planeamento/',
    APIGroups: 'https://localhost:5001/mdrs/Groups/',
    APITags: 'https://localhost:5001/mdrs/Tags/',

  // MasterDataPost
    APIPost: 'http://localhost:3000/api/post/',
    APIComment: 'http://localhost:3000/api/comments/',
    APIReaction: 'http://localhost:3000/api/reaction/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
