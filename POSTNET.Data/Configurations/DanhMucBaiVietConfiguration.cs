using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class DanhMucBaiVietConfiguration : IEntityTypeConfiguration<DanhMucBaiViet>
    {
        public void Configure(EntityTypeBuilder<DanhMucBaiViet> builder)
        {
            builder.ToTable("DanhMucBaiViet");
            builder.HasKey(x => x.Id);
            builder.HasMany(rf => rf.BaiViets)
                .WithOne(r => r.DanhMucBaiViet)
                .HasForeignKey(rf => rf.DanhMucBaiVietId);
        }
    }
}
