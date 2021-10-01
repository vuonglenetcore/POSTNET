using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class BaiVietConfiguration : IEntityTypeConfiguration<BaiViet>
    {
        public void Configure(EntityTypeBuilder<BaiViet> builder)
        {
            builder.ToTable("BaiViet");
            builder.HasKey(x => x.Id);

            builder.HasOne(rf => rf.DanhMucBaiViet)
                .WithMany(r => r.BaiViets)
                .HasForeignKey(rf => rf.DanhMucBaiVietId);
            builder.HasMany(rf => rf.TuKhoaBaiViets)
                .WithOne(r => r.BaiViet)
                .HasForeignKey(rf => rf.BaiVietId);
            builder.HasMany(rf => rf.BinhLuans)
               .WithOne(r => r.BaiViet)
               .HasForeignKey(rf => rf.BaiVietId);
        }
    }
}
