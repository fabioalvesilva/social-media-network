using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MasterDataRedeSocial.Migrations
{
    public partial class finalbd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Introduction",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    IntroductionRequestId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserFrom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserMiddle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PresentationMessage_Text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IntrodutionMessage_Text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeStamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IntroductionState_State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IntroductionState_timestamp = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Introduction", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IntroductionRequests",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserFrom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserMiddle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RequestMesssage_Text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PresentationMessage_Text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IntroductionRequestState_State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IntroductionRequestState_timestamp = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IntroductionRequests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RelationshipRequests",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserFrom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RelationshipRequestState_activeState = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RelationshipRequestState_timestamp = table.Column<DateTime>(type: "datetime2", nullable: true),
                    TimeStamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelationshipRequests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Relationships",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserFrom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeStamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ConnectionStrength_Value = table.Column<int>(type: "int", nullable: true),
                    RelationshipStrength_Value = table.Column<int>(type: "int", nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    RelationshipRequestId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relationships", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email_email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password_password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Birthdate_date = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber_number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Linkedin_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Facebook_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    Mood_activeMood = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mood_timestamp = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Avatar_activeAvatar = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Groups_TagsList",
                columns: table => new
                {
                    GroupId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups_TagsList", x => new { x.GroupId, x.Id });
                    table.ForeignKey(
                        name: "FK_Groups_TagsList_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserId",
                columns: table => new
                {
                    GroupId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserId", x => new { x.GroupId, x.Id });
                    table.ForeignKey(
                        name: "FK_UserId_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Relationships_ListTag",
                columns: table => new
                {
                    RelationshipId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relationships_ListTag", x => new { x.RelationshipId, x.Id });
                    table.ForeignKey(
                        name: "FK_Relationships_ListTag_Relationships_RelationshipId",
                        column: x => x.RelationshipId,
                        principalTable: "Relationships",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Users_TagsList",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users_TagsList", x => new { x.UserId, x.Id });
                    table.ForeignKey(
                        name: "FK_Users_TagsList_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Groups_TagsList");

            migrationBuilder.DropTable(
                name: "Introduction");

            migrationBuilder.DropTable(
                name: "IntroductionRequests");

            migrationBuilder.DropTable(
                name: "RelationshipRequests");

            migrationBuilder.DropTable(
                name: "Relationships_ListTag");

            migrationBuilder.DropTable(
                name: "UserId");

            migrationBuilder.DropTable(
                name: "Users_TagsList");

            migrationBuilder.DropTable(
                name: "Relationships");

            migrationBuilder.DropTable(
                name: "Groups");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
