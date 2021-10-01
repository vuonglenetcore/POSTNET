using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model
{
    public class BaseEntity
    {
        public long Id { get; set; }
        public long NguoiTaoId { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime NgayUpdate { get; set; }
    }
}
