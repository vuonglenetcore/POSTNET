using POSTNET.Model.Entities;
using POSTNET.Model.ValueObject.BaiViets;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace POSTNET.Service.Services.BaiViets
{
    public interface IBaiVietService : IMasterBaseService<BaiViet>
    {
        Task<int> countTongSoBaiViet();
        Task<List<BaiVietGrid>> getDanhSachBaiViet();
        Task<List<BaiVietGrid>> getDanhSachBaiVietTheoDanhMucId(long danhMucId);
        Task<List<CauHinhHienThiBaiVietVo>> GetBaiVietHienThi(long danhMucId);
        Task<List<CauHinhHienThiBaiVietVo>> GetThemBaiVietChoTrang(long danhMucId);
    }
}
