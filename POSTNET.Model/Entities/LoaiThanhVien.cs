using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class LoaiThanhVien: BaseEntity
    {
        public string TenLoai { get; set; }

        public ICollection<ThanhVien> _thanhViens;
        public virtual ICollection<ThanhVien> ThanhViens
        {
            get => _thanhViens ??
                (_thanhViens = new List<ThanhVien>());
            protected set => _thanhViens = value;
        }
    }
}
