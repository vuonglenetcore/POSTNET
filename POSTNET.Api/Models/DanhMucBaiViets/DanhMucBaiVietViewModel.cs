using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POSTNET.Api.Models.DanhMucBaiViets
{
    public class DanhMucBaiVietViewModel : BaseViewModel
    {
        public long DanhMucChaId { get; set; }
        public string TenDanhMucCha { get; set; }
        public string TenDanhMuc { get; set; }
        public string Alias { get; set; }
        public bool? HienThiMenu { get; set; }
        public int? ThuTuHienThi { get; set; }
        public string Logo { get; set; }
    }
}
