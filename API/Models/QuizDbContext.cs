using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class QuizDbContext : DbContext
    {
        public QuizDbContext(DbContextOptions<QuizDbContext> options):base(options)
        {
            
        }

        public DbSet<Questions> Questions {get; set;}
        public DbSet<Participant> Participants {get; set;}
    }
}