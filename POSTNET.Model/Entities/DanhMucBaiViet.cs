using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class DanhMucBaiViet: BaseEntity
    {
        public string TenDanhMuc { get; set; }
        public string Alias { get; set; }
        public bool HienThiMenu { get; set; }
        public int ThuTuHienThi { get; set; }
        public bool HoatDong { get; set; }

        private ICollection<BaiViet> _baiViets;
        public virtual ICollection<BaiViet> BaiViets
        {
            get => _baiViets ??
                   (_baiViets = new List<BaiViet>());
            protected set => _baiViets = value;
        }
    }
}
