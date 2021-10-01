using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace POSTNET.Data.EF
{
    public class POSTNETDbFactoryContext : IDesignTimeDbContextFactory<POSTNETDbContext>
    {
        public POSTNETDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("POSTNETDb");

            var optionsBuilder = new DbContextOptionsBuilder<POSTNETDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new POSTNETDbContext(optionsBuilder.Options);
        }
    }
}
