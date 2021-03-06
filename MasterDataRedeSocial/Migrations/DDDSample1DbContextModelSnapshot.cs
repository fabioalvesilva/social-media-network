// <auto-generated />
using System;
using DDDSample1.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MasterDataRedeSocial.Migrations
{
    [DbContext(typeof(DDDSample1DbContext))]
    partial class DDDSample1DbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DDDSample1.Domain.Groups.Group", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("DDDSample1.Domain.IntroductionRequests.IntroductionRequest", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("UserFrom")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserMiddle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserTo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("IntroductionRequests");
                });

            modelBuilder.Entity("DDDSample1.Domain.Introductions.Introduction", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("IntroductionRequestId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("TimeStamp")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserFrom")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserMiddle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserTo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Introduction");
                });

            modelBuilder.Entity("DDDSample1.Domain.RelationshipRequests.RelationshipRequest", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<DateTime>("TimeStamp")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserFrom")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserTo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("RelationshipRequests");
                });

            modelBuilder.Entity("DDDSample1.Domain.Relationships.Relationship", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("RelationshipRequestId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("TimeStamp")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserFrom")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserTo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Relationships");
                });

            modelBuilder.Entity("DDDSample1.Domain.Users.domain.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DDDSample1.Domain.Groups.Group", b =>
                {
                    b.OwnsMany("DDDSample1.Domain.Shared.Tag", "TagsList", b1 =>
                        {
                            b1.Property<string>("GroupId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int")
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.Property<string>("Text")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("GroupId", "Id");

                            b1.ToTable("Groups_TagsList");

                            b1.WithOwner()
                                .HasForeignKey("GroupId");
                        });

                    b.OwnsMany("DDDSample1.Domain.Users.domain.UserId", "UserIdList", b1 =>
                        {
                            b1.Property<string>("GroupId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int")
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.Property<string>("Value")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("GroupId", "Id");

                            b1.ToTable("UserId");

                            b1.WithOwner()
                                .HasForeignKey("GroupId");
                        });

                    b.Navigation("TagsList");

                    b.Navigation("UserIdList");
                });

            modelBuilder.Entity("DDDSample1.Domain.IntroductionRequests.IntroductionRequest", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.IntroductionRequests.IntroductionRequestState", "IntroductionRequestState", b1 =>
                        {
                            b1.Property<string>("IntroductionRequestId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("State")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<DateTime>("timestamp")
                                .HasColumnType("datetime2");

                            b1.HasKey("IntroductionRequestId");

                            b1.ToTable("IntroductionRequests");

                            b1.WithOwner()
                                .HasForeignKey("IntroductionRequestId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Message", "PresentationMessage", b1 =>
                        {
                            b1.Property<string>("IntroductionRequestId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("Text")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("IntroductionRequestId");

                            b1.ToTable("IntroductionRequests");

                            b1.WithOwner()
                                .HasForeignKey("IntroductionRequestId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Message", "RequestMesssage", b1 =>
                        {
                            b1.Property<string>("IntroductionRequestId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("Text")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("IntroductionRequestId");

                            b1.ToTable("IntroductionRequests");

                            b1.WithOwner()
                                .HasForeignKey("IntroductionRequestId");
                        });

                    b.Navigation("IntroductionRequestState");

                    b.Navigation("PresentationMessage");

                    b.Navigation("RequestMesssage");
                });

            modelBuilder.Entity("DDDSample1.Domain.Introductions.Introduction", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.IntroductionRequests.IntroductionState", "IntroductionState", b1 =>
                        {
                            b1.Property<string>("IntroductionId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("State")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<DateTime>("timestamp")
                                .HasColumnType("datetime2");

                            b1.HasKey("IntroductionId");

                            b1.ToTable("Introduction");

                            b1.WithOwner()
                                .HasForeignKey("IntroductionId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Message", "IntrodutionMessage", b1 =>
                        {
                            b1.Property<string>("IntroductionId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("Text")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("IntroductionId");

                            b1.ToTable("Introduction");

                            b1.WithOwner()
                                .HasForeignKey("IntroductionId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Message", "PresentationMessage", b1 =>
                        {
                            b1.Property<string>("IntroductionId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("Text")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("IntroductionId");

                            b1.ToTable("Introduction");

                            b1.WithOwner()
                                .HasForeignKey("IntroductionId");
                        });

                    b.Navigation("IntroductionState");

                    b.Navigation("IntrodutionMessage");

                    b.Navigation("PresentationMessage");
                });

            modelBuilder.Entity("DDDSample1.Domain.RelationshipRequests.RelationshipRequest", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.RelationshipRequests.RelationshipRequestState", "RelationshipRequestState", b1 =>
                        {
                            b1.Property<string>("RelationshipRequestId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("activeState")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<DateTime>("timestamp")
                                .HasColumnType("datetime2");

                            b1.HasKey("RelationshipRequestId");

                            b1.ToTable("RelationshipRequests");

                            b1.WithOwner()
                                .HasForeignKey("RelationshipRequestId");
                        });

                    b.Navigation("RelationshipRequestState");
                });

            modelBuilder.Entity("DDDSample1.Domain.Relationships.Relationship", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.Relationships.ConnectionStrength", "ConnectionStrength", b1 =>
                        {
                            b1.Property<string>("RelationshipId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("Value")
                                .HasColumnType("int");

                            b1.HasKey("RelationshipId");

                            b1.ToTable("Relationships");

                            b1.WithOwner()
                                .HasForeignKey("RelationshipId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Relationships.RelationshipStrength", "RelationshipStrength", b1 =>
                        {
                            b1.Property<string>("RelationshipId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("Value")
                                .HasColumnType("int");

                            b1.HasKey("RelationshipId");

                            b1.ToTable("Relationships");

                            b1.WithOwner()
                                .HasForeignKey("RelationshipId");
                        });

                    b.OwnsMany("DDDSample1.Domain.Shared.Tag", "ListTag", b1 =>
                        {
                            b1.Property<string>("RelationshipId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int")
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.Property<string>("Text")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("RelationshipId", "Id");

                            b1.ToTable("Relationships_ListTag");

                            b1.WithOwner()
                                .HasForeignKey("RelationshipId");
                        });

                    b.Navigation("ConnectionStrength");

                    b.Navigation("ListTag");

                    b.Navigation("RelationshipStrength");
                });

            modelBuilder.Entity("DDDSample1.Domain.Users.domain.User", b =>
                {
                    b.OwnsMany("DDDSample1.Domain.Shared.Tag", "TagsList", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int")
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.Property<string>("Text")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId", "Id");

                            b1.ToTable("Users_TagsList");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Avatar", "Avatar", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("activeAvatar")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Birthdate", "Birthdate", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("date")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Email", "Email", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("email")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Facebook", "Facebook", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("url")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Linkedin", "Linkedin", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("url")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Mood", "Mood", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("activeMood")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<DateTime>("timestamp")
                                .HasColumnType("datetime2");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Name", "Name", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("name")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.Password", "Password", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("password")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Shared.ValueObjects.PhoneNumber", "PhoneNumber", b1 =>
                        {
                            b1.Property<string>("UserId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("number")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("UserId");

                            b1.ToTable("Users");

                            b1.WithOwner()
                                .HasForeignKey("UserId");
                        });

                    b.Navigation("Avatar");

                    b.Navigation("Birthdate");

                    b.Navigation("Email");

                    b.Navigation("Facebook");

                    b.Navigation("Linkedin");

                    b.Navigation("Mood");

                    b.Navigation("Name");

                    b.Navigation("Password");

                    b.Navigation("PhoneNumber");

                    b.Navigation("TagsList");
                });
#pragma warning restore 612, 618
        }
    }
}
