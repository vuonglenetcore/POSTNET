using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using POSTNET.Api.Models.BaiViets;
using POSTNET.Service.Services.BaiViets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POSTNET.Api.Controllers
{
    public class CauHinhHienThiBaiVietController : POSTNETApiBaseController
    {
        private readonly IBaiVietService _service;
        public CauHinhHienThiBaiVietController(IBaiVietService service)
        {
            _service = service;
        }

        [HttpGet("GetThemBaiVietChoTrang/{danhMucId}")]
        public async Task<ActionResult> GetThemBaiVietChoTrang(long danhMucId)
        {
            var data = await _service.GetThemBaiVietChoTrang(danhMucId);

            return Ok(data);
        }

        [HttpPost("ThemCauHinhBaiViet")]
        public async Task<ActionResult> Add([FromBody] ThemBaiVietHienThi model)
        {           

            var baiViet = await _service.GetById(model.BaiVietId);
            if(baiViet == null)
            {
                return NotFound();
            }
            if (model.DanhMucId == 0 || model.DanhMucId == null)
            {
                baiViet.HienThiTrangChu = true;
                baiViet.ThuTuHienThiTrangChu = model.ViTriId;
            }
            else
            {
                baiViet.ThuTuHienThiTrangDanhMuc = model.ViTriId;
            }

            _service.Update(baiViet);

            return Ok(true);
        }

        [HttpDelete("Delete/{danhMucId}/{baiVietId}")]
        public async Task<ActionResult> Delete(long danhMucId, long baiVietId)
        {
            var baiViet = await _service.GetById(baiVietId);
            if (baiViet == null)
            {
                return NotFound();
            }
            if(danhMucId == 0)
            {
                baiViet.ThuTuHienThiTrangChu = null;
            }
            else
            {
                baiViet.ThuTuHienThiTrangDanhMuc = null;
            }
            _service.Update(baiViet);

            return Ok(true);
        }
    }
}
