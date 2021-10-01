using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.ValueObject.DanhMucBaiViets
{
    public class DanhMucBaiVietItem
    {
        public long DanhMucId { get; set; }
        public string TenDanhMuc { get; set; }
        public int ThuTuHienThi { get; set; }
        public int? ThuTuSapXep { get; set; }
    }
}
