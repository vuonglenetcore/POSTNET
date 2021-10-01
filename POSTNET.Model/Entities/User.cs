using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class User: BaseEntity
    {
        public string HoTen { get; set; }
        public string SoDienThoai { get; set; }
        public string Email { get; set; }
        public string MatKhau { get; set; }

        public virtual ThanhVien ThanhVien { get; set; }
        public virtual NhanVien NhanVien { get; set; }
    }
}
