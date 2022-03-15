using DDDSample1.Domain.Introductions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infraestructure.Introductions
{
    internal class IntroductionEntityTypeConfiguration : IEntityTypeConfiguration<Introduction>
    {
        public void Configure(EntityTypeBuilder<Introduction> builder)
        {
            // cf. https://www.entityframeworktutorial.net/efcore/fluent-api-in-entity-framework-core.aspx


            //builder.Property(b => b.Id).ValueGeneratedOnAddOrUpdate();

            builder.HasKey(b => b.Id);
            builder.OwnsOne(b => b.IntrodutionMessage).Property(b => b.Text);
            builder.OwnsOne(b => b.PresentationMessage).Property(b => b.Text);
            builder.OwnsOne(b => b.IntroductionState).Property<string>(b => b.State);
            //...Additional validations, constraints and code...
            //...
        }
    }
}
