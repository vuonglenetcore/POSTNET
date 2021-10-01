using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.Entities
{
    public class TuKhoaBaiViet: BaseEntity
    {
        public long BaiVietId { get; set; }
        public string TenTuKhoa { get; set; }

        public virtual BaiViet BaiViet { get; set; }
    }
}
