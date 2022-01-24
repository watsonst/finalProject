using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Asteroid_API.Data;
using Asteroid_API.Models;

namespace Asteroid_API.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class QuotesController : Controller
    {
        private readonly Asteroid_APIContext _context;

        public QuotesController(Asteroid_APIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> GetQuotes(int percentage)
        {
            var quotes = await _context.Quotes.ToListAsync();

            var result = new OkObjectResult(quotes);
            return result;
        }
    }
}
