using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class NhanVienConfiguration : IEntityTypeConfiguration<NhanVien>
    {
        public void Configure(EntityTypeBuilder<NhanVien> builder)
        {
            builder.ToTable("NhanVien");
            builder.HasKey(x => x.Id);

            builder.HasOne(rf => rf.User)
             .WithOne(r => r.NhanVien).
             HasForeignKey<NhanVien>(c => c.Id);
            builder.HasOne(rf => rf.LoaiNhanVien)
                .WithMany(r => r.NhanViens)
                .HasForeignKey(rf => rf.LoaiNhanVienId);
        }
    }
}
