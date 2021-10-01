using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class LoaiNhanVienConfiguration : IEntityTypeConfiguration<LoaiNhanVien>
    {
        public void Configure(EntityTypeBuilder<LoaiNhanVien> builder)
        {
            builder.ToTable("LoaiNhanVien");
            builder.HasKey(x => x.Id);

            builder.HasMany(rf => rf.NhanViens)
             .WithOne(r => r.LoaiNhanVien)
             .HasForeignKey(rf => rf.LoaiNhanVienId);
        }
    }
}