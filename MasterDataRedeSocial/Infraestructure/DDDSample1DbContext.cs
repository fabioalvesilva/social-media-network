using Microsoft.EntityFrameworkCore;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Introductions;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Groups;
using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Infrastructure.Relationships;
using DDDSample1.Infraestructure.Users;
using DDDSample1.Infraestructure.Introductions;
using DDDSample1.Infraestructure.Groups;

namespace DDDSample1.Infrastructure
{
    public class DDDSample1DbContext : DbContext
    {

        public DbSet<Relationship> Relationships { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Group> Groups { get; set; }

        public DbSet<IntroductionRequest> IntroductionRequests { get; set; }

        public DbSet<Introduction> Introduction { get; set; }

        public DbSet<RelationshipRequest> RelationshipRequests { get; set; }

        public DDDSample1DbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserEntityTypeConfiguration());

            modelBuilder.ApplyConfiguration(new GroupEntityTypeConfiguration());

            modelBuilder.ApplyConfiguration(new IntroductionRequestEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new IntroductionEntityTypeConfiguration());

            modelBuilder.ApplyConfiguration(new RelationshipRequestEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new RelationshipEntityTypeConfiguration());
        }
    }
}