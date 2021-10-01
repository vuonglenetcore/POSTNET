using Microsoft.EntityFrameworkCore;
using POSTNET.Data.Repository;
using POSTNET.Model.Entities;
using POSTNET.Model.ValueObject.DanhMucBaiViets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POSTNET.Service.Services.DanhMucBaiViets
{
    public class DanhMucBaiVietService : MasterBaseService<DanhMucBaiViet>, IDanhMucBaiVietService
    {
        private readonly IRepository<DanhMucBaiViet> _repository;

        public DanhMucBaiVietService(IRepository<DanhMucBaiViet> repository) : base(repository)
        {
            _repository = repository;
        }

        public List<DanhMucChaLookInfo> getDanhMucCha()
        {
            var data = _repository.TableNoTracking.Where(x => x.Id != 0).Select(s => new DanhMucChaLookInfo
            {
                Id = s.Id,
                TenDanhMuc = s.TenDanhMuc
            }).ToList();

            return data;

        }
        public List<DanhMucChaLookInfo> geAlltDanhMuc()
        {
            var data = _repository.TableNoTracking.Select(s => new DanhMucChaLookInfo
            {
                Id = s.Id,
                ViTriHienThi = s.ThuTuHienThi,
                ThuTuSapXep = s.ThuTuHienThi == null ? 99 : s.ThuTuHienThi,
                TenDanhMuc = s.TenDanhMuc
            }).OrderBy(x => x.ThuTuSapXep).ToList();

            return data;

        }

        public async Task<List<DanhMucBaiVietItem>> GetDanhMucHienThiMenu()
        {
            var data = await _repository.TableNoTracking.Where(x => x.HienThiMenu == true)
                .OrderBy(x => x.ThuTuHienThi)
                .Select(s => new DanhMucBaiVietItem
                {
                    DanhMucId = s.Id,
                    TenDanhMuc = s.TenDanhMuc,
                    ThuTuHienThi = s.ThuTuHienThi.GetValueOrDefault(),
                    ThuTuSapXep = s.ThuTuHienThi == null ? 999 : s.ThuTuHienThi
                }).OrderBy(x => x.ThuTuSapXep).ToListAsync();

            return data;
        }

        public async Task<List<DanhMucBaiVietItem>> GetDanhMucKhongHienThiMenu()
        {
            var data = await _repository.TableNoTracking.Where(x => x.HienThiMenu != true)
                .OrderBy(x => x.ThuTuHienThi)
                .Select(s => new DanhMucBaiVietItem
                {
                    DanhMucId = s.Id,
                    TenDanhMuc = s.TenDanhMuc,
                    ThuTuHienThi = s.ThuTuHienThi.GetValueOrDefault(),
                    ThuTuSapXep = s.ThuTuHienThi == null ? 999 : s.ThuTuHienThi
                }).OrderBy(x => x.ThuTuSapXep).ToListAsync();

            return data;
        }
    }
}
