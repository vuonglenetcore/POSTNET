using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class BinhLuan: BaseEntity
    {
        public long BaiVietId { get; set; }
        public long ThanhVienId { get; set; }
        public string TenThanhVien { get; set; }
        public string NoiDungBinhLuan { get; set; }
        public long BinhLuanChaIdId { get; set; }

        public virtual BaiViet BaiViet { get; set; }
    }
}
