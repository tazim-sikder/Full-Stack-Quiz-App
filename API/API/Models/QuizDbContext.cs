﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace API.Models
{
    public class QuizDbContext : DbContext
    {
        public QuizDbContext(DbContextOptions<QuizDbContext> options) : base(options)
        {
        }
        public DbSet<Questions> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }
    }
}
