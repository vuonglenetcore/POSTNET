using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class ThanhVienConfiguration : IEntityTypeConfiguration<ThanhVien>
    {
        public void Configure(EntityTypeBuilder<ThanhVien> builder)
        {
            builder.ToTable("ThanhVien");
            builder.HasKey(x => x.Id);

            builder.HasOne(rf => rf.User)
             .WithOne(r => r.ThanhVien).
             HasForeignKey<ThanhVien>(c => c.Id);
            builder.HasOne(rf => rf.LoaiThanhVien)
                .WithMany(r => r.ThanhViens)
                .HasForeignKey(rf => rf.LoaiThanhVienId);
        }
    }
}
