using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class LoaiThanhVienConfiguration : IEntityTypeConfiguration<LoaiThanhVien>
    {
        public void Configure(EntityTypeBuilder<LoaiThanhVien> builder)
        {
            builder.ToTable("LoaiThanhVien");
            builder.HasKey(x => x.Id);

            builder.HasMany(rf => rf.ThanhViens)
             .WithOne(r => r.LoaiThanhVien)
             .HasForeignKey(rf => rf.LoaiThanhVienId);
        }
    }
}