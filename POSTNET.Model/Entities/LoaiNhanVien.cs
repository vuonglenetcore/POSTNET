using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class LoaiNhanVien: BaseEntity
    {
        public string TenLoai { get; set; }

        public ICollection<NhanVien> _nhanViens;
        public virtual ICollection<NhanVien> NhanViens
        {
            get => _nhanViens ??
                (_nhanViens = new List<NhanVien>());
            protected set => _nhanViens = value;
        }
    }
}
