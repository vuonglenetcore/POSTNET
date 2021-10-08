using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using POSTNET.Service.Services.BaiViets;
using POSTNET.Api.Models.BaiViets;
using Microsoft.EntityFrameworkCore;
using POSTNET.Model.Entities;
using POSTNET.Model.Helpers;

namespace POSTNET.Api.Controllers
{
    public class BaiVietController : POSTNETApiBaseController
    {
        private readonly IBaiVietService _service;
        //private readonly IHinhAnhService _hinhAnhService;

        public BaiVietController(IBaiVietService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var data = await _service.getDanhSachBaiViet();

            return Ok(data);
        }

        [HttpGet("getBaiVietTheoDanhMucId/{danhMucId}")]
        public async Task<ActionResult> getBaiVietTheoDanhMucId(long danhMucId)
        {
            var data = await _service.getDanhSachBaiVietTheoDanhMucId(danhMucId);
            return Ok(data);
        }

        [HttpGet("GetBaiVietHienThi/{danhMucId}")]
        public async Task<ActionResult> GetBaiVietHienTHi(long danhMucId)
        {
            var data = await _service.GetBaiVietHienThi(danhMucId);
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(long id)
        {
            var data = await _service.GetById(id, s => s.Include(a => a.DanhMucBaiViet));
            var result = new BaiVietViewModel
            {
                Id = data.Id,
                TenBaiViet = data.TenBaiViet,
                Alias = data.Alias,
                DanhMucId = data.DanhMucBaiVietId,
                NoiDungNgan = data.NoiDungNgan,
                //NoiDungTomTat = data.NoiDungTomTat,
                NoiDung = data.NoiDung,
                HoatDong = data.HoatDong,
                HienThiTrangChu = data.HienThiTrangChu,
                HienThiAnhBia = data.HienThiAnhBia,
                UrlAnhBia = data.UrlAnhBia,
                //HienThi = data.HienThiAnhBia.GetValueOrDefault(),
                ThuTuHienThiTrangDanhMuc = data.ThuTuHienThiTrangDanhMuc,
                //LuotXemAo = data.LuotXemAo,
                //LuotXem = data.LuotXem,
                NgayTao = data.NgayTao,
                NgayUpdate = data.NgayUpdate,
                //TenDanhMuc = data.DanhMucBaiViet.TenDanhMuc
            };
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> Add([FromBody] BaiVietViewModel model)
        {
            var dateNow = DateTime.Now;
            var lastNameIMG = dateNow.ToString("ddMMyyyy");
            var data = new BaiViet
            {
                TenBaiViet = model.TenBaiViet,
                Alias = model.Alias,
                DanhMucBaiVietId = model.DanhMucId,
                NoiDungNgan = model.NoiDungNgan,
                NoiDung = model.NoiDung,
                UrlAnhBia = $@"{RootImage.RootIMG}baiviet\{model.Alias + lastNameIMG}.jpg",
                HienThiAnhBia = model.HienThiAnhBia,
                HienThiTrangChu = model.HienThiTrangChu,
                ThuTuHienThiTrangDanhMuc = model.ThuTuHienThiTrangDanhMuc,
                LuotXemAo = 200,
                LuotXem = 0,
                NgayTao = dateNow
            };
            //var baiVietHinhAnh = new BaiVietHinhAnh();//thiet ke lai 1 bai viet có 1 ha lam dai dien thoi
            //baiVietHinhAnh.CreatedOn = dateNow;
            //var hinhAnh = new HinhAnh();
            //hinhAnh.HinhAnhUrl = $@"{RootImage.RootIMG}baiviet\{model.Alias + lastNameIMG}.jpg";
            //hinhAnh.TenHinhAnh = model.Alias + lastNameIMG + "png";
            //hinhAnh.CreatedOn = dateNow;


            //baiVietHinhAnh.HinhAnh = hinhAnh;
            //data.BaiVietHinhAnhs.Add(baiVietHinhAnh);

            _service.UpImageFromBase64ToJpg(PathFolder.PathImgBaiViet, model.HinhAnhBase64, model.Alias + lastNameIMG);
            _service.Create(data);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update([FromBody] BaiVietViewModel model)
        {
            var dateNow = DateTime.Now;
            var lastNameIMG = dateNow.ToString("ddMMyyyy");
            var data = await _service.GetById(model.Id);

            data.TenBaiViet = model.TenBaiViet;
            data.Alias = model.Alias;
            data.DanhMucBaiVietId = model.DanhMucId;
            data.NoiDungNgan = model.NoiDungNgan;
            //data.NoiDungTomTat = model.NoiDungTomTat;
            data.NoiDung = model.NoiDung;
            //data.HinhAnh = $"wwwroot\\baiviet\\{model.Alias + lastNameIMG}.png";;;
            //data.HoatDong = model.HienThi;
            data.ThuTuHienThiTrangDanhMuc = model.ThuTuHienThiTrangDanhMuc;
            //data.LuotXem = model.LuotXem;
            data.NgayUpdate = DateTime.Now;
            _service.Update(data);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(long id)
        {
            var data = await _service.GetById(id);
            data.HoatDong = false;

            _service.Update(data);

            return Ok();
        }
    }
}
