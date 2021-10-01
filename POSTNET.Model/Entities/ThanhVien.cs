using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class ThanhVien: BaseEntity
    {
        public string HoTen { get; set; }
        public string Email { get; set; }
        public string SoDienThoai { get; set; }
        public long LoaiThanhVienId { get; set; }

        public virtual User User { get; set; }
        public virtual LoaiThanhVien LoaiThanhVien { get; set; }
    }
}
