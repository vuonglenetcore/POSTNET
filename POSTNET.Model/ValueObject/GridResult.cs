using System.Collections.Generic;

namespace POSTNET.Model.ValueObject
{
    public class GridResult<T> where T : class
    {
        public List<T> Data { get; set; }
        public int TotalPage { get; set; }
    }
}