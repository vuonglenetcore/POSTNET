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

        public async Task<List<CauHinhHienThiBaiVietVo>> GetBaiVietHienThi(long danhMucId)
        {
            int[] thuTuHienThis = { 1, 2, 3, 4};
            if (danhMucId == 0)
            {
                var dataHome = await _repository.TableNoTracking
                .Where(x => x.HienThiTrangChu == true && thuTuHienThis.Contains(x.ThuTuHienThiTrangChu.Value))
                .Select(s => new CauHinhHienThiBaiVietVo
                {
                    Id = s.Id,
                    DanhMucId = s.DanhMucBaiVietId,
                    TenBaiViet = s.TenBaiViet.Length <= 30 ? s.TenBaiViet : s.TenBaiViet.Substring(0, 27) + "...",
                    NgayTao = s.NgayTao,
                    ViTri = s.ThuTuHienThiTrangChu
                }).ToListAsync();

                return dataHome;
            }
            var data = await _repository.TableNoTracking
                .Where(x => x.DanhMucBaiVietId == danhMucId && thuTuHienThis.Contains(x.ThuTuHienThiTrangDanhMuc.Value))
                .Select(s => new CauHinhHienThiBaiVietVo
                {
                    Id = s.Id,
                    TenBaiViet = s.TenBaiViet.Length <= 30 ? s.TenBaiViet : s.TenBaiViet.Substring(0, 27) + "...",
                    NgayTao = s.NgayTao,
                    ViTri = s.ThuTuHienThiTrangDanhMuc
                }).ToListAsync();

            return data;
        }



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
                ThuTuHienThiTrangDanhMuc = s.ThuTuHienThiTrangDanhMuc,
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
                .OrderBy(x => x.ThuTuHienThiTrangDanhMuc).Select(s => new BaiVietGrid
                {
                    Id = s.Id,
                    Ten = s.TenBaiViet,
                    NoiDung = s.NoiDung,
                    HinhAnh = s.UrlAnhBia,
                    HoatDong = s.HoatDong,
                    HienThiAnhBia = s.HienThiAnhBia,
                    ThuTuHienThiTrangDanhMuc = s.ThuTuHienThiTrangDanhMuc,
                    LuotXemAo = s.LuotXemAo,
                    LuotXem = s.LuotXem,
                    CreatedOn = s.NgayTao,
                    CreatedOnDisplay = s.NgayTao.ToString("dd-MM/yyyy"),
                    TenDanhMuc = s.DanhMucBaiViet.TenDanhMuc
                }).ToListAsync();

            return listBaiViet;
        }

        public async Task<List<CauHinhHienThiBaiVietVo>> GetThemBaiVietChoTrang(long danhMucId)
        {
            int[] thuTuHienThis = { 1, 2, 3, 4};
            var data = _repository.TableNoTracking;
            if (danhMucId == 0)
            {
                data = data.Where(x => x.HoatDong == true && !thuTuHienThis.Contains(x.ThuTuHienThiTrangChu.Value));
            }
            else
            {
                data = data.Where(x => x.DanhMucBaiVietId == danhMucId && x.HoatDong == true && !thuTuHienThis.Contains(x.ThuTuHienThiTrangDanhMuc.Value));
            }
            var result = await data.Select(s => new CauHinhHienThiBaiVietVo
            {
                Id = s.Id,
                TenBaiViet = s.TenBaiViet,
                NgayTao = s.NgayTao
            }).ToListAsync();

            return result;
        }
    }
}
