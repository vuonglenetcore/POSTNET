using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.ValueObject.BaiViets
{
    public class BaiVietGrid
    {
        public long Id { get; set; }
        public string Ten { get; set; }
        public string HinhAnh { get; set; }
        public string NoiDung { get; set; }
        public int? LuotXemAo { get; set; }
        public int? LuotXem { get; set; }
        public int? LuotThich { get; set; }
        public int? LuotThichAo { get; set; }
        public bool? HoatDong { get; set; }
        public bool? HienThiTrangChu { get; set; }
        public bool? HienThiAnhBia { get; set; }
        public int? ThuTuHienThi { get; set; }
        public string TenDanhMuc { get; set; }
        public DateTime CreatedOn { get; set; }
        public string CreatedOnDisplay { get; set; }
    }
}
