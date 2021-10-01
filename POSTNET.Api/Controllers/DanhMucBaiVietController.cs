using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using POSTNET.Service.Services.DanhMucBaiViets;
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

        [HttpGet("getall")]
        public async Task<ActionResult> Get()
        {
            var data = await _service.GetAll();
            return Ok(data);
        }
    }
}
