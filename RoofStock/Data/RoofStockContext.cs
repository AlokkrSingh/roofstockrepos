using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RoofStock.Models;

namespace RoofStock.Data
{
    public class RoofStockContext : DbContext
    {
        public RoofStockContext (DbContextOptions<RoofStockContext> options)
            : base(options)
        {
        }

        public DbSet<RoofPost> RoofPosts { get; set; }
    }
}
