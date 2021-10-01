using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class NhanVien: BaseEntity
    {
        public string HoTen { get; set; }
        public string Email { get; set; }
        public string SoDienThoai { get; set; }
        public long LoaiNhanVienId { get; set; }

        public virtual User User { get; set; }
        public virtual LoaiNhanVien LoaiNhanVien { get; set; }
    }
}
