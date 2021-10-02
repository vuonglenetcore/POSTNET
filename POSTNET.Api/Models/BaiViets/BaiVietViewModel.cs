using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POSTNET.Api.Models.BaiViets
{
    public class BaiVietViewModel: BaseViewModel
    {
        public string TenBaiViet { get; set; }
        public string Alias { get; set; }
        public string HinhAnhBase64 { get; set; }
        public string NoiDungNgan { get; set; }
        //public string NoiDungTomTat { get; set; }
        public string NoiDung { get; set; }
        public int? LuotXemAo { get; set; }
        public int? LuotXem { get; set; }
        public bool? HoatDong { get; set; }
        public string UrlAnhBia { get; set; }
        public bool? HienThiAnhBia { get; set; }
        public bool? HienThiTrangChu { get; set; }
        public int? ThuTuHienThi { get; set; }
        public long DanhMucId { get; set; }
        public string TenDanhMuc { get; set; }
    }
}
