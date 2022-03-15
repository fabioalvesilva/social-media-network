using System;

namespace DDDSample1.Domain.Introductions
{
    public class IntroductionCardDTO
    {
        public Guid Id { get; set; }

        public String IntroductionRequestId { get; set; }

        public String userFromId { get; set; }

        public String userFromName { get; set; }

        public String userMiddleId { get; private set; }

        public String userMiddleName { get; private set; }

        public String userToId { get; set; }

        public String userToName { get; set; }

        public String PresentationMessage { get; private set; }

        public String IntroductionMessage { get; private set; }

        public String IntroductionState { get; private set; }

        public bool Active { get; private set; }

        public IntroductionCardDTO(Guid id, String introductionRequestId,
        String userFromId, String userFromName, String userMiddleId, String userMiddleName,
        String userToId, String userToName, String presentationMessage, String introductionMessage,
        String introductionState, bool active)
        {
            this.Id = id;
            this.IntroductionRequestId = introductionRequestId;
            this.userFromId = userFromId;
            this.userFromName = userFromName;
            this.userMiddleId = userMiddleId;
            this.userMiddleName = userMiddleName;
            this.userToId = userToId;
            this.userToName = userToName;
            this.PresentationMessage = presentationMessage;
            this.IntroductionMessage = introductionMessage;
            this.IntroductionState = introductionState;
            this.Active = active;
        }
    }
}
