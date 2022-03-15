using DDDSample1.Domain.IntroductionRequests;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infraestructure.Users
{
    internal class IntroductionRequestEntityTypeConfiguration : IEntityTypeConfiguration<IntroductionRequest>
    {
        public void Configure(EntityTypeBuilder<IntroductionRequest> builder)
        {
            // cf. https://www.entityframeworktutorial.net/efcore/fluent-api-in-entity-framework-core.aspx


            //builder.Property(b => b.Id).ValueGeneratedOnAddOrUpdate();

            builder.HasKey(b => b.Id);
            builder.OwnsOne(b => b.RequestMesssage).Property(b => b.Text);
            builder.OwnsOne(b => b.PresentationMessage).Property(b => b.Text);
            builder.OwnsOne(b => b.IntroductionRequestState).Property<string>(b => b.State);
            //builder.Property(b => b.IntroductionRequestState).HasConversion(v => v.ToString(),
            //v => (IntroductionRequestState)System.Enum.Parse(typeof(IntroductionRequestState), v)); ;
            //...Additional validations, constraints and code...
            //...
        }
    }
}
