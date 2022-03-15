using DDDSample1.Domain.RelationshipRequests;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infraestructure.Users
{
    internal class RelationshipRequestEntityTypeConfiguration : IEntityTypeConfiguration<RelationshipRequest>
    {
        public void Configure(EntityTypeBuilder<RelationshipRequest> builder)
        {
            // cf. https://www.entityframeworktutorial.net/efcore/fluent-api-in-entity-framework-core.aspx

            //builder.Property(b => b.Id).ValueGeneratedOnAddOrUpdate();

            builder.HasKey(b => b.Id);
            builder.OwnsOne(b => b.RelationshipRequestState).Property(b => b.activeState);
            builder.OwnsOne(b => b.RelationshipRequestState).Property(b => b.timestamp);

            //...Additional validations, constraints and code...
        }
    }
}
