using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.ValueObject.DanhMucBaiViets
{
    public class DanhMucChaLookInfo
    {
        public long Id { get; set; }
        public int? ViTriHienThi { get; set; }
        public int? ThuTuSapXep { get; set; }
        public string TenDanhMuc { get; set; }
    }
}
