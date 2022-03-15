//Function to generate random string  
function randomString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
/////////////////////////////////////////////URLS /////////////////////////////////
//const UrlHomePage =https://lapr5g74spa.web.app/
const UrlHomePage = "http://localhost:4200/";
const UrlLogin = UrlHomePage;
const UrlSignin =  UrlHomePage + "sigin";
const URLUserLoggedID = "";
const URLPrivatePage = UrlHomePage + "account/" + URLUserLoggedID + "/";
const UrlSuggestedFriends = URLPrivatePage + "suggestedfriends";
const UrlAccountDetails = URLPrivatePage + "account-details";
const UrlRelationships =  URLPrivatePage + "relationships";
const UrlRelationshipRequests =  URLPrivatePage + "relationships-requests";
const UrlIntroductionRequests =  URLPrivatePage + "relationships";
const UrlIntroductions =  URLPrivatePage + "introduction";
const UrlUsers =  URLPrivatePage + "user";
const UrlMap =  URLPrivatePage + "map"

/////////////////////////////////////Testing DATA /////////////////////////////////
//Constants user A  
const UserAemail = randomString() + "@email.com" ;
const UserApwd = randomString();
const UserAName = randomString() + " " + randomString();
const UserAName2 = randomString() + " " + randomString();
const UserAPhone = "904-489-3602";
const UserAPhone2 = "254-540-1632";
const UserABirthDate = "2000-12-12";
const UserABirthDate2 = "2001-01-01";
const UserALinkedin = "https://www.linkedin.com/" + randomString();
const UserALinkedin2 = "https://www.linkedin.com/" + randomString();
const UserAFacebook = "https://www.facebook.com/" + randomString();
const UserAFacebook2 = "https://www.facebook.com/" + randomString();
const UserAMood = 'HOPEFUL';
const UserAMood2= 'JOYFUL';
const UserATag = randomString();

//Constants user B
const UserBemail = randomString() + "@email.com" ;
const UserBpwd = randomString();
const UserBName = randomString() + " " + randomString();
const UserBPhone = "904-489-3602";
const UserBBirthDate = "2000-12-12";
const UserBLinkedin = "https://www.linkedin.com/" + randomString();
const UserBFacebook = "https://www.facebook.com/" + randomString();
const UserBMood = 'HOPEFUL';
const UserBMood2= 'DISTRESSED';
const UserBTag = randomString();


//Constants user C
const UserCemail = randomString() + "@email.com" ;
const UserCpwd = randomString();
const UserCName = randomString() + " " + randomString();
const UserCPhone = "904-489-3602";
const UserCBirthDate = "2000-12-12";
const UserCLinkedin = "https://www.linkedin.com/" + randomString();
const UserCFacebook = "https://www.facebook.com/" + randomString();
const UserCMood = 'HOPEFUL';
const UserCMood2= 'DISTRESSED';
const UserCTag = randomString();


/////////////////////////////Components///////////////////////
//Login 
var cp_ULog_txt_Email= "#email";
var cp_ULog_txt_Password = "#password";
var cp_ULog_btn_Login = ".w-100";
var cp_ULog_btn_Register = ".link-danger"

//Register User
  //Textboxs
  var cp_UReg_txt_Name = "#userName";
  var cp_UReg_txt_Email = "#email";
  var cp_UReg_txt_Birthdate = "#birthdate";
  var cp_UReg_txt_Password = "#password";
  var cp_UReg_txt_Linkedin = "#linkedin";
  var cp_UReg_txt_Facebook = "#facebook";
  var cp_UReg_txt_PhoneNumber = "#phoneNumber";
  var cp_UReg_txt_Tag = ":nth-child(8) > .col > .form-control";
  //Buttons
  var cp_UReg_btn_addTag = "#addtag";
  var cp_UReg_btn_Signup = ":nth-child(10) > .btn";
  var cp_UReg_btn_Login = ".link-info";
  //dropdown menu
  var cp_UReg_dd_mood = "#mood";

//SideBar

  var cp_SB_btn_Account = ":nth-child(2) > a > span";
  var cp_SB_btn_MyRelationships = ":nth-child(3) > a > span";
  var cp_SB_btn_RelationshipsRequets = ":nth-child(4) > a > span";
  var cp_SB_btn_IntroductionRequests = ":nth-child(5) > a > span";
  var cp_SB_btn_Introductions = ":nth-child(6) > a > span";
  var cp_SB_btn_Users = ":nth-child(7) > a > span";
  var cp_SB_btn_Map = ":nth-child(8) > a > span";

//Sugested Friends
  var cp_SF_lbl_FirstCardName = ":nth-child(2) > .row > .col-md-8 > .card-body > .card-title";
  var cp_SF_btn_FirstCardSendRequest = ":nth-child(2) > .row > .col-md-8 > p > .btn";

//Edit Profile
var cp_UEdit_txt_Name = "#name";
var cp_UEdit_txt_Email = "#email";
var cp_UEdit_txt_Birthdate = "#birthdate";
var cp_UEdit_txt_Password = "#password";
var cp_UEdit_txt_Linkedin = "#linkedin";
var cp_UEdit_txt_Facebook = "#facebook";
var cp_UEdit_txt_PhoneNumber = "#phoneNumber";
//var cp_UEdit_txt_Tag = "#:nth-child(8) > .col > .form-control";

var cp_UEdit_btn_EditProfile = ":nth-child(5) > .col > .btn";

//Edit Mood
var cp_UEdit_dp_Moods = "#mood"
var cp_UEdit_btn_ChangeMood  = ":nth-child(2) > .btn"

//Send Request to Suggested users
var cp_USUs_lbl_SuggestedFriends = "h2";
var cp_USUs_lbl_UserName = ".card-title";
var cp_USUs_btn_SendRequest = "p > .btn";

//Accept RelationshipRequest
var cp_USARr_lbl_Title = "Relationships Requests";
var cp_USUs_lbl_UserName = ".card-title";
var cp_USUs_btn_Accept= ".btn-primary";
var cp_USUs_btn_Reject= ".btn-secundary";

//Search Exitent User by mail 

var cp_SUBemail_btn_Search = ".d-flex > .btn";
var cp_SUBemail_txt_Email = "#userEmail";


var cp_SFriedSR_btn_SendRequest = ":nth-child(8) > .btn";


//**********************Testing Functions  ********************** */


//Bypass Launched Exception 
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
it('fails to visit website 1', function () {
  cy.visit('/')
})



//Check Homepage 
describe('Check Homepage', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Please Login')
   //cy.contains('sandbox app is running!')
  })
})

//**RegIster Users */

    //Register New UserA
    describe("Register UserA", () => {
      it("should visit login page", () => {
        cy.visit(UrlSignin);
        cy.get(cp_UReg_txt_Name).type(UserAName);
        cy.get(cp_UReg_txt_Email).type(UserAemail);
        cy.get(cp_UReg_txt_Password).type(UserApwd);
        cy.get(cp_UReg_txt_PhoneNumber).type(UserAPhone);
        cy.get(cp_UReg_txt_Birthdate).type(UserABirthDate);
        cy.get(cp_UReg_txt_Linkedin).type(UserALinkedin);
        cy.get(cp_UReg_txt_Facebook).type(UserAFacebook);
        cy.get(cp_UReg_dd_mood).select(UserAMood);
        cy.get(cp_UReg_txt_Tag).type(UserATag);
        cy.get(cp_UReg_btn_addTag).click();
        cy.get('.p-1').should('contain', 'Tag adicionada com sucesso');
        cy.get(cp_UReg_btn_Signup).click();
        cy.get('.alert').should('contain', 'Welcome');

      });
    });
    //Register New UserB
    describe("Register UserB", () => {
      it("should visit login page", () => {
        cy.visit(UrlSignin);
        cy.get(cp_UReg_txt_Name).type(UserBName);
        cy.get(cp_UReg_txt_Email).type(UserBemail);
        cy.get(cp_UReg_txt_Password).type(UserBpwd);
        cy.get(cp_UReg_txt_PhoneNumber).type(UserBPhone);
        cy.get(cp_UReg_txt_Birthdate).type(UserBBirthDate);
        cy.get(cp_UReg_txt_Linkedin).type(UserBLinkedin);
        cy.get(cp_UReg_txt_Facebook).type(UserBFacebook);
        cy.get(cp_UReg_dd_mood).select(UserBMood);
        cy.get(cp_UReg_txt_Tag).type(UserBTag);
        cy.get(cp_UReg_btn_addTag).click();
        cy.get('.p-1').should('contain', 'Tag adicionada com sucesso');

        cy.get(cp_UReg_txt_Tag).type(UserATag);
        cy.get(cp_UReg_btn_addTag).click();
        cy.get('.p-1').should('contain', 'Tag adicionada com sucesso');

        cy.get(cp_UReg_btn_Signup).click();
        cy.get('.alert').should('contain', 'Welcome');

      });
    });
    //Register New UserC
    describe("Register UserC", () => {
      it("should visit login page", () => {
        cy.visit(UrlSignin);
        cy.get(cp_UReg_txt_Name).type(UserCName);
        cy.get(cp_UReg_txt_Email).type(UserCemail);
        cy.get(cp_UReg_txt_Password).type(UserCpwd);
        cy.get(cp_UReg_txt_PhoneNumber).type(UserCPhone);
        cy.get(cp_UReg_txt_Birthdate).type(UserCBirthDate);
        cy.get(cp_UReg_txt_Linkedin).type(UserCLinkedin);
        cy.get(cp_UReg_txt_Facebook).type(UserCFacebook);
        cy.get(cp_UReg_dd_mood).select(UserCMood);
        cy.get(cp_UReg_txt_Tag).type(UserCTag);
        cy.get(cp_UReg_btn_addTag).click();
        cy.get('.p-1').should('contain', 'Tag adicionada com sucesso');
        cy.get(cp_UReg_btn_Signup).click();
        cy.get('.alert').should('contain', 'Welcome');

      });
    });
//**Check Login In Each user */
    describe("Login with Registered userA", () => {
      it("should visit login page", () => {
        cy.visit("/login");

        cy.get(cp_ULog_txt_Email).type(UserAemail);
        cy.get(cp_ULog_txt_Password).type(UserApwd);
        cy.get(cp_ULog_btn_Login).click();
        cy.get('strong').should('contain', UserAName);

      });
    });

    describe("Logout with Registered UserA", () => {
      it("should visit home page", () => {
        cy.get('strong').should('contain', UserAName);
        cy.get('.sidebar-footer > a').click();
        cy.contains('Please Login')

      });
    });

    describe("Login with Registered UserB", () => {
      it("should visit login page", () => {
        cy.visit("/login");
  
        cy.get(cp_ULog_txt_Email).type(UserBemail);
        cy.get(cp_ULog_txt_Password).type(UserBpwd);
        cy.get(cp_ULog_btn_Login).click();
        cy.get('strong').should('contain', UserBName);
  
      });
    });
  
    describe("Logout with Registered UserB", () => {
      it("should visit home page", () => {
        cy.get('strong').should('contain', UserBName);
        cy.get('.sidebar-footer > a').click();
        cy.contains('Please Login')
  
      });
    });

    describe("Login with Registered UserC", () => {
      it("should visit login page", () => {
        cy.visit("/login");
  
        cy.get(cp_ULog_txt_Email).type(UserCemail);
        cy.get(cp_ULog_txt_Password).type(UserCpwd);
        cy.get(cp_ULog_btn_Login).click();
        cy.get('strong').should('contain', UserCName);
  
      });
    });
  
    describe("Logout with Registered UserC", () => {
      it("should visit home page", () => {
        cy.get('strong').should('contain', UserCName);
        cy.get('.sidebar-footer > a').click();
        cy.contains('Please Login')
  
      });
    });


//** Update User Mood */

    describe("Login with Registered userA", () => {
      it("should visit login page", () => {
        cy.visit("/login");

        cy.get(cp_ULog_txt_Email).type(UserAemail);
        cy.get(cp_ULog_txt_Password).type(UserApwd);
        cy.get(cp_ULog_btn_Login).click();
        cy.get('strong').should('contain', UserAName);

      });
    });
    describe("Update UserA mood", () => {
      it("should visit login page", () => {

        cy.get('strong').should('contain', UserAName);

        //Click in Account sidebar 
        cy.get(cp_SB_btn_Account).click();
        cy.contains('Personal Details');
        
        //wait data to load
        cy.wait(5000);
        //Click Change Mood
        cy.get(cp_UEdit_dp_Moods).select(UserAMood2);
        cy.get(cp_UEdit_btn_ChangeMood).click();

        //Check mood alert
        cy.get('.alert').should('contain', 'Your Mood status has been changed to ' + UserAMood2);

      });
    });
    describe("Logout with Registered UserA", () => {
      it("should visit home page", () => {
        cy.get('strong').should('contain', UserAName);
        cy.get('.sidebar-footer > a').click();
        cy.contains('Please Login')

      });
    });

/** Update UserA profile  */
    describe("Login with Registered userA", () => {
      it("should visit login page", () => {
        cy.visit("/login");

        cy.get(cp_ULog_txt_Email).type(UserAemail);
        cy.get(cp_ULog_txt_Password).type(UserApwd);
        cy.get(cp_ULog_btn_Login).click();
        cy.get('strong').should('contain', UserAName);

      });
    });
    describe("Update UserA Profile", () => {
      it("should change UserA data", () => {

        //Click in Account sidebar 
        cy.get(cp_SB_btn_Account).click();
        cy.contains('Personal Details');
        
        //Edit Profile Name 
        cy.get(cp_UEdit_txt_Name).clear().type(UserAName2);
        //Edit Phone Number
        cy.get(cp_UEdit_txt_PhoneNumber).clear().type(UserAPhone2);
        //Edit BirthDate
        cy.get(cp_UEdit_txt_Birthdate).clear().type(UserABirthDate2);
        //Edit LinkedIn 
        cy.get(cp_UEdit_txt_Linkedin).clear().type(UserALinkedin2);
        //Edit Facebook
        cy.get(cp_UEdit_txt_Facebook).clear().type(UserAFacebook2);


        //Click Edit Profile
        cy.get(cp_UEdit_btn_EditProfile).click();

        //Check mood alert
        cy.get('.alert').should('contain', 'Your personal information has been updated successfully.');

      });
    });
    describe("Logout with Registered UserA", () => {
      it("should visit home page", () => {
        cy.get('strong').should('contain', UserAName);
        cy.get('.sidebar-footer > a').click();
        cy.contains('Please Login')

      });
    });

/** Update UserA profile back to origin  */
describe("Login with Registered userA", () => {
  it("should visit login page", () => {
    cy.visit("/login");

    cy.get(cp_ULog_txt_Email).type(UserAemail);
    cy.get(cp_ULog_txt_Password).type(UserApwd);
    cy.get(cp_ULog_btn_Login).click();
    //cy.get('strong').should('contain', UserAName2);

  });
});
describe("Update UserA Profile  Back to origin", () => {
  it("should change UserA data", () => {

    //Click in Account sidebar 
    cy.get(cp_SB_btn_Account).click();
    cy.contains('Personal Details');
    
    //Edit Profile Name 
    cy.get(cp_UEdit_txt_Name).clear().type(UserAName);
    //Edit Phone Number
    cy.get(cp_UEdit_txt_PhoneNumber).clear().type(UserAPhone);
    //Edit BirthDate
    cy.get(cp_UEdit_txt_Birthdate).clear().type(UserABirthDate);
    //Edit LinkedIn 
    cy.get(cp_UEdit_txt_Linkedin).clear().type(UserALinkedin);
    //Edit Facebook
    cy.get(cp_UEdit_txt_Facebook).clear().type(UserAFacebook);

    cy.wait(1000);
    //Click Edit Profile
    cy.get(cp_UEdit_btn_EditProfile).click();
    cy.wait(1000);

  });
});
describe("Logout with Registered UserA", () => {
  it("should visit home page", () => {
    cy.get('strong').should('contain', UserAName);
    cy.get('.sidebar-footer > a').click();
    cy.contains('Please Login')

  });
});



/** Suggested Users by Tags - UserA Send Request UserB */
  describe("Login with Registered userA", () => {
    it("should visit login page", () => {
      cy.visit("/login");

      cy.get(cp_ULog_txt_Email).type(UserAemail);
      cy.get(cp_ULog_txt_Password).type(UserApwd);
      cy.get(cp_ULog_btn_Login).click();
      cy.get('strong').should('contain', UserAName);
    });
  });   
  describe("Search UserB in suggested friends", () => {
    it("should send request to suggested UserB", () => {

      //Check page Title
      cy.contains('Suggested Friends');

      //Check UserB Name exitence
      cy.contains(UserBName);
      //Click send request
      cy.wait(2000);
      cy.get(cp_USUs_btn_SendRequest).click();
      cy.wait(2000);
    });
  });
  describe("Logout with Registered UserA", () => {
    it("should visit home page", () => {
      cy.get('strong').should('contain', UserAName);
      cy.get('.sidebar-footer > a').click();
      cy.contains('Please Login')

    });
  });

/** Accept Request From UserA */
  describe("Login with Registered UserB", () => {
    it("should visit login page", () => {
      cy.visit("/login");

      cy.get(cp_ULog_txt_Email).type(UserBemail);
      cy.get(cp_ULog_txt_Password).type(UserBpwd);
      cy.get(cp_ULog_btn_Login).click();
      cy.get('strong').should('contain', UserBName);

    });
  });
  describe("Accept RelationShipRequest From UserA", () => {
    it("should Accept Relationship Request", () => {

      //Check page Title
      cy.contains('Suggested Friends');
      cy.get(cp_SB_btn_RelationshipsRequets).click();
      cy.wait(2000);
      //Accept Request
      cy.contains(cp_USARr_lbl_Title);
      cy.contains(UserAName);
      cy.get(cp_USUs_btn_Accept).click();
      cy.wait(2000);
    });
  });
  describe("Logout with Registered UserB", () => {
    it("should visit home page", () => {
      cy.get('strong').should('contain', UserBName);
      cy.get('.sidebar-footer > a').click();
      cy.contains('Please Login')

    });
  });

/** Send Request to UserB from UserC */
  describe("Login with Registered UserC", () => {
    it("should visit login page", () => {
      cy.visit("/login");

      cy.get(cp_ULog_txt_Email).type(UserCemail);
      cy.get(cp_ULog_txt_Password).type(UserCpwd);
      cy.get(cp_ULog_btn_Login).click();
      cy.get('strong').should('contain', UserCName);

    });
  });
  describe("Search UserB by mail", () => {
    it("should search for UserB", () => {

      //Check page Title
      cy.contains('Suggested Friends');
      cy.get(cp_SB_btn_MyRelationships).click();
      cy.wait(1000);

      //My Relationships Page
      cy.get(cp_SUBemail_txt_Email).type(UserBemail);
      cy.get(cp_SUBemail_btn_Search).click();
      cy.get(cp_SUBemail_btn_Search).click();
      cy.wait(3000);
      //Wait Serach For User
      cy.contains(UserBName);
      cy.wait(2000);
      cy.get(cp_SFriedSR_btn_SendRequest).click();
      cy.wait(2000);
    });
  });
  describe("Logout with Registered UserC", () => {
    it("should visit home page", () => {
      cy.get('strong').should('contain', UserCName);
      cy.get('.sidebar-footer > a').click();
      cy.contains('Please Login')

    });
  });

/** Accept Relationship Request User C  */  
  describe("Login with Registered UserB", () => {
    it("should visit login page", () => {
      cy.visit("/login");

      cy.get(cp_ULog_txt_Email).type(UserBemail);
      cy.get(cp_ULog_txt_Password).type(UserBpwd);
      cy.get(cp_ULog_btn_Login).click();
      cy.get('strong').should('contain', UserBName);

    });
  });
  describe("Accept RelationShipRequest From UserC", () => {
    it("should Accept Relationship Request", () => {

      //Check page Title
      cy.contains('Suggested Friends');
      cy.get(cp_SB_btn_RelationshipsRequets).click();
      cy.wait(1000);
      //Accept Request
      cy.contains(cp_USARr_lbl_Title);
      cy.contains(UserCName);
      cy.get(cp_USUs_btn_Accept).click();
    });
  });
  describe("Logout with Registered UserB", () => {
    it("should visit home page", () => {
      cy.get('strong').should('contain', UserBName);
      cy.get('.sidebar-footer > a').click();
      cy.contains('Please Login')

    });
  });







