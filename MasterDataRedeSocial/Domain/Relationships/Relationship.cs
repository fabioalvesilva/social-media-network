using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.RelationshipRequests;

namespace DDDSample1.Domain.Relationships
{
    public class Relationship : Entity<RelationshipId>, IAggregateRoot
    {

        [ForeignKey("User")]
        public UserId UserFrom { get; private set; }

        [ForeignKey("User")]
        public UserId UserTo { get; private set; }

        [ForeignKey("User")]
        public DateTime TimeStamp { get; private set; }

        public ISet<Tag> ListTag { get; set; }

        public ConnectionStrength ConnectionStrength { get; private set; }

        public RelationshipStrength RelationshipStrength { get; private set; }

        public bool Active { get; private set; }

        [ForeignKey("RelationshipRequest")]
        public RelationshipRequestId RelationshipRequestId { get; private set; }

        private Relationship()
        {
            this.TimeStamp = DateTime.Now;
            this.ListTag = new HashSet<Tag>();
            this.Active = true;
        }

        public Relationship(UserId userFrom, UserId userTo, ISet<Tag> listTag,
         ConnectionStrength connectionStrength, RelationshipStrength relationshipStrength,
         RelationshipRequestId relationshipRequestId)
        {
            /*if (listTag == null || listTag.Count == 0)
            {
                throw new BusinessRuleValidationException("Every relationship requires at least one tag.");
            }*/

            if (userFrom.Equals(userTo))
            {
                throw new BusinessRuleValidationException(
                    "It is not possible to have a relationshipo with yourself :'(.");
            }

            this.Id = new RelationshipId(Guid.NewGuid());
            this.UserFrom = userFrom;
            this.UserTo = userTo;
            this.ListTag = new HashSet<Tag>(listTag);
            this.TimeStamp = DateTime.Now;
            this.ConnectionStrength = connectionStrength;
            this.RelationshipStrength = new RelationshipStrength(0);
            this.RelationshipRequestId = relationshipRequestId;
            this.Active = true;
        }

        public void ChangeConnectionStrength(ConnectionStrength connectionStrength)
        {
            if (!this.Active)
            {
                throw new BusinessRuleValidationException(
                    "It is not possible to change the Connection Strength to an inactive tag.");
            }

            this.ConnectionStrength = connectionStrength;
        }

        public void ChangeListTag(ISet<Tag> listTag)
        {
            if (!this.Active)
            {
                throw new BusinessRuleValidationException(
                    "It is not possible to change the tag to an inactive tag.");
            }

            this.ListTag = new HashSet<Tag>(listTag);
        }

        public void ChangeRelationshipStrength(RelationshipStrength relationshipStrength)
        {
            if (!this.Active)
            {
                throw new BusinessRuleValidationException(
                    "It is not possible to change the Relationship Strength to an inactive tag.");
            }
            this.RelationshipStrength = relationshipStrength;
        }

        /*public void AddRelationShipRequest(RelationshipRequestId relationshipRequest)
         {
             this.RelationshipRequest = relationshipRequest;
         }*/

        public void MarkAsInative()
        {
            this.Active = false;
        }
    }
}