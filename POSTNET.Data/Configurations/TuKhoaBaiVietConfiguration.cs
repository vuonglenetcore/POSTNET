using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.Configurations
{
    public class TuKhoaBaiVietConfiguration: IEntityTypeConfiguration<TuKhoaBaiViet>
    {
        public void Configure(EntityTypeBuilder<TuKhoaBaiViet> builder)
        {
            builder.ToTable("TuKhoaBaiViet");
            builder.HasKey(x => x.Id);

            builder.HasOne(rf => rf.BaiViet)
                .WithMany(r => r.TuKhoaBaiViets)
                .HasForeignKey(rf => rf.BaiVietId);
        }
    }
}
