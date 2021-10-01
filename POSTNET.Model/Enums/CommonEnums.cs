using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace POSTNET.Model.Enums
{
    public class CommonEnums
    {
        public enum GioiTinh
        {
            [Description("Nam")]
            Nam = 1,
            [Description("Nữ")]
            Nu = 2,
            [Description("Khác")]
            Khac = 3
        }
    }
}
