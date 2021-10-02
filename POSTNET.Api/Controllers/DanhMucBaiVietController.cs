using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using POSTNET.Service.Services.DanhMucBaiViets;
using POSTNET.Api.Models.DanhMucBaiViets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POSTNET.Api.Controllers
{
    public class DanhMucBaiVietController : POSTNETApiBaseController
    {
        private readonly IDanhMucBaiVietService _service;
        public DanhMucBaiVietController(IDanhMucBaiVietService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var data = await _service.GetAll();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(long id)
        {

            var data = await _service.GetById(id);
            var result = new DanhMucBaiVietViewModel
            {
                Id = data.Id,
                TenDanhMuc = data.TenDanhMuc,
                Alias = data.Alias,
                DanhMucChaId = data.DanhMucChaId.GetValueOrDefault(),
                //TenDanhMucCha = data.DanhMucChaId != null ? 
                HienThiMenu = data.HienThiMenu,
                ThuTuHienThi = data.ThuTuHienThi,
                NgayTao = data.NgayTao,
                NgayUpdate = data.NgayUpdate
            };
            return Ok(result);
        }

        [HttpGet("getDanhMucCha")]
        public ActionResult GetDanhMucCha()
        {
            var data = _service.getDanhMucCha();
            return Ok(data);
        }

        [HttpGet("GetDanhMucHienThiMenu")]
        public async Task<ActionResult> GetDanhMucHienThiMenu()
        {
            var data = await _service.GetDanhMucHienThiMenu();
            return Ok(data);
        }

        [HttpGet("GetDanhMucKhongHienThiMenu")]
        public async Task<ActionResult> GetDanhMucKhongHienThiMenu()
        {
            var data = await _service.GetDanhMucKhongHienThiMenu();
            return Ok(data);
        }

        [HttpGet("geAlltDanhMuc")]
        public ActionResult geAlltDanhMuc()
        {
            var data = _service.geAlltDanhMuc();
            return Ok(data);
        }

        [HttpPost]
        public async Task<ActionResult> Add([FromBody] DanhMucBaiVietViewModel model)
        {
            var data = new Model.Entities.DanhMucBaiViet
            {
                DanhMucChaId = model.DanhMucChaId,
                TenDanhMuc = model.TenDanhMuc,
                Alias = model.Alias,
                HienThiMenu = model.HienThiMenu,
                ThuTuHienThi = model.ThuTuHienThi,
                NgayTao = DateTime.Now
            };

            _service.Create(data);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update([FromBody] DanhMucBaiVietViewModel model)
        {
            var data = await _service.GetById(model.Id);

            data.TenDanhMuc = model.TenDanhMuc;
            data.Alias = model.Alias;
            data.HienThiMenu = model.HienThiMenu;
            data.ThuTuHienThi = model.ThuTuHienThi;
            data.NgayUpdate = DateTime.Now;

            _service.Update(data);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(long id)
        {
            var data = await _service.GetById(id);
            _service.Delete(data);

            return Ok();
        }
    }
}
