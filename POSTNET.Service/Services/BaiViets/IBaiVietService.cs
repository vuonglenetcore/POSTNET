using POSTNET.Model.ValueObject.BaiViets;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace POSTNET.Service.Services.BaiViets
{
    public interface IBaiVietService
    {
        Task<int> countTongSoBaiViet();
        Task<List<BaiVietGrid>> getDanhSachBaiViet();
        Task<List<BaiVietGrid>> getDanhSachBaiVietTheoDanhMucId(long danhMucId);
        //Task<List<CauHinhHienThiBaiVietVo>> GetBaiVietHienThi(long danhMucId, int viTriBaiViet);
        Task<List<CauHinhHienThiBaiVietVo>> GetThemBaiVietChoTrang(long danhMucId, int viTriBaiViet);
    }
}
