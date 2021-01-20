using Microsoft.EntityFrameworkCore.Migrations;

namespace RoofStock.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RoofPosts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(nullable: false),
                    YearBuilt = table.Column<string>(nullable: false),
                    ListPrice = table.Column<decimal>(nullable: false),
                    MonthlyRent = table.Column<decimal>(nullable: false),
                    GrossYield = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoofPosts", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RoofPosts");
        }
    }
}
