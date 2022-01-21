using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Asteroid_API.Models;

namespace Asteroid_API.Data
{
    public class Asteroid_APIContext : DbContext
    {
        public Asteroid_APIContext (DbContextOptions<Asteroid_APIContext> options)
            : base(options)
        {
        }

        public DbSet<Asteroid_API.Models.Quotes> Quotes { get; set; }

        public DbSet<Asteroid_API.Models.FanFavorites> FanFavorites { get; set; }
    }
}
