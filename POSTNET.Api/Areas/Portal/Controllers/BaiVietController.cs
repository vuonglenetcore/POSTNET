using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using POSTNET.Service.Services.BaiViets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POSTNET.Api.Areas.Portal.Controllers
{
    public class BaiVietController : POSTNETPortalApiBaseController
    {
        private readonly IBaiVietService _service;
        public BaiVietController(IBaiVietService service)
        {
            _service = service;
        }

        [HttpGet("GetBaiViet")]
        public async Task<ActionResult> GetBaiViet()
        {
            var data = await _service.getDanhSachBaiViet();
            return Ok(data);
        }
    }
}
