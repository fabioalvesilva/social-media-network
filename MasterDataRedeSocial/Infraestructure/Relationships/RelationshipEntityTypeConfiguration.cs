using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DDDSample1.Domain.Relationships;

namespace DDDSample1.Infrastructure.Relationships
{
    internal class RelationshipEntityTypeConfiguration : IEntityTypeConfiguration<Relationship>
    {
        public void Configure(EntityTypeBuilder<Relationship> builder)
        {
            //builder.ToTable("Relationship", SchemaNames.DDDSample1);
            builder.HasKey(b => b.Id);
            builder.OwnsMany(b => b.ListTag).Property(b => b.Text);
            builder.OwnsOne(b => b.ConnectionStrength).Property(b => b.Value);
            builder.OwnsOne(b => b.RelationshipStrength).Property(b => b.Value);
            //builder.OwnsOne(b => b.UserFrom).Property(b => b.Value);
            //builder.OwnsOne(b => b.UserTo).Property(b => b.Value);

            //builder(b => b.ListTag);
        }
    }
}