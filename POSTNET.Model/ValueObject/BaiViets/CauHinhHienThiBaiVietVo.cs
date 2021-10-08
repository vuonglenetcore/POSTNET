using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.ValueObject.BaiViets
{
    public class CauHinhHienThiBaiVietVo
    {
        public long Id { get; set; }
        public long DanhMucId { get; set; }
        public string TenBaiViet { get; set; }
        public DateTime NgayTao { get; set; }
        public string NgayTaoDisplay => NgayTao.ToString("dd-MM/yyyy");
        public string CreatedOnDisplay { get; set; }
        public int? ViTri { get; set; }
    }
}
