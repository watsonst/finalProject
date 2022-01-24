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
    [Route("[controller]")]
    [ApiController]
    public class FanFavoritesController : Controller
    {
        private readonly Asteroid_APIContext _context;

        public FanFavoritesController(Asteroid_APIContext context)
        {
            _context = context;
        }

        // GET: FanFavorites
        [HttpGet]
        [Route("FavList")]
        public async Task<IActionResult> GetFavorites(int ID)
        {
            var favs = await _context.FanFavorites.ToListAsync();

            var result = new OkObjectResult(favs);
            return result;
        }

        [HttpPost]
        [Route("NewFav")]
        public async Task<IActionResult> CreateFav([Bind("Date, Percentage, Counter")] FanFavorites favorite)
        {
            var newFav = new FanFavorites();

            newFav.Date = favorite.Date;
            newFav.Percentage = favorite.Percentage;
            newFav.Counter = favorite.Counter;

            await _context.AddAsync(newFav);
            await _context.SaveChangesAsync();

            var result = new OkObjectResult(newFav);
            return result;
        }

        [HttpPost]
        [Route("UpdateFav")]
        public async Task<IActionResult> UpdateFav(int ID)
        {
            var updateFav = await _context.FanFavorites.FirstOrDefaultAsync(m => m.ID == ID);

            updateFav.Counter++;

            await _context.SaveChangesAsync();

            var result = new OkObjectResult(updateFav);
            return result;
        }

        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> DeleteFavorite(int ID)
        {
            var selectID = await _context.FanFavorites.FirstOrDefaultAsync(m => m.ID == ID);

            if(selectID == null)
            {
                return NotFound();
            }

            _context.FanFavorites.Remove(selectID);
            await _context.SaveChangesAsync();

            var result = new OkObjectResult(selectID);
            return result;
        }

    }
}
