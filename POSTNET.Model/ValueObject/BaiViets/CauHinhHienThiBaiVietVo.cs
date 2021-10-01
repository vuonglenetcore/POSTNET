using System;
using System.Collections.Generic;
using System.Text;

namespace POSTNET.Model.ValueObject.BaiViets
{
    public class CauHinhHienThiBaiVietVo
    {
        public long Id { get; set; }
        public long BaiVIetId { get; set; }
        public string Ten { get; set; }
        public DateTime CreatedOn { get; set; }
        public string CreatedOnDisplay { get; set; }
    }
}
