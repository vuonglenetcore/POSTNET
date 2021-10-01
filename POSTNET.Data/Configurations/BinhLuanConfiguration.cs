using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class BinhLuanConfiguration: IEntityTypeConfiguration<BinhLuan>
    {
        public void Configure(EntityTypeBuilder<BinhLuan> builder)
        {
            builder.ToTable("BinhLuan");
            builder.HasKey(x => x.Id);

            builder.HasOne(rf => rf.BaiViet)
                .WithMany(r => r.BinhLuans)
                .HasForeignKey(rf => rf.BaiVietId);
        }
    }
}
