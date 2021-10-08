using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class BaiViet: BaseEntity
    {
        public string TenBaiViet { get; set; }
        public string Alias { get; set; }
        public string NoiDungNgan { get; set; }
        public string NoiDung { get; set; }
        public string UrlAnhBia { get; set; }
        public bool? HienThiAnhBia { get; set; }
        public bool? HienThiTrangChu { get; set; }
        public bool? HoatDong { get; set; }
        public int? ThuTuHienThiTrangChu { get; set; }
        public int? ThuTuHienThiTrangDanhMuc { get; set; }
        public int? LuotXem { get; set; }
        public int? LuotThich { get; set; }
        public int? LuotBinhLuan { get; set; }
        public int? LuotXemAo { get; set; }
        public int? LuotThichAo { get; set; }
        public long DanhMucBaiVietId { get; set; }

        public virtual DanhMucBaiViet DanhMucBaiViet { get; set; }
        public ICollection<TuKhoaBaiViet> _tuKhoaBaiViets;
        public virtual ICollection<TuKhoaBaiViet> TuKhoaBaiViets
        {
            get => _tuKhoaBaiViets ??
                   (_tuKhoaBaiViets = new List<TuKhoaBaiViet>());
            protected set => _tuKhoaBaiViets = value;
        }
        public ICollection<BinhLuan> _binhLuans;
        public virtual ICollection<BinhLuan> BinhLuans
        {
            get => _binhLuans ??
                (_binhLuans = new List<BinhLuan>());
            protected set => _binhLuans = value;
        }
    }
}
