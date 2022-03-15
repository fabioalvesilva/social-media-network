using DDDSample1.Domain.Users.domain;
using DDDSample1.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infraestructure.Users
{
    internal class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            // cf. https://www.entityframeworktutorial.net/efcore/fluent-api-in-entity-framework-core.aspx


            //builder.Property(b => b.Id).ValueGeneratedOnAddOrUpdate();

            builder.HasKey(b => b.Id);
            builder.OwnsOne(b => b.Name).Property(b => b.name).IsRequired();
            builder.OwnsOne(b => b.Email).Property(b => b.email);
            builder.OwnsOne(b => b.Password).Property(b => b.password);
            builder.OwnsOne(b => b.Birthdate).Property(b => b.date);
            builder.OwnsOne(b => b.PhoneNumber).Property(b => b.number);
            builder.OwnsOne(b => b.Linkedin).Property(b => b.url);
            builder.OwnsOne(b => b.Facebook).Property(b => b.url);
            builder.OwnsOne(b => b.Mood).Property<string>(b => b.activeMood);
            builder.OwnsOne(b => b.Mood).Property(b => b.timestamp);
            builder.OwnsMany(b => b.TagsList).Property(b => b.Text);
            builder.OwnsOne(b => b.Avatar).Property<string>(b => b.activeAvatar);
            //...Additional validations, constraints and code...
            //...

            /*
            ALTER TABLE Users
ADD Avatar_activeAvatar bit;
            */

        }
    }
}
