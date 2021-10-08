using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POSTNET.Api.Models.BaiViets
{
    public class ThemBaiVietHienThi
    {
        public long BaiVietId { get; set; }
        public long? DanhMucId { get; set; }
        public int ViTriId { get; set; }
    }
}
