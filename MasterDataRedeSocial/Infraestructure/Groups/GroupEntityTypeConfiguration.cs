using DDDSample1.Domain.Groups;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infraestructure.Groups
{
    internal class GroupEntityTypeConfiguration : IEntityTypeConfiguration<Group>
    {
        public void Configure(EntityTypeBuilder<Group> builder)
        {
            builder.OwnsMany(b => b.UserIdList).Property(b => b.Value);
            builder.OwnsMany(b => b.TagsList).Property(b => b.Text);
        }
    }
}
