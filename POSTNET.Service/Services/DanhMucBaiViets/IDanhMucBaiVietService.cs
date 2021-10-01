using POSTNET.Model.Entities;
using POSTNET.Model.ValueObject.DanhMucBaiViets;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace POSTNET.Service.Services.DanhMucBaiViets
{
    public interface IDanhMucBaiVietService : IMasterBaseService<DanhMucBaiViet>
    {
        public List<DanhMucChaLookInfo> getDanhMucCha();
        public List<DanhMucChaLookInfo> geAlltDanhMuc();
        public Task<List<DanhMucBaiVietItem>> GetDanhMucHienThiMenu();
        public Task<List<DanhMucBaiVietItem>> GetDanhMucKhongHienThiMenu();
    }
}
