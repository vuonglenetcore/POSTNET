using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POSTNET.Api.Models
{
    public class BaseViewModel
    {
        public long Id { get; set; }
        public DateTime NgayTao { get; set; }
        public DateTime? NgayUpdate { get; set; }
    }
}
