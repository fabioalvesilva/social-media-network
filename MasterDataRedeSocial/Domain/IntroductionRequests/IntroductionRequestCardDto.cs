using System;

namespace DDDSample1.Domain.IntroductionRequests
{
    public class IntroductionRequestCardDTO
    {
        public Guid Id { get; set; }
        public string UserFromId { get; set; }
        public string UserFromName { get; set; }
        public string UserMiddleId { get; set; }
        public string UserMiddleName { get; private set; }
        public string UserToId { get; set; }
        public string UserToName { get; set; }
        public string RequestMessage { get; private set; }
        public string PresentationMessage { get; private set; }
        public string IntroductionRequestState { get; private set; }
        public bool Active { get; private set; }

        public IntroductionRequestCardDTO(Guid id, string userFromId, string userFromName,
        string userMiddleId, string userMiddleName, string userToId, string userToName,
        string requestMessage, string presentationMessage, string introductionRequestState, bool active)
        {
            this.Id = id;
            this.UserFromId = userFromId;
            this.UserFromName = userFromName;
            this.UserMiddleId = userMiddleId;
            this.UserMiddleName = userMiddleName;
            this.UserToId = userToId;
            this.UserToName = userToName;
            this.RequestMessage = requestMessage;
            this.PresentationMessage = presentationMessage;
            this.IntroductionRequestState = introductionRequestState;
            this.Active = active;
        }
    }
}