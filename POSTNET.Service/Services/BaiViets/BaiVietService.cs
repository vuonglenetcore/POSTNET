using Microsoft.EntityFrameworkCore;
using POSTNET.Data.Repository;
using POSTNET.Model.Entities;
using POSTNET.Model.ValueObject.BaiViets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POSTNET.Service.Services.BaiViets
{
    public class BaiVietService : MasterBaseService<BaiViet>, IBaiVietService
    {
        private readonly IRepository<BaiViet> _repository;
        //private readonly IRepository<CauHinhHienThiBaiViet> _cauHinhHienThiBaiVietRepository;

        public BaiVietService(IRepository<BaiViet> repository) : base(repository)
        {
            _repository = repository;
        }

        public async Task<int> countTongSoBaiViet()
        {
            var tongSoBaiViet = _repository.TableNoTracking.Where(x => x.HoatDong != true).Select(x => x.Id);
            return await tongSoBaiViet.CountAsync();
        }

        //public async Task<List<CauHinhHienThiBaiVietVo>> GetBaiVietHienThi(long danhMucId, int viTriBaiViet)
        //{
        //    int sobanGhi = 0;
        //    switch (viTriBaiViet)
        //    {
        //        case 1:
        //            sobanGhi = 1;
        //            break;
        //        case 2:
        //            sobanGhi = 2;
        //            break;
        //        case 3:
        //            sobanGhi = 2;
        //            break;
        //        case 4:
        //            sobanGhi = 4;
        //            break;
        //    }

        //    if (danhMucId == 0)
        //    {
        //        var dataHome = await _cauHinhHienThiBaiVietRepository.TableNoTracking
        //        .Where(x => x.DanhMucId == null && x.ViTriHienThi == viTriBaiViet)
        //        .Select(s => new CauHinhHienThiBaiVietVo
        //        {
        //            Id = s.Id,
        //            BaiVIetId = s.BaiVietId,
        //            Ten = s.BaiViet.Ten.Length <= 30 ? s.BaiViet.Ten : s.BaiViet.Ten.Substring(0, 27) + "...",
        //            CreatedOn = s.BaiViet.CreatedOn,
        //            CreatedOnDisplay = s.BaiViet.CreatedOn.ToString("dd-MM/yyyy")
        //        }).Take(sobanGhi).ToListAsync();

        //        return dataHome;
        //    }
        //    var data = await _cauHinhHienThiBaiVietRepository.TableNoTracking
        //        .Where(x => x.DanhMucId == danhMucId && x.ViTriHienThi == viTriBaiViet)
        //        .Select(s => new CauHinhHienThiBaiVietVo
        //        {
        //            Id = s.Id,
        //            BaiVIetId = s.BaiVietId,
        //            Ten = s.BaiViet.Ten.Length <= 30 ? s.BaiViet.Ten : s.BaiViet.Ten.Substring(0, 27) + "...",
        //            CreatedOn = s.BaiViet.CreatedOn,
        //            CreatedOnDisplay = s.BaiViet.CreatedOn.ToString("dd-MM/yyyy")
        //        }).Take(viTriBaiViet).ToListAsync();

        //    return data;
        //}



        //admin
        public async Task<List<BaiVietGrid>> getDanhSachBaiViet()
        {
            var listBaiViet = await _repository.TableNoTracking.Include(x => x.DanhMucBaiViet).Select(s => new BaiVietGrid
            {
                Id = s.Id,
                Ten = s.TenBaiViet,
                NoiDung = s.NoiDung,
                HinhAnh = s.UrlAnhBia,
                HoatDong = s.HoatDong,
                HienThiTrangChu = s.HienThiTrangChu,
                HienThiAnhBia = s.HienThiAnhBia,
                ThuTuHienThi = s.ThuTuHienThi,
                LuotXemAo = s.LuotThichAo == null ? 0 : s.LuotThichAo,
                LuotXem = s.LuotXem == null ? 0 : s.LuotXem,
                LuotThich = s.LuotThich == null ? 0 : s.LuotThich,
                LuotThichAo = s.LuotThichAo == null ? 0 : s.LuotThichAo,
                CreatedOn = s.NgayTao,
                CreatedOnDisplay = s.NgayTao.ToString("dd-MM/yyyy"),
                TenDanhMuc = s.DanhMucBaiViet.TenDanhMuc
            }).ToListAsync();

            return listBaiViet;
        }

        public async Task<List<BaiVietGrid>> getDanhSachBaiVietTheoDanhMucId(long danhMucId)
        {
            var listBaiViet = await _repository.TableNoTracking.Where(x => x.DanhMucBaiVietId == danhMucId)
                .Include(x => x.DanhMucBaiViet)
                .OrderBy(x => x.ThuTuHienThi).Select(s => new BaiVietGrid
                {
                    Id = s.Id,
                    Ten = s.TenBaiViet,
                    NoiDung = s.NoiDung,
                    HinhAnh = s.UrlAnhBia,
                    HoatDong = s.HoatDong,
                    HienThiAnhBia = s.HienThiAnhBia,
                    ThuTuHienThi = s.ThuTuHienThi,
                    LuotXemAo = s.LuotXemAo,
                    LuotXem = s.LuotXem,
                    CreatedOn = s.NgayTao,
                    CreatedOnDisplay = s.NgayTao.ToString("dd-MM/yyyy"),
                    TenDanhMuc = s.DanhMucBaiViet.TenDanhMuc
                }).ToListAsync();

            return listBaiViet;
        }

        public async Task<List<CauHinhHienThiBaiVietVo>> GetThemBaiVietChoTrang(long danhMucId, int viTriBaiViet)
        {
            var data = _repository.TableNoTracking;
            if (danhMucId == 0)
            {
                data = data.Where(x => x.HoatDong != true);
            }
            else
            {
                data = data.Where(x => x.DanhMucBaiVietId == danhMucId && x.HoatDong != true);
            }
            var result = await data.Select(s => new CauHinhHienThiBaiVietVo
            {
                Id = s.Id,
                BaiVIetId = s.Id,
                Ten = s.TenBaiViet,
                CreatedOn = s.NgayTao
            }).ToListAsync();

            return result;
        }
    }
}
