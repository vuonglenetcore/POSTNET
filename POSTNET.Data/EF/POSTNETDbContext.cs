using Microsoft.EntityFrameworkCore;
using POSTNET.Data.Configurations;
using POSTNET.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Data.EF
{
    public class POSTNETDbContext : DbContext
    {
        public POSTNETDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new DanhMucBaiVietConfiguration());
            modelBuilder.ApplyConfiguration(new BaiVietConfiguration());
            modelBuilder.ApplyConfiguration(new BinhLuanConfiguration());
            modelBuilder.ApplyConfiguration(new TuKhoaBaiVietConfiguration());

            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new LoaiThanhVienConfiguration());
            modelBuilder.ApplyConfiguration(new LoaiNhanVienConfiguration());
            modelBuilder.ApplyConfiguration(new ThanhVienConfiguration());
            modelBuilder.ApplyConfiguration(new NhanVienConfiguration());

        }

        public DbSet<DanhMucBaiViet> DanhMucBaiViets { get; set; }
        public DbSet<BaiViet> BaiViets { get; set; }
        public DbSet<BinhLuan> BinhLuans { get; set; }
        public DbSet<TuKhoaBaiViet> TuKhoaBaiViets { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<LoaiNhanVien> LoaiNhanViens { get; set; }
        public DbSet<LoaiThanhVien> LoaiThanhViens { get; set; }
        public DbSet<ThanhVien> ThanhViens { get; set; }
        public DbSet<NhanVien> NhanViens { get; set; }
    }
}
